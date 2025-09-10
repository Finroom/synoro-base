'use client'

import React from 'react'
import { FileText, CheckCircle } from 'lucide-react'
import Image from 'next/image'


export const FinancialReportsSection = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative order-2 lg:order-1">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl transform -rotate-2"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl transform rotate-2"></div>
                        <div className="relative">
                            <div className="relative rounded-xl p-4" style={{ backgroundColor: '#F6F8FC' }}>
                                <Image
                                    src="/images/financial-reports.png"
                                    alt="Financial Reports Dashboard ..."
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-contain rounded-xl bg-white"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <FileText className="w-4 h-4 mr-2" />
                            Professional Reports
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Tax-Ready Reports,
                            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                                {" "}Delivered Monthly
                            </span>
                        </h2>

                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Get professional financial statements delivered automatically every month.
                            Our AI ensures accuracy while our experts review everything for compliance
                            and tax readiness.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-start space-x-3">
                                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-1">
                                    <CheckCircle className="w-3 h-3 text-green-600" />
                                </div>
                                <div>
                                    <span className="font-medium text-gray-900">Profit & Loss Statements</span>
                                    <p className="text-gray-600 text-sm">Detailed income and expense breakdowns with period comparisons</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-1">
                                    <CheckCircle className="w-3 h-3 text-green-600" />
                                </div>
                                <div>
                                    <span className="font-medium text-gray-900">Balance Sheets</span>
                                    <p className="text-gray-600 text-sm">Complete asset, liability, and equity snapshots</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-1">
                                    <CheckCircle className="w-3 h-3 text-green-600" />
                                </div>
                                <div>
                                    <span className="font-medium text-gray-900">Cash Flow Statements</span>
                                    <p className="text-gray-600 text-sm">Track cash movement and operational efficiency</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-1">
                                    <CheckCircle className="w-3 h-3 text-green-600" />
                                </div>
                                <div>
                                    <span className="font-medium text-gray-900">Ready for Your CPA</span>
                                    <p className="text-gray-600 text-sm">Formatted for tax preparation and compliance requirements</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}