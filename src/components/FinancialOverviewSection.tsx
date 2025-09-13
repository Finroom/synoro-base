import React from 'react'
import Image from 'next/image'
import { BarChart3, Bot } from 'lucide-react'

export const FinancialOverviewSection = () => {
    return (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Your Financial Data,
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {" "}Beautifully Organized
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Get instant insights into your business performance with our intuitive dashboard.
                        Track income, expenses, assets, and more in real-time.
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-purple-100/50 rounded-3xl transform rotate-1"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-100/30 to-blue-100/30 rounded-3xl transform -rotate-1"></div>
                    <div className="relative rounded-xl bg-gray-50 p-4">
                        <Image
                            src="/images/financial-overview.png"
                            alt="Financial Overview Dashboard - Real-time insights into your business performance"
                            width={1200}
                            height={800}
                            className="w-full h-auto object-contain shadow-lg border border-gray-100 rounded-xl bg-white"
                            loading="lazy"
                            sizes="(min-width: 1024px) 1200px, 100vw"
                        />

                        <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                            <div className="flex items-center space-x-1">
                                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                <span>Live Data</span>
                            </div>
                        </div>
                    </div>

                    <div className="absolute -left-4 top-1/4 hidden lg:block">
                        <div className="bg-white rounded-xl shadow-xl p-4 border border-gray-100 max-w-xs">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                    <BarChart3 className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900 text-sm">Real-time Analytics</div>
                                    <div className="text-xs text-gray-500">Updated every 5 minutes</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute -right-4 top-1/3 hidden lg:block">
                        <div className="bg-white rounded-xl shadow-xl p-4 border border-gray-100 max-w-xs">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                    <Bot className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900 text-sm">AI Categorization</div>
                                    <div className="text-xs text-gray-500">99.9% accuracy rate</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}