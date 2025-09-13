import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Synoro - AI-Powered Bookkeeping with Human Experts',
  description: 'Get the accuracy of AI automation combined with the expertise of certified bookkeepers. Perfect for small and medium-sized companies that need reliable, professional, long-term bookkeeping.',
  keywords: 'AI bookkeeping, automated accounting, financial reports, CPA services, small business accounting',
  authors: [{ name: 'Synoro Team' }],
  creator: 'Synoro',
  publisher: 'Synoro',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://synoro.com',
    title: 'Synoro - AI-Powered Bookkeeping with Human Experts',
    description: 'Transform your bookkeeping with AI automation and expert oversight. Get accurate financial reports and insights for your growing business.',
    siteName: 'Synoro',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Synoro - AI-Powered Bookkeeping Platform'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Synoro - AI-Powered Bookkeeping with Human Experts',
    description: 'Transform your bookkeeping with AI automation and expert oversight.',
    images: ['/og-image.jpg'],
    creator: '@synoro'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
          {children}
        </div>
      </body>
    </html>
  )
}