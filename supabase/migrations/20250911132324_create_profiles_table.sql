CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID DEFAULT gen_random_uuid () PRIMARY KEY,
    user_id UUID REFERENCES auth.users (id) ON DELETE CASCADE UNIQUE NOT NULL,
    role_id UUID REFERENCES public.roles (id) ON DELETE SET NULL,
    email VARCHAR(255),
    full_name VARCHAR(255),
    avatar_url TEXT,
    phone VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_profiles_user_id ON public.profiles (user_id);

CREATE INDEX IF NOT EXISTS idx_profiles_role_id ON public.profiles (role_id);

CREATE INDEX IF NOT EXISTS idx_profiles_email ON public.profiles (email);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile" ON public.profiles FOR
SELECT USING (auth.uid () = user_id);

CREATE POLICY "Users can update own profile" ON public.profiles
FOR UPDATE
    USING (auth.uid () = user_id);

CREATE POLICY "Admins can view all profiles" ON public.profiles FOR
SELECT USING (
        EXISTS (
            SELECT 1
            FROM public.profiles
            WHERE
                profiles.user_id = auth.uid ()
                AND profiles.role_id = (
                    SELECT id
                    FROM public.roles
                    WHERE
                        name = 'admin'
                )
        )
    );

CREATE POLICY "Admins can update all profiles" ON public.profiles
FOR UPDATE
    USING (
        EXISTS (
            SELECT 1
            FROM public.profiles
            WHERE
                profiles.user_id = auth.uid ()
                AND profiles.role_id = (
                    SELECT id
                    FROM public.roles
                    WHERE
                        name = 'admin'
                )
        )
    );

CREATE POLICY "Allow admin to manage roles" ON public.roles FOR ALL USING (
    EXISTS (
        SELECT 1
        FROM public.profiles
        WHERE
            profiles.user_id = auth.uid ()
            AND profiles.role_id = (
                SELECT id
                FROM public.roles
                WHERE
                    name = 'admin'
            )
    )
);

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email, role_id)
  VALUES (
      NEW.id,
      NEW.email,
      (SELECT id FROM public.roles WHERE name = 'client')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

CREATE TRIGGER handle_updated_at_profiles
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();