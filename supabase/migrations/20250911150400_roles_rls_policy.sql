
DROP POLICY IF EXISTS "Users can view roles" ON roles;

CREATE POLICY "Allow read access to roles" ON roles FOR
SELECT TO authenticated USING (true);