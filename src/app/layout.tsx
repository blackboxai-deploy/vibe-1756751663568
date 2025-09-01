import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RideShare - Go anywhere with RideShare',
  description: 'Request a ride, hop in, and go. Or become a driver and earn money on your schedule. RideShare is a platform where people can share rides and earn money.',
  keywords: 'rideshare, ride sharing, taxi, driver, transportation, mobility',
  authors: [{ name: 'RideShare' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'RideShare - Go anywhere with RideShare',
    description: 'Request a ride, hop in, and go. Or become a driver and earn money on your schedule.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          {children}
        </div>
      </body>
    </html>
  )
}