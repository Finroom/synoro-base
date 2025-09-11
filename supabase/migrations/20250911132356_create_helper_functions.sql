CREATE OR REPLACE FUNCTION public.get_user_role(user_uuid UUID)
RETURNS TEXT AS $$
BEGIN
  RETURN (
      SELECT r.name
      FROM public.profiles p
      JOIN public.roles r ON p.role_id = r.id
      WHERE p.user_id = user_uuid
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION public.has_role(user_uuid UUID, role_name TEXT)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
      SELECT 1
      FROM public.profiles p
      JOIN public.roles r ON p.role_id = r.id
      WHERE p.user_id = user_uuid AND r.name = role_name
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE VIEW public.profiles_with_roles AS
SELECT p.id, p.user_id, p.email, p.full_name, p.avatar_url, p.phone, p.created_at, p.updated_at, r.name as role_name
FROM public.profiles p
    LEFT JOIN public.roles r ON p.role_id = r.id;

GRANT SELECT ON public.profiles_with_roles TO authenticated;