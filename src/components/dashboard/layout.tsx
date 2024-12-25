'use client'

import { useAuth } from '@/contexts/AuthContext'
import Sidebar from '@/components/common/Sidebar'
import Header from '@/components/common/Header'
import ProtectedRoute from '@/components/common/ProtectedRoute'
import { useState } from 'react'



export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isAuthenticated } = useAuth()
  const [isSidebarOpen, setSidebarOpen] = useState(true)

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <div className="flex">
        <Sidebar isOpen={isSidebarOpen} />
          <main className="flex-1 ml-64 transition-all duration-300">
          <Header toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
            <div className="p-6">
              {children}
            </div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  )
}