CREATE TABLE IF NOT EXISTS public.roles (
    id UUID DEFAULT gen_random_uuid () PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

INSERT INTO
    public.roles (name)
VALUES ('bookkeeper'),
    ('admin'),
    ('client')
ON CONFLICT (name) DO NOTHING;

ALTER TABLE public.roles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow read access to roles for authenticated users" ON public.roles FOR
SELECT USING (
        auth.role () = 'authenticated'
    );

CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER handle_updated_at_roles
  BEFORE UPDATE ON public.roles
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();