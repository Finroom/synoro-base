'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { ArrowRight, Sparkles, Mail, Lock, ArrowLeft } from 'lucide-react'
import { authService } from '@/lib/services/authService'

export default function LoginPage() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            const result = await authService.signIn(email, password)

            if (result.success) {
                const profile = await authService.getCurrentProfile()

                if (profile?.role_name === 'admin') {
                    router.push('/admin')
                } else if (profile?.role_name === 'bookkeeper') {
                    router.push('/bookkeeper')
                } else {
                    router.push('/client')
                }
            } else {
                setError(result.error || 'Login failed')
            }
        } catch (error) {
            setError('An unexpected error occurred')
            console.error('Login error:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleBackToHome = () => {
        router.push('/')
    }

    const fillDemoCredentials = (demoEmail: string, demoPassword: string) => {
        setEmail(demoEmail)
        setPassword(demoPassword)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-[#F8F9FF] to-[#EFF2FE] flex">

            <div className="hidden lg:flex lg:w-1/2 flex-col justify-center items-center p-12">
                <div className="max-w-lg text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8">AI-Powered Accounting</h1>

                    <p className="text-xl text-gray-600 leading-relaxed">
                        Where human expertise meets AI intelligent automation — delivering smarter decisions, deeper insights, and a future-ready approach to financial management.
                    </p>
                </div>
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    <div className="lg:hidden mb-12 text-center">
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Accounting</h1>
                        <p className="text-gray-600">Transform your financial operations with intelligent automation.</p>
                    </div>

                    <div className="mb-6">
                        <Button
                            variant="ghost"
                            onClick={handleBackToHome}
                            className="text-gray-600 hover:text-gray-900 p-0 h-auto"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Home
                        </Button>
                    </div>

                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center space-x-3 mb-8">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                                <Sparkles className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-2xl font-bold text-gray-900">Synoro</span>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-3">Welcome back</h1>
                        <p className="text-gray-600">Access your accounting portal and financial insights</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                        {error && (
                            <Alert variant="destructive" className="mb-6 border-red-200 bg-red-50">
                                <AlertDescription className="text-red-800">{error}</AlertDescription>
                            </Alert>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-gray-900 font-semibold">Email address</Label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <Input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="h-14 pl-12 pr-4 rounded-xl border-2 border-gray-200 bg-gray-50 focus:border-blue-500 focus:bg-white focus:ring-0 transition-all duration-200 text-gray-900 placeholder:text-gray-500"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-gray-900 font-semibold">Password</Label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <Input
                                        id="password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                        className="h-14 pl-12 pr-4 rounded-xl border-2 border-gray-200 bg-gray-50 focus:border-blue-500 focus:bg-white focus:ring-0 transition-all duration-200 text-gray-900 placeholder:text-gray-500"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="pt-4">
                                <Button
                                    type="submit"
                                    className="w-full h-14 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <div className="flex items-center justify-center">
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                                            Signing in...
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-center">
                                            Sign in
                                            <ArrowRight className="w-5 h-5 ml-2" />
                                        </div>
                                    )}
                                </Button>
                            </div>
                        </form>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8">
                        <h3 className="text-sm font-semibold text-blue-900 mb-3">Demo Credentials</h3>
                        <div className="space-y-2 text-sm">
                            <div>
                                <span className="text-blue-800 font-medium">Client Portal:</span>
                                <div className="text-blue-700">demo@truckingco.com / demo123</div>
                            </div>
                            <div>
                                <span className="text-blue-800 font-medium">Admin Portal:</span>
                                <div className="text-blue-700">admin@synoro.com / admin123</div>
                            </div>
                        </div>

                        <div className="flex gap-2 mt-4">
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => fillDemoCredentials('demo@truckingco.com', 'demo123')}
                                className="flex-1 text-blue-700 border-blue-300 hover:bg-blue-100"
                            >
                                Use Client Demo
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => fillDemoCredentials('admin@synoro.com', 'admin123')}
                                className="flex-1 text-blue-700 border-blue-300 hover:bg-blue-100"
                            >
                                Use Admin Demo
                            </Button>
                        </div>
                    </div>

                    <div className="text-center mt-6">
                        <p className="text-gray-500">
                            Need help? <a href="#" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">Contact support</a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-20 left-10 w-32 h-32 bg-[#EFF2FE]/30 rounded-full blur-3xl opacity-40"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#E5E9FD]/25 rounded-full blur-3xl opacity-35"></div>
                <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#F3F5FF]/40 rounded-full blur-2xl opacity-45"></div>
            </div>
        </div>
    )
}