'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import TicketStats from '@/components/dashboard/TicketStats'
import TicketList from '@/components/dashboard/TicketList'

export default function DashboardPage() {
  const [tickets, setTickets] = useState([])
  const [stats, setStats] = useState({
    total: 0,
    open: 0,
    inProgress: 0,
    resolved: 0
  })

  useEffect(() => {
    fetchTickets()
  }, [])

  const fetchTickets = async () => {
    try {
      const response = await axios.get('https://swapi.dev/api/starships/')
      const transformedTickets = response.data.results.map((starship: any) => ({
        id: starship.url.split('/')[5],
        title: starship.name,
        status: ['Open', 'In Progress', 'Resolved'][Math.floor(Math.random() * 3)],
        priority: ['Low', 'Medium', 'High'][Math.floor(Math.random() * 3)],
        department: starship.manufacturer || 'Unknown',
        created: new Date(starship.created).toLocaleDateString()
      }))

      setTickets(transformedTickets)
      
      // Update stats
      setStats({
        total: transformedTickets.length,
        open: transformedTickets.filter((t: any) => t.status === 'Open').length,
        inProgress: transformedTickets.filter((t: any) => t.status === 'In Progress').length,
        resolved: transformedTickets.filter((t: any) => t.status === 'Resolved').length
      })
    } catch (error) {
      console.error('Error fetching tickets:', error)
    }
  }

  return (
    <div className="space-y-6">
      <TicketStats stats={stats} />
      <TicketList tickets={tickets} />
    </div>
  )
}