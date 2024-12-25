'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import LoadingSpinner from '@/components/common/LoadingSpinner'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('user-token')
    if (token) {
      router.push('/dashboard')
    } else {
      router.push('/login')
    }
  }, [router])

  return <LoadingSpinner />
}