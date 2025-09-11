import React, { useState } from 'react'
import { YourAccounts } from '@/components/client/overview/your-accounts'
import { MajorTransactions } from '@/components/client/overview/major-transactions'
import { YourBusiness } from '@/components/client/overview/your-business'

interface OverviewProps {
    accessToken: string
}

export function Overview({ accessToken }: OverviewProps) {
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="mb-8">
                <h1 className="text-3xl font-semibold text-gray-900 mb-6">Financial Overview</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1 space-y-4">
                        <YourAccounts />
                        <MajorTransactions />
                    </div>

                    <div className="lg:col-span-2 flex flex-col">
                        <YourBusiness />
                    </div>
                </div>
            </div>
        </div>
    )
}