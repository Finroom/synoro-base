import React from 'react'
import { Sparkles } from 'lucide-react'

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                                <Sparkles className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-xl font-semibold">Synoro</span>
                        </div>
                        <p className="text-gray-400 mb-4">
                            AI-powered bookkeeping with real human experts for growing businesses.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Bookkeeping</li>
                            <li>Tax Preparation</li>
                            <li>CFO</li>
                            <li>Audit</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Contact</li>
                            <li>Blog</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Support</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Help Center</li>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                            <li>Security</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 Synoro. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}