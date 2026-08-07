import { Analytics } from '@vercel/analytics/next'
import { Cormorant_Garamond, DM_Sans, Inter } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const display = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
})

const body = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Davangiri Loni Dosa | South Indian Soul, Modern Bite',
  description: 'Crisp dosas, slow filter coffee, and warm South Indian hospitality in Bengaluru and Hyderabad.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f8f2e9',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${display.variable} ${body.variable} ${inter.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
