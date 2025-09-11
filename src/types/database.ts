export interface Database {
    public: {
        Tables: {
            profiles: {
                Row: {
                    id: string
                    user_id: string
                    role_id: string
                    email: string | null
                    full_name: string | null
                    avatar_url: string | null
                    phone: string | null
                    created_at: string
                    updated_at: string
                }
                Insert: {
                    id?: string
                    user_id: string
                    role_id: string
                    email?: string | null
                    full_name?: string | null
                    avatar_url?: string | null
                    phone?: string | null
                    created_at?: string
                    updated_at?: string
                }
                Update: {
                    id?: string
                    user_id?: string
                    role_id?: string
                    email?: string | null
                    full_name?: string | null
                    avatar_url?: string | null
                    phone?: string | null
                    created_at?: string
                    updated_at?: string
                }
            }
            roles: {
                Row: {
                    id: string
                    name: string
                    created_at: string
                    updated_at: string
                }
                Insert: {
                    id?: string
                    name: string
                    created_at?: string
                    updated_at?: string
                }
                Update: {
                    id?: string
                    name?: string
                    created_at?: string
                    updated_at?: string
                }
            }
        }
        Views: {
            profiles_with_roles: {
                Row: {
                    id: string
                    user_id: string
                    role_id: string
                    email: string | null
                    full_name: string | null
                    avatar_url: string | null
                    phone: string | null
                    role_name: string
                    created_at: string
                    updated_at: string
                }
            }
        }
    }
}