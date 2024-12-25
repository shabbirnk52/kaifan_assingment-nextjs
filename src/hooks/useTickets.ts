import { useState, useEffect } from 'react'
import { dummyTickets } from '@/data/dummyData'

export interface Ticket {
  id: string
  title: string
  description: string
  status: 'Open' | 'In Progress' | 'Resolved'
  priority: 'Low' | 'Medium' | 'High'
  category: string
  assignee: string
  created: string
}

export function useTickets() {
  const [tickets, setTickets] = useState<Ticket[]>([])

  // Load tickets from localStorage on initial render
  useEffect(() => {
    const storedTickets = localStorage.getItem('helpdesk-tickets')
    if (storedTickets) {
      setTickets(JSON.parse(storedTickets))
    } else {
      // If no tickets in localStorage, use dummy data
      setTickets(dummyTickets.tickets)
      localStorage.setItem('helpdesk-tickets', JSON.stringify(dummyTickets.tickets))
    }
  }, [])

  // Add new ticket
  const addTicket = (newTicketData: Ticket) => {
    const ticket: Ticket = {
      ...newTicketData,
      id: `TK-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`,
      created: new Date().toISOString()
    }
  
    const updatedTickets = [...tickets, ticket]
    setTickets(updatedTickets)
    localStorage.setItem('helpdesk-tickets', JSON.stringify(updatedTickets))
    return ticket.id
  }

  return {
    tickets,
    addTicket,
  }
}