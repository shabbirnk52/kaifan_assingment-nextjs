// src/components/common/Sidebar.tsx
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/assets/logo.jpg'

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside 
      className={`fixed left-0 top-0 h-screen bg-white shadow-lg transition-all duration-300 z-20
        ${isOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full'}`}
    >
      <div className="p-4 border-b">
        <Image
          src={Logo}
          alt="Help Desk Logo"
          width={150}
          height={60}
          className="mx-auto"
        />
      </div>
      
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link
              href="/dashboard"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              <span className="mr-3">📊</span>
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/tickets"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              <span className="mr-3">🎫</span>
              Tickets
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}