import React from 'react'
import { Bot, Users, BarChart3 } from 'lucide-react'

export const FeaturesSection = () => {
    return (
        <section id="features" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Why Choose Synoro?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Experience the perfect blend of cutting-edge AI technology and expert human oversight
                        for unmatched accuracy and insight.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-xl bg-white">
                        <div className="p-8">
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Bot className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">AI-Driven Automation</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Advanced AI automatically categorizes transactions, reconciles accounts, and identifies
                                discrepancies in real-time, reducing manual work by 90%.
                            </p>
                        </div>
                    </div>

                    <div className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-xl bg-white">
                        <div className="p-8">
                            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Users className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">Expert Human Oversight</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Certified bookkeepers review every transaction and provide strategic insights,
                                ensuring 100% accuracy and compliance with regulations.
                            </p>
                        </div>
                    </div>

                    <div className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg rounded-xl bg-white">
                        <div className="p-8">
                            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <BarChart3 className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">Real-Time Insights</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Get instant access to financial dashboards, cash flow projections, and AI-powered
                                recommendations to make smarter business decisions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}