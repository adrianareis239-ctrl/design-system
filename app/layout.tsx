import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Design System — v1.0',
  description: 'Personal design system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
