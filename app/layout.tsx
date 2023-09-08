import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Aryan's Portfolio",
  description: 'Machine Learning Engineer || Web Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
