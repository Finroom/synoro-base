import React from 'react'

type Period = 'thisMonth' | 'thisQuarter' | 'lastQuarter' | 'thisYear'

interface PeriodTabsProps {
    activeTab: Period
    onTabChange: (tab: Period) => void
}

export function PeriodTabs({ activeTab, onTabChange }: PeriodTabsProps) {
    const tabs = [
        { key: 'thisMonth' as Period, label: 'This Month' },
        { key: 'thisQuarter' as Period, label: 'This Quarter' },
        { key: 'lastQuarter' as Period, label: 'Last Quarter' },
        { key: 'thisYear' as Period, label: 'This Year' }
    ]

    return (
        <div className="flex bg-gray-100 rounded-lg p-1">
            {tabs.map((tab) => (
                <button
                    key={tab.key}
                    onClick={() => onTabChange(tab.key)}
                    className={`px-3 py-1 text-sm rounded transition-colors ${activeTab === tab.key
                            ? 'bg-black text-white'
                            : 'text-gray-600 hover:text-gray-800'
                        }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    )
}