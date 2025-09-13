import React from 'react'
import { ArrowRight } from 'lucide-react'

export const CTASection = () => {
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
                    <a href="/login" className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-white text-blue-600 hover:bg-gray-100 text-base font-medium transition-colors">
                        Get Started Today
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                </div>
            </div>
        </section>
    )
}