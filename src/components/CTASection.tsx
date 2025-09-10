'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface CTASectionProps {
    onLoginClick: () => void
}

export const CTASection = ({ onLoginClick }: CTASectionProps) => {
    return (
        <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                    Ready to Transform Your Bookkeeping?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                    Join hundreds of businesses that have already streamlined their finances with our AI-powered solution.
                </p>
                <div className="flex justify-center">
                    <Button
                        size="lg"
                        className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100"
                        onClick={onLoginClick}
                    >
                        Get Started Today
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                </div>
            </div>
        </section>
    )
}