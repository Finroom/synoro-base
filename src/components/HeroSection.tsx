'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight } from 'lucide-react'

interface HeroSectionProps {
    onLoginClick: () => void
}

export const HeroSection = ({ onLoginClick }: HeroSectionProps) => {
    return (
        <section className="pt-20 pb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        AI-powered bookkeeping<br />
                        <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                            with real human experts
                        </span>
                    </h1>

                    <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                        Get the accuracy of AI automation combined with the expertise of certified
                        bookkeepers. Perfect for small and medium-sized companies that need reliable,
                        professional, long-term bookkeeping.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                        <Button
                            size="lg"
                            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white"
                            onClick={onLoginClick}
                        >
                            Book Your Free Consultation
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <span>No Contract</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <span>Cancel Anytime</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <span>No hidden fees or surprises</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}