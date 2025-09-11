'use client'

import { useState, useEffect } from 'react'
import { User } from '@supabase/supabase-js'
import { authService, UserProfile } from '@/lib/services/authService'

interface UseAuthReturn {
    user: User | null
    profile: UserProfile | null
    isLoading: boolean
    isAuthenticated: boolean
    error: string | null
    signOut: () => Promise<{ success: boolean; error?: string }>
    refreshProfile: () => Promise<void>
    hasRole: (role: string) => boolean
    canAccess: (roles: string[]) => boolean
}

export function useAuth(): UseAuthReturn {
    const [user, setUser] = useState<User | null>(null)
    const [profile, setProfile] = useState<UserProfile | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const refreshProfile = async () => {
        if (!user) return

        try {
            const userProfile = await authService.getCurrentProfile()
            setProfile(userProfile)
            setError(null)
        } catch (err) {
            console.error('Error refreshing profile:', err)
            setError('Failed to refresh user profile')
        }
    }

    const signOut = async () => {
        try {
            setIsLoading(true)
            const result = await authService.signOut()

            if (result.success) {
                setUser(null)
                setProfile(null)
                setError(null)
            } else {
                setError(result.error || 'Sign out failed')
            }

            return result
        } catch (err) {
            console.error('Sign out error:', err)
            const errorMessage = 'Sign out failed'
            setError(errorMessage)
            return { success: false, error: errorMessage }
        } finally {
            setIsLoading(false)
        }
    }

    const hasRole = (role: string): boolean => {
        if (!user) return false
        return authService.hasRole(role)
    }

    const canAccess = (roles: string[]): boolean => {
        if (!user) return false
        return authService.canAccess(roles)
    }

    useEffect(() => {
        const initAuth = async () => {
            try {
                setError(null)

                const currentUser = authService.getCurrentUser()
                setUser(currentUser)

                if (currentUser) {
                    const userProfile = await authService.getCurrentProfile()
                    setProfile(userProfile)
                }
            } catch (err) {
                console.error('Auth initialization error:', err)
                setError('Failed to initialize authentication')
            } finally {
                setIsLoading(false)
            }
        }

        initAuth()

    }, [])

    return {
        user,
        profile,
        isLoading,
        isAuthenticated: !!user,
        error,
        signOut,
        refreshProfile,
        hasRole,
        canAccess,
    }
}