'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'

interface HeaderProps {
    onLoginClick: () => void
}

export const Header = ({ onLoginClick }: HeaderProps) => {
    return (
        <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                            <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-xl font-semibold text-gray-900">Synoro</span>
                    </div>
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</a>
                        <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
                        <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
                        <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
                    </nav>
                    <div className="flex items-center space-x-4">
                        <Button
                            variant="ghost"
                            onClick={onLoginClick}
                            className="text-gray-600 hover:text-gray-900"
                        >
                            Login
                        </Button>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                            Free Consultation
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}