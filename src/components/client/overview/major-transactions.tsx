import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Transaction {
    id: string
    name: string
    description: string
    date: string
    amount: number
    cents: number
    bgColor: string
    icon: string
    badgeType: 'up' | 'expense' | 'withdrawal'
}

export function MajorTransactions() {
    const transactions: Transaction[] = [
        {
            id: '1',
            name: 'Advertising',
            description: 'Up by 1,250.00',
            date: 'Jan',
            amount: 2428,
            cents: 80,
            bgColor: 'bg-black',
            icon: 'A',
            badgeType: 'up'
        },
        {
            id: '2',
            name: 'Shutterstock',
            description: 'Large withdrawal',
            date: 'Jan 12',
            amount: 7850,
            cents: 0,
            bgColor: 'bg-red-600',
            icon: 'shutterstock',
            badgeType: 'withdrawal'
        },
        {
            id: '3',
            name: 'Zapier',
            description: 'Large expense',
            date: 'Jan 08',
            amount: 3278,
            cents: 50,
            bgColor: 'bg-orange-500',
            icon: 'Z',
            badgeType: 'expense'
        },
        {
            id: '4',
            name: 'Zapier',
            description: 'Large expense',
            date: 'Jan 08',
            amount: 3278,
            cents: 50,
            bgColor: 'bg-orange-500',
            icon: 'Z',
            badgeType: 'expense'
        }
    ]

    const getBadgeIcon = (type: Transaction['badgeType']) => {
        switch (type) {
            case 'up':
                return '▲'
            case 'expense':
            case 'withdrawal':
                return '$'
            default:
                return '$'
        }
    }

    return (
        <Card className="bg-white">
            <CardHeader className="pb-4">
                <CardTitle className="text-lg text-gray-700">Major Transactions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-0 mb-0">
                {transactions.map((transaction, index) => (
                    <div
                        key={transaction.id}
                        className={`flex items-center space-x-3 py-4 ${index < transactions.length - 1 ? 'border-b border-gray-100' : ''
                            }`}
                    >
                        <div className={`w-10 h-10 ${transaction.bgColor} rounded-full flex items-center justify-center relative`}>
                            <span className={`text-white font-semibold ${transaction.icon === 'shutterstock' ? 'text-xs' : 'text-sm'
                                }`}>
                                {transaction.icon}
                            </span>
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs">{getBadgeIcon(transaction.badgeType)}</span>
                            </div>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">{transaction.name}</p>
                            <p className="text-xs text-red-500">{transaction.description}</p>
                            <p className="text-xs text-gray-500">{transaction.date}</p>
                        </div>
                        <div className="text-right">
                            <span className="text-lg font-semibold text-gray-900">
                                ${transaction.amount.toLocaleString()}
                            </span>
                            <span className="text-xs font-semibold text-gray-900 align-super">
                                {transaction.cents.toString().padStart(2, '0')}
                            </span>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}