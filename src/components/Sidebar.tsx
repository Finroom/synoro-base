import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import {
    Brain,
    BarChart3,
    HelpCircle,
    FileText,
    MessageCircle,
    LogOut,
    SidebarClose,
    SidebarOpen,
} from 'lucide-react'

const NAVIGATION_ITEMS = [
    {
        id: 'overview',
        label: 'Overview',
        icon: <BarChart3 className="w-4 h-4" />
    },
    {
        id: 'ai-agent',
        label: 'AI Assistant',
        icon: <Brain className="w-4 h-4" />
    },
    {
        id: 'tasks',
        label: 'Questions',
        icon: <HelpCircle className="w-4 h-4" />,
        badge: '2'
    },
    {
        id: 'documents',
        label: 'Documents',
        icon: <FileText className="w-4 h-4" />
    },
    {
        id: 'chat',
        label: 'Chat with Us',
        icon: <MessageCircle className="w-4 h-4" />
    }
]

const COMPANIES = [
    { value: 'abc-trucking', label: 'ABC Trucking Co.' },
    { value: 'xyz-logistics', label: 'XYZ Logistics' },
    { value: 'demo-transport', label: 'Demo Transport' }
]

interface SidebarProps {
    user: any
    activeTab: string
    onTabChange: (tab: string) => void
    onLogout: () => void
}

export function Sidebar({ user, activeTab, onTabChange, onLogout }: SidebarProps) {
    const [selectedCompany, setSelectedCompany] = useState('abc-trucking')
    const [isCollapsed, setIsCollapsed] = useState(false)

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed)
    }

    return (
        <div className={`${isCollapsed ? 'w-16' : 'w-64'} bg-white border-r border-gray-200 flex flex-col transition-all duration-300`}>
            <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                    {!isCollapsed && (
                        <span className="text-lg font-medium text-blue-600">Synoro</span>
                    )}

                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={toggleCollapse}
                        className="p-1 hover:bg-gray-100 transition-colors"
                        title={isCollapsed ? "Expand menu" : "Collapse menu"}
                    >
                        {isCollapsed ? (
                            <SidebarOpen className="w-4 h-4" />
                        ) : (
                            <SidebarClose className="w-4 h-4" />
                        )}
                    </Button>
                </div>

                {!isCollapsed && (
                    <Select value={selectedCompany} onValueChange={setSelectedCompany}>
                        <SelectTrigger className="w-full">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {COMPANIES.map((company) => (
                                <SelectItem key={company.value} value={company.value}>
                                    {company.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                )}
            </div>

            <nav className="flex-1 p-4">
                <ul className="space-y-2">
                    {NAVIGATION_ITEMS.map((item) => {
                        const isActive = activeTab === item.id

                        return (
                            <li key={item.id}>
                                <Button
                                    variant={isActive ? "secondary" : "ghost"}
                                    className={`w-full ${isCollapsed ? 'justify-center px-0' : 'justify-start'} ${isActive ? 'bg-blue-50 text-blue-700 border-blue-200' : 'text-gray-700 hover:text-gray-900'
                                        }`}
                                    onClick={() => onTabChange(item.id)}
                                    title={isCollapsed ? item.label : undefined}
                                >
                                    {item.icon && <span className={!isCollapsed ? 'mr-3' : ''}>{item.icon}</span>}
                                    {!isCollapsed && (
                                        <>
                                            <span className="flex-1 text-left">{item.label}</span>
                                            {item.badge && (
                                                <span className={`px-2 py-0.5 text-xs rounded-full ${item.badge === 'NEW'
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-blue-100 text-blue-800'
                                                    }`}>
                                                    {item.badge}
                                                </span>
                                            )}
                                        </>
                                    )}
                                </Button>
                            </li>
                        )
                    })}
                </ul>
            </nav>

            <div className="p-4 border-t border-gray-200">
                {!isCollapsed ? (
                    <>
                        <div className="flex items-center space-x-3 mb-3">
                            <Avatar className="w-10 h-10">
                                <AvatarFallback className="bg-blue-100 text-blue-700">
                                    {user?.email?.charAt(0).toUpperCase() || 'U'}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    {user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'User'}
                                </p>
                                <p className="text-xs text-gray-500 truncate">
                                    {user?.email}
                                </p>
                            </div>
                        </div>

                        <Button
                            variant="outline"
                            size="sm"
                            className="w-full justify-start text-gray-700"
                            onClick={onLogout}
                        >
                            <LogOut className="w-4 h-4 mr-2" />
                            Sign Out
                        </Button>
                    </>
                ) : (
                    <div className="flex flex-col items-center space-y-2">
                        <Avatar className="w-8 h-8">
                            <AvatarFallback className="bg-blue-100 text-blue-700">
                                {user?.email?.charAt(0).toUpperCase() || 'U'}
                            </AvatarFallback>
                        </Avatar>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="p-1"
                            onClick={onLogout}
                            title="Sign Out"
                        >
                            <LogOut className="w-4 h-4" />
                        </Button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Sidebar