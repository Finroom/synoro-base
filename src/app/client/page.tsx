'use client'

import React from 'react'
import { Overview } from '@/components/client/overview'
import { useAuth } from '@/hooks/useAuth'

export default function ClientOverviewPage() {
    const { user, profile, isLoading, isAuthenticated, error } = useAuth()

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-50">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading financial data...</p>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-50">
                <div className="text-center">
                    <div className="text-red-500 mb-4">⚠️</div>
                    <p className="text-red-600 mb-2">Authentication Error</p>
                    <p className="text-gray-600 text-sm">{error}</p>
                </div>
            </div>
        )
    }

    if (!isAuthenticated) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-50">
                <div className="text-center">
                    <div className="text-gray-400 mb-4">🔐</div>
                    <p className="text-gray-600 mb-4">Please log in to view your financial overview.</p>
                    <button
                        onClick={() => window.location.href = '/login'}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Go to Login
                    </button>
                </div>
            </div>
        )
    }

    return <Overview accessToken={"s"} />
}