import React from 'react'
import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { FinancialOverviewSection } from '@/components/FinancialOverviewSection'
import { AIAssistantSection } from '@/components/AiAssistantSection'
import { FinancialReportsSection } from '@/components/FinancialReportsSection'
import { FeaturesSection } from '@/components/FeaturesSection'
import { HowItWorksSection } from '@/components/HowItWorksSection'
import { PricingSection } from '@/components/PricingSection'
import { CTASection } from '@/components/CTASection'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <Header />

      <HeroSection />

      <FinancialOverviewSection />

      <AIAssistantSection />

      <FinancialReportsSection />

      <FeaturesSection />

      <HowItWorksSection />

      <PricingSection />

      <CTASection />

      <Footer />
    </div>
  )
}