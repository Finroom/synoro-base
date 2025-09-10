'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { ArrowRight, Sparkles, Mail, Lock, ArrowLeft } from 'lucide-react'

interface LoginFormProps {
    onLogin: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
    onBackToHome?: () => void
}

export function LoginForm({ onLogin, onBackToHome }: LoginFormProps) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        const result = await onLogin(email, password)

        if (!result.success) {
            setError(result.error || 'Login failed')
        }

        setLoading(false)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {onBackToHome && (
                    <div className="mb-6">
                        <Button
                            variant="ghost"
                            onClick={onBackToHome}
                            className="text-gray-600 hover:text-gray-900 p-0 h-auto"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Home
                        </Button>
                    </div>
                )}

                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8">
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center space-x-3 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                                <Sparkles className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-2xl font-bold text-gray-900">Synoro</span>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back</h1>
                        <p className="text-gray-600">Sign in to your account</p>
                    </div>

                    {error && (
                        <Alert variant="destructive" className="mb-6 border-red-200 bg-red-50">
                            <AlertDescription className="text-red-800">{error}</AlertDescription>
                        </Alert>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-gray-900 font-medium">Email</Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="h-12 pl-10 pr-4 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-0 transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-gray-900 font-medium">Password</Label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    className="h-12 pl-10 pr-4 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:ring-0 transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                            disabled={loading}
                        >
                            {loading ? (
                                <div className="flex items-center justify-center">
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                    Signing in...
                                </div>
                            ) : (
                                <div className="flex items-center justify-center">
                                    Sign in
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </div>
                            )}
                        </Button>
                    </form>

                    <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <h3 className="text-sm font-semibold text-blue-900 mb-3">Demo Accounts</h3>
                        <div className="space-y-2 text-sm text-blue-800">
                            <div><strong>Client:</strong> demo@truckingco.com / demo123</div>
                            <div><strong>Admin:</strong> admin@synoro.com / admin123</div>
                        </div>

                        <div className="flex gap-2 mt-3">
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                    setEmail('demo@truckingco.com')
                                    setPassword('demo123')
                                }}
                                className="flex-1 text-blue-700 border-blue-300 hover:bg-blue-100"
                            >
                                Client Demo
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                    setEmail('admin@synoro.com')
                                    setPassword('admin123')
                                }}
                                className="flex-1 text-blue-700 border-blue-300 hover:bg-blue-100"
                            >
                                Admin Demo
                            </Button>
                        </div>
                    </div>

                    <div className="text-center mt-6">
                        <p className="text-sm text-gray-500">
                            Need help? <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Contact support</a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-200/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-200/20 rounded-full blur-2xl"></div>
            </div>
        </div>
    )
}