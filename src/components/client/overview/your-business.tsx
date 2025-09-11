import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PeriodTabs } from '@/components/client/overview/business/period-tabs'
import { FinancialSection } from '@/components/client/overview/business/financial-section'

type Period = 'thisMonth' | 'thisQuarter' | 'lastQuarter' | 'thisYear'

export function YourBusiness() {
    const [activeTab, setActiveTab] = useState<Period>('thisMonth')

    const getPeriodLabel = () => {
        switch (activeTab) {
            case 'thisMonth':
                return 'Sep 2025'
            case 'thisQuarter':
                return 'Q3 2025'
            case 'lastQuarter':
                return 'Q2 2025'
            case 'thisYear':
                return '2025'
            default:
                return 'Sep 2025'
        }
    }

    const getBalanceSheetDate = () => {
        switch (activeTab) {
            case 'thisMonth':
                return 'as of Sep 2025'
            case 'thisQuarter':
                return 'as of Sep 2025'
            case 'lastQuarter':
                return 'as of Jun 2025'
            case 'thisYear':
                return 'as of Dec 2025'
            default:
                return 'as of Sep 2025'
        }
    }

    const incomeData = [
        { name: 'Transportation Revenue', amount: 425000 },
        { name: 'Freight Income', amount: 185000 },
        { name: 'Fuel Surcharges', amount: 35000 },
        { name: 'Equipment Rental', amount: 28000 },
        { name: 'Other Income', amount: 12000 }
    ]

    const expenseData = [
        { name: 'Fuel Costs', amount: 165000 },
        { name: 'Equipment Maintenance', amount: 85000 },
        { name: 'Insurance', amount: 45000 },
        { name: 'Driver Wages', amount: 125000 },
        { name: 'Vehicle Payments', amount: 38000 }
    ]

    const profitData = [
        { name: 'Gross Profit', amount: 458000 },
        { name: 'Net Operating Income', amount: 127000 }
    ]

    const assetsData = [
        { name: 'Cash & Bank Accounts', amount: 145000 },
        { name: 'Accounts Receivable', amount: 85000 },
        { name: 'Equipment & Vehicles', amount: 425000 },
        { name: 'Inventory', amount: 15000 }
    ]

    const liabilitiesData = [
        { name: 'Equipment Loans', amount: 285000 },
        { name: 'Accounts Payable', amount: 45000 },
        { name: 'Credit Lines', amount: 35000 },
        { name: 'Tax Liabilities', amount: 18000 }
    ]

    const equityData = [
        { name: 'Owner Equity', amount: 287000 },
        { name: 'Retained Earnings', amount: 95000 }
    ]

    return (
        <Card className="bg-white flex-1">
            <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-gray-700">Your Business</CardTitle>
                    <PeriodTabs activeTab={activeTab} onTabChange={setActiveTab} />
                </div>
            </CardHeader>
            <CardContent className="flex-1">
                <div className="grid grid-cols-3 gap-6 mb-8">
                    <FinancialSection
                        title={`Income (${getPeriodLabel()})`}
                        total="$685,000"
                        data={incomeData}
                        color="green"
                        borderPosition="right-bottom"
                    />
                    <FinancialSection
                        title={`Expense (${getPeriodLabel()})`}
                        total="$458,000"
                        data={expenseData}
                        color="orange"
                        borderPosition="right-bottom"
                    />
                    <FinancialSection
                        title={`Profit (${getPeriodLabel()})`}
                        total="$227,000"
                        data={profitData}
                        color="blue"
                        borderPosition="bottom"
                    />
                </div>

                <div className="grid grid-cols-3 gap-6">
                    <FinancialSection
                        title={`Assets (${getBalanceSheetDate()})`}
                        total="$670,000"
                        data={assetsData}
                        color="green"
                        borderPosition="right"
                    />
                    <FinancialSection
                        title={`Liabilities (${getBalanceSheetDate()})`}
                        total="$383,000"
                        data={liabilitiesData}
                        color="orange"
                        borderPosition="right"
                    />
                    <FinancialSection
                        title={`Equity (${getBalanceSheetDate()})`}
                        total="$287,000"
                        data={equityData}
                        color="blue"
                        borderPosition="none"
                    />
                </div>
            </CardContent>
        </Card>
    )
}