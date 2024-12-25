'use client'

import { Ticket } from "@/data/dummyData";

interface ViewTicketPanelProps {
  ticket: Ticket | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ViewTicketPanel({ ticket, isOpen, onClose }: ViewTicketPanelProps) {
  if (!ticket || !isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-40"
        onClick={onClose}
      />

      {/* Side Panel */}
      <div className={`fixed inset-y-0 right-0 w-96 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">Ticket Details</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto h-full pb-32">
          {/* Ticket ID */}
          <div className="mb-6">
            <span className="text-sm text-gray-500">Ticket ID</span>
            <p className="text-lg font-semibold">#{ticket.id}</p>
          </div>

          {/* Title */}
          <div className="mb-6">
            <span className="text-sm text-gray-500">Title</span>
            <p className="text-lg">{ticket.title}</p>
          </div>

          {/* Description */}
          <div className="mb-6">
            <span className="text-sm text-gray-500">Description</span>
            <p className="mt-1 text-gray-800 whitespace-pre-wrap">{ticket.description}</p>
          </div>

          {/* Status and Priority */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <span className="text-sm text-gray-500">Status</span>
              <span className={`mt-1 inline-flex px-2 py-1 text-sm rounded-full
                ${ticket.status === 'Open' ? 'bg-yellow-100 text-yellow-800' : 
                  ticket.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 
                  'bg-green-100 text-green-800'}`}>
                {ticket.status}
              </span>
            </div>
            <div>
              <span className="text-sm text-gray-500">Priority</span>
              <span className={`mt-1 inline-flex px-2 py-1 text-sm rounded-full
                ${ticket.priority === 'High' ? 'bg-red-100 text-red-800' : 
                  ticket.priority === 'Medium' ? 'bg-orange-100 text-orange-800' : 
                  'bg-green-100 text-green-800'}`}>
                {ticket.priority}
              </span>
            </div>
          </div>

          {/* Category */}
          <div className="mb-6">
            <span className="text-sm text-gray-500">Category</span>
            <p className="mt-1">{ticket.category}</p>
          </div>

          {/* Assignee */}
          <div className="mb-6">
            <span className="text-sm text-gray-500">Assignee</span>
            <div className="mt-1 flex items-center">
              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">
                  {ticket.assignee[0]}
                </span>
              </div>
              <span className="ml-2">{ticket.assignee}</span>
            </div>
          </div>

          {/* Created Date */}
          <div className="mb-6">
            <span className="text-sm text-gray-500">Created</span>
            <p className="mt-1">
              {new Date(ticket.created).toLocaleDateString()} {new Date(ticket.created).toLocaleTimeString()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}