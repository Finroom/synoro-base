import React from 'react'
import { Info } from 'lucide-react'

interface FinancialItem {
    name: string
    amount: number
}

interface FinancialSectionProps {
    title: string
    total: string
    data: FinancialItem[]
    color: 'green' | 'orange' | 'blue'
    borderPosition: 'right' | 'bottom' | 'right-bottom' | 'none'
}

export function FinancialSection({
    title,
    total,
    data,
    color,
    borderPosition
}: FinancialSectionProps) {
    const maxAmount = Math.max(...data.map(item => item.amount))

    const getColorClass = (color: string) => {
        switch (color) {
            case 'green':
                return 'bg-green-500'
            case 'orange':
                return 'bg-orange-500'
            case 'blue':
                return 'bg-blue-500'
            default:
                return 'bg-gray-500'
        }
    }

    const getBorderClass = (position: string) => {
        switch (position) {
            case 'right':
                return 'border-r border-gray-200 pr-6'
            case 'bottom':
                return 'border-b border-gray-200 pb-6'
            case 'right-bottom':
                return 'border-r border-gray-200 border-b border-gray-200 pr-6 pb-6'
            default:
                return ''
        }
    }

    return (
        <div className={`space-y-4 ${getBorderClass(borderPosition)}`}>
            <div className="flex items-center space-x-2">
                <h3 className="text-sm font-medium text-gray-600">{title}</h3>
                <Info className="w-4 h-4 text-gray-400" />
            </div>
            <div className="space-y-2">
                <p className="text-2xl font-semibold text-gray-900">{total}</p>
            </div>

            <div className="space-y-3">
                {data.map((item, index) => (
                    <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">{item.name}</span>
                            <span className="font-medium">${item.amount.toLocaleString()}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className={`${getColorClass(color)} h-2 rounded-full transition-all duration-300`}
                                style={{ width: `${(item.amount / maxAmount) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}