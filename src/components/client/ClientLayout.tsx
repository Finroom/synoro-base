'use client'

import React, { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { authService, UserProfile } from '@/lib/services/authService'
import { User } from '@supabase/supabase-js'
import Sidebar from '@/components/Sidebar'

interface LayoutProps {
    children: React.ReactNode
}

const PATH_TO_TAB_MAP: Record<string, string> = {
    '/client/': 'overview',
    '/client/overview': 'overview',
    '/client/ai-assistant': 'ai-agent',
    '/client/questions': 'tasks',
    '/client/documents': 'documents',
    '/client/chat': 'chat'
}

const TAB_TO_PATH_MAP: Record<string, string> = {
    'overview': '/client',
    'ai-agent': '/client/ai-assistant',
    'tasks': '/client/questions',
    'documents': '/client/documents',
    'chat': '/client/chat'
}

export function Layout({ children }: LayoutProps) {
    const router = useRouter()
    const pathname = usePathname()
    const [activeTab, setActiveTab] = useState('overview')
    const [user, setUser] = useState<User | null>(null)
    const [profile, setProfile] = useState<UserProfile | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [shouldRedirect, setShouldRedirect] = useState(false)

    useEffect(() => {
        const initAuth = async () => {
            try {
                const currentUser = authService.getCurrentUser()
                const currentProfile = await authService.getCurrentProfile()

                setUser(currentUser)
                setProfile(currentProfile)
                if (!currentUser) {
                    setShouldRedirect(true)
                }
            } catch (error) {
                console.error('Auth initialization error:', error)
                setShouldRedirect(true)
            } finally {
                setIsLoading(false)
            }
        }

        initAuth()
    }, [])

    useEffect(() => {
        if (shouldRedirect && !isLoading) {
            router.push('/login')
        }
    }, [shouldRedirect, isLoading, router])

    useEffect(() => {
        const currentTab = PATH_TO_TAB_MAP[pathname] || 'overview'
        setActiveTab(currentTab)
    }, [pathname])

    const handleTabChange = (tab: string) => {
        const path = TAB_TO_PATH_MAP[tab] || '/'
        router.push(path)
    }

    const handleLogout = async () => {
        try {
            setIsLoading(true)
            const result = await authService.signOut()

            if (result.success) {
                router.push('/login')
            } else {
                console.error('Logout error:', result.error)
            }
        } catch (error) {
            console.error('Logout error:', error)
        } finally {
            setIsLoading(false)
        }
    }

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-50">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading...</p>
                </div>
            </div>
        )
    }

    if (shouldRedirect) {
        return null
    }

    const sidebarUser = user ? {
        ...user,
        user_metadata: {
            ...user.user_metadata,
            full_name: profile?.full_name || user.user_metadata?.full_name
        }
    } : null

    return (
        <div className="flex h-screen bg-gray-50">
            {sidebarUser && (
                <Sidebar
                    user={sidebarUser}
                    activeTab={activeTab}
                    onTabChange={handleTabChange}
                    onLogout={handleLogout}
                />
            )}

            <main className="flex-1 overflow-hidden">
                <div className="h-full overflow-auto">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default Layout