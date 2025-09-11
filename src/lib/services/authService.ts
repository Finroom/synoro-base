import { createClient, User, Session, AuthError } from '@supabase/supabase-js'
import { Database } from '@/types/database'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

export interface UserProfile {
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

export interface AuthResult {
    success: boolean
    error?: string
    message?: string
}

export interface SignInResult extends AuthResult {
    user?: User
    session?: Session
}

export interface SignUpResult extends AuthResult {
    user?: User
    session?: Session
}

export interface ProfileResult extends AuthResult {
    profile?: UserProfile
}

export interface ProfileUpdate {
    full_name?: string
    phone?: string
    avatar_url?: string
    email?: string
}

export interface SignUpData {
    full_name?: string
    phone?: string
    [key: string]: any
}

export class AuthService {
    private user: User | null = null
    private profile: UserProfile | null = null
    private session: Session | null = null
    private profileLoading = false

    constructor() {
        this.initializeAuth()

        supabase.auth.onAuthStateChange(async (event, session) => {
            this.session = session
            this.user = session?.user || null

            if (event === 'SIGNED_IN' && this.user) {
                await this.loadUserProfile()
            } else if (event === 'SIGNED_OUT') {
                this.profile = null
            }
        })
    }

    private async initializeAuth(): Promise<void> {
        try {
            const { data: { session } } = await supabase.auth.getSession()

            if (session) {
                this.session = session
                this.user = session.user
                await this.loadUserProfile()
            }
        } catch (error) {
            console.error('Auth initialization error:', error)
        }
    }

    async signIn(email: string, password: string): Promise<SignInResult> {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password
            })

            if (error) throw error

            return {
                success: true,
                user: data.user,
                session: data.session
            }
        } catch (error) {
            return {
                success: false,
                error: this.getErrorMessage(error as AuthError)
            }
        }
    }

    async signUp(email: string, password: string, userData: SignUpData = {}): Promise<SignUpResult> {
        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: { data: userData }
            })

            if (error) throw error

            return {
                success: true,
                user: data.user || undefined,
                session: data.session || undefined,
                message: data.user?.email_confirmed_at
                    ? 'Registration successful'
                    : 'Check your email to confirm registration'
            }
        } catch (error) {
            return {
                success: false,
                error: this.getErrorMessage(error as AuthError)
            }
        }
    }

    async signOut(): Promise<AuthResult> {
        try {
            const { error } = await supabase.auth.signOut()
            if (error) throw error

            this.user = null
            this.profile = null
            this.session = null

            return { success: true }
        } catch (error) {
            return {
                success: false,
                error: this.getErrorMessage(error as AuthError)
            }
        }
    }

    async loadUserProfile(): Promise<UserProfile | null> {
        if (!this.user || this.profileLoading) return null

        this.profileLoading = true

        try {
            const { data: profileData, error: profileError } = await supabase
                .from('profiles')
                .select('*')
                .eq('user_id', this.user.id)
                .single()

            if (profileError) throw profileError

            const { data: roleData, error: roleError } = await supabase
                .from('roles')
                .select('name')
                .eq('id', (profileData as any).role_id)
                .single()

            if (roleError) throw roleError

            this.profile = {
                ...(profileData as any),
                role_name: (roleData as any).name
            } as UserProfile

            return this.profile
        } catch (error) {
            console.error('Profile loading error:', error)
            return null
        } finally {
            this.profileLoading = false
        }
    }

    async getCurrentProfile(): Promise<UserProfile | null> {
        return this.profile || await this.loadUserProfile()
    }

    hasRole(roleName: string): boolean {
        return this.profile?.role_name === roleName
    }

    isAdmin(): boolean {
        return this.hasRole('admin')
    }

    isBookkeeper(): boolean {
        return this.hasRole('bookkeeper')
    }

    isClient(): boolean {
        return this.hasRole('client')
    }

    getCurrentUser(): User | null {
        return this.user
    }

    getCurrentSession(): Session | null {
        return this.session
    }

    isAuthenticated(): boolean {
        return !!this.user && !!this.session
    }

    async resetPassword(email: string): Promise<AuthResult> {
        try {
            const { error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: `${window.location.origin}/reset-password`
            })

            if (error) throw error

            return {
                success: true,
                message: 'Password reset email sent'
            }
        } catch (error) {
            return {
                success: false,
                error: this.getErrorMessage(error as AuthError)
            }
        }
    }

    async updatePassword(newPassword: string): Promise<AuthResult> {
        try {
            const { error } = await supabase.auth.updateUser({
                password: newPassword
            })

            if (error) throw error

            return {
                success: true,
                message: 'Password updated successfully'
            }
        } catch (error) {
            return {
                success: false,
                error: this.getErrorMessage(error as AuthError)
            }
        }
    }

    canAccess(requiredRoles: string[]): boolean {
        if (!this.profile) return false
        return requiredRoles.includes(this.profile.role_name)
    }

    private getErrorMessage(error: AuthError | any): string {
        const errorMessages: Record<string, string> = {
            'Invalid login credentials': 'Invalid email or password',
            'Email not confirmed': 'Please confirm your email address',
            'User already registered': 'User with this email is already registered',
            'Password should be at least 6 characters': 'Password must be at least 6 characters',
            'Unable to validate email address: invalid format': 'Invalid email format',
            'Too many requests': 'Too many attempts. Please try again later'
        }

        return errorMessages[error?.message] || error?.message || 'An error occurred'
    }
}

export const authService = new AuthService()

export const getCurrentUser = (): User | null => authService.getCurrentUser()
export const getCurrentProfile = (): Promise<UserProfile | null> => authService.getCurrentProfile()
export const isAuthenticated = (): boolean => authService.isAuthenticated()
export const hasRole = (role: string): boolean => authService.hasRole(role)
export const isAdmin = (): boolean => authService.isAdmin()
export const isBookkeeper = (): boolean => authService.isBookkeeper()
export const isClient = (): boolean => authService.isClient()
export const canAccess = (roles: string[]): boolean => authService.canAccess(roles)