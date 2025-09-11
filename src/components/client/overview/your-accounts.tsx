import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface BankAccount {
    name: string
    type: string
    lastFour: string
    balance: number
    icon: string
}

interface CreditCard {
    name: string
    type: string
    lastFour: string
    balance: number
    icon: string
}

export function YourAccounts() {
    const [bankAccountsOpen, setBankAccountsOpen] = useState(false)
    const [creditCardsOpen, setCreditCardsOpen] = useState(false)

    const bankAccounts: BankAccount[] = [
        { name: 'Chase Business', type: 'Checking', lastFour: '4821', balance: 45000, icon: '🏛️' },
        { name: 'Bank of America', type: 'Checking', lastFour: '7394', balance: 28500, icon: '🏛️' },
        { name: 'Capital One', type: 'Savings', lastFour: '1205', balance: 14000, icon: '🏛️' }
    ]

    const creditCards: CreditCard[] = [
        { name: 'Chase Business', type: 'Credit Card', lastFour: '2847', balance: 1245, icon: '💳' },
        { name: 'American Express', type: 'Business Card', lastFour: '9013', balance: 0, icon: '💳' }
    ]

    const totalBankBalance = bankAccounts.reduce((sum, account) => sum + account.balance, 0)
    const totalCreditSpend = creditCards.reduce((sum, card) => sum + card.balance, 0)

    return (
        <Card className="bg-white">
            <CardHeader className="pb-4">
                <CardTitle className="text-lg text-gray-700">Your Accounts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <Collapsible open={bankAccountsOpen} onOpenChange={setBankAccountsOpen}>
                    <div className="border-b border-gray-100 pb-4">
                        <CollapsibleTrigger asChild>
                            <div className="flex items-center justify-between py-2 cursor-pointer hover:bg-gray-50 rounded-lg px-2 -mx-2">
                                <div className="flex items-center space-x-3">
                                    <div className="flex -space-x-2">
                                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-semibold border-2 border-white z-30">
                                            C
                                        </div>
                                        <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-semibold border-2 border-white z-20">
                                            B
                                        </div>
                                        <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white text-xs font-semibold border-2 border-white z-10">
                                            +{bankAccounts.length - 2}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Bank Balance</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <p className="text-xl font-semibold text-gray-900">${totalBankBalance.toLocaleString()}</p>
                                    {bankAccountsOpen ? (
                                        <ChevronUp className="w-4 h-4 text-gray-400" />
                                    ) : (
                                        <ChevronDown className="w-4 h-4 text-gray-400" />
                                    )}
                                </div>
                            </div>
                        </CollapsibleTrigger>

                        <CollapsibleContent className="mt-3 space-y-3">
                            {bankAccounts.map((account, index) => (
                                <div key={index} className="flex items-center justify-between py-2 pl-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                                            {account.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">{account.name}</p>
                                            <p className="text-xs text-gray-500">{account.type} '••{account.lastFour}</p>
                                        </div>
                                    </div>
                                    <p className="text-sm font-semibold text-gray-900">${account.balance.toLocaleString()}</p>
                                </div>
                            ))}
                        </CollapsibleContent>
                    </div>
                </Collapsible>

                <Collapsible open={creditCardsOpen} onOpenChange={setCreditCardsOpen}>
                    <CollapsibleTrigger asChild>
                        <div className="flex items-center justify-between py-2 cursor-pointer hover:bg-gray-50 rounded-lg px-2 -mx-2">
                            <div className="flex items-center space-x-3">
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-semibold border-2 border-white z-20">
                                        C
                                    </div>
                                    <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center text-white text-xs font-semibold border-2 border-white z-10">
                                        A
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Credit Card Spend</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <p className="text-xl font-semibold text-gray-900">${totalCreditSpend.toLocaleString()}</p>
                                {creditCardsOpen ? (
                                    <ChevronUp className="w-4 h-4 text-gray-400" />
                                ) : (
                                    <ChevronDown className="w-4 h-4 text-gray-400" />
                                )}
                            </div>
                        </div>
                    </CollapsibleTrigger>

                    <CollapsibleContent className="mt-3 space-y-3">
                        {creditCards.map((card, index) => (
                            <div key={index} className="flex items-center justify-between py-2 pl-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                                        {card.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">{card.name}</p>
                                        <p className="text-xs text-gray-500">{card.type} '••{card.lastFour}</p>
                                    </div>
                                </div>
                                <p className="text-sm font-semibold text-gray-900">${card.balance.toLocaleString()}</p>
                            </div>
                        ))}
                    </CollapsibleContent>
                </Collapsible>
            </CardContent>
        </Card>
    )
}