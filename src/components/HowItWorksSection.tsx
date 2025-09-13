import React from 'react'

export const HowItWorksSection = () => {
    return (
        <section id="how-it-works" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
                    <p className="text-xl text-gray-600">Simple setup, powerful results in just three steps</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="text-center">
                        <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                            1
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-900">Connect Your Accounts</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Securely link your bank accounts, credit cards, and accounting software.
                            Our AI starts working immediately to organize your financial data.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                            2
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-900">AI + Human Review</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Our AI processes transactions while expert bookkeepers ensure accuracy and
                            provide strategic insights tailored to your business needs.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                            3
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-900">Get Insights & Reports</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Access real-time dashboards, financial reports, and AI-powered recommendations
                            through our intuitive client portal anytime, anywhere.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}