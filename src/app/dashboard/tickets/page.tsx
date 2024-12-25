'use client'

import { useState } from 'react'
import TicketStats from '@/components/dashboard/TicketStats'
import TicketGrid from '@/components/tickets/TicketGrid'
import ViewTicketPanel from '@/components/tickets/ViewTicketPanel'
import CreateTicketModal from '@/components/tickets/CreateTicketModal'
import { useTickets } from '@/hooks/useTickets'
import { Ticket } from '@/data/dummyData'


export default function TicketsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [toast, setToast] = useState({ show: false, message: '' })
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null)
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  
  const { tickets, addTicket } = useTickets()
  const handleViewTicket = (ticket: Ticket) => {
    setSelectedTicket(ticket)
    setIsPanelOpen(true)
  }

  // Calculate stats from current tickets
  const stats = {
    total: tickets.length,
    open: tickets.filter(t => t.status === 'Open').length,
    inProgress: tickets.filter(t => t.status === 'In Progress').length,
    resolved: tickets.filter(t => t.status === 'Resolved').length
  }

  const handleTicketCreated = (ticketData: any) => {
    const ticketId = addTicket(ticketData)
    setIsModalOpen(false)
    setToast({
      show: true,
      message: `Ticket Generated Successfully: #${ticketId}`
    })

    setTimeout(() => {
      setToast({ show: false, message: '' })
    }, 3000)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Ticket Management</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="group flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg 
            hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg font-semibold"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2 transform group-hover:rotate-90 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Create New Ticket
        </button>
      </div>

      <TicketStats stats={stats} />
      <TicketGrid tickets={tickets} onViewTicket={handleViewTicket}  />

      <CreateTicketModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onTicketCreated={handleTicketCreated}
      />

    <ViewTicketPanel
        ticket={selectedTicket}
        isOpen={isPanelOpen}
        onClose={() => {
          setIsPanelOpen(false)
          setSelectedTicket(null)
        }}
      />

      {toast.show && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg">
          {toast.message}
        </div>
      )}
    </div>
  )
}