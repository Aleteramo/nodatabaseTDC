import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "The Duke's Chrono",
  description: 'Collezione esclusiva di orologi vintage di prestigio',
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className="bg-black">
      <body className={`${inter.className} min-h-screen bg-black`}>
        {children}
      </body>
    </html>
  );
}
