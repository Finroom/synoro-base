import React from 'react'
import { CheckCircle } from 'lucide-react'

export const PricingSection = () => {
    return (
        <section id="pricing" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Transparent pricing that grows with you
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Choose the plan that fits your business needs. All plans include our AI assistant and
                        dedicated support.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div className="relative border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl bg-white">
                        <div className="p-8">
                            <div className="text-center">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Starter</h3>
                                <div className="mb-4">
                                    <span className="text-4xl font-bold text-gray-900">$299</span>
                                    <span className="text-gray-600">/month</span>
                                </div>
                                <p className="text-gray-600 mb-8">Perfect for new businesses</p>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                    <span className="text-gray-700">Monthly financial statements</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                    <span className="text-gray-700">Bank reconciliation</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                    <span className="text-gray-700">AI financial assistant</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                    <span className="text-gray-700">Email support</span>
                                </div>
                            </div>

                            <a href="/login" className="inline-flex items-center justify-center w-full h-12 rounded-md bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold transition-colors">Start Free Trial</a>
                        </div>
                    </div>

                    <div className="relative border-2 border-blue-500 shadow-xl hover:shadow-2xl transition-all duration-300 scale-105 rounded-xl bg-white">
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium">
                                Most Popular
                            </span>
                        </div>
                        <div className="p-8">
                            <div className="text-center">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Growth</h3>
                                <div className="mb-4">
                                    <span className="text-4xl font-bold text-gray-900">$599</span>
                                    <span className="text-gray-600">/month</span>
                                </div>
                                <p className="text-gray-600 mb-8">Ideal for growing companies</p>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                    <span className="text-gray-700">Everything in Starter</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                    <span className="text-gray-700">Accounts payable/receivable</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                    <span className="text-gray-700">Advanced reporting</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                    <span className="text-gray-700">Dedicated CPA advisor</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                    <span className="text-gray-700">Phone support</span>
                                </div>
                            </div>

                            <a href="/login" className="inline-flex items-center justify-center w-full h-12 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors">Start Free Trial</a>
                        </div>
                    </div>

                    <div className="relative border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl bg-white">
                        <div className="p-8">
                            <div className="text-center">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Scale</h3>
                                <div className="mb-4">
                                    <span className="text-4xl font-bold text-gray-900">$999</span>
                                    <span className="text-gray-600">/month</span>
                                </div>
                                <p className="text-gray-600 mb-8">For established businesses</p>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                    <span className="text-gray-700">Everything in Growth</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                    <span className="text-gray-700">CFO advisory services</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                    <span className="text-gray-700">Custom integrations</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                    <span className="text-gray-700">Priority support</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                    <span className="text-gray-700">Quarterly business reviews</span>
                                </div>
                            </div>

                            <a href="/login" className="inline-flex items-center justify-center w-full h-12 rounded-md bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold transition-colors">Start Free Trial</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}