import React from 'react'
import Image from 'next/image'
import { Bot, CheckCircle } from 'lucide-react'

export const AIAssistantSection = () => {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Bot className="w-4 h-4 mr-2" />
                            AI-Powered Assistant
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Ask Questions,
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                {" "}Get Instant Answers
                            </span>
                        </h2>

                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Our AI assistant understands your financial data and can answer complex questions
                            instantly. From profit calculations to expense analysis, get the insights you need
                            in plain English.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-start space-x-3">
                                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-1">
                                    <CheckCircle className="w-3 h-3 text-green-600" />
                                </div>
                                <div>
                                    <span className="font-medium text-gray-900">Natural Language Queries</span>
                                    <p className="text-gray-600 text-sm">Ask questions like &ldquo;What&rsquo;s my profit this month?&rdquo; or &ldquo;How much did I spend on fuel?&rdquo;</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-1">
                                    <CheckCircle className="w-3 h-3 text-green-600" />
                                </div>
                                <div>
                                    <span className="font-medium text-gray-900">Context-Aware Responses</span>
                                    <p className="text-gray-600 text-sm">The AI understands your business context and provides relevant, actionable insights</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-1">
                                    <CheckCircle className="w-3 h-3 text-green-600" />
                                </div>
                                <div>
                                    <span className="font-medium text-gray-900">Business Recommendations</span>
                                    <p className="text-gray-600 text-sm">Get strategic advice based on your financial performance and industry trends</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative">
                            <Image
                                src="/images/ai-assistant.png"
                                alt="AI Assistant Chat Interface with blue sparkle icon, How can I help you today heading, four action buttons for financial reports, tax questions, business performance, and general accounting help, plus input field for business insights"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover shadow-xl rounded-xl"
                                loading="lazy"
                                sizes="(min-width: 1024px) 600px, 100vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}