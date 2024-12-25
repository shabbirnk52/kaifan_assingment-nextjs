import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login - Help Desk Management',
  description: 'Login to Help Desk Management System',
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}