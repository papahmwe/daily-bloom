'use client'

import DashboardNavbar from '@/components/Dashboard_Home/Navbar'
import DashboardSidebar from '@/components/Dashboard_Home/Sidebar'

export default function DashboardLayout({ children }) {
  return (
    <div className='flex h-screen bg-white'>
      <DashboardSidebar />
      {/* Main Content */}
      <div className='flex-1 flex flex-col'>
        <DashboardNavbar />
        {/* Children */}
        <main className='flex-1 overflow-auto bg-gray-50'>{children}</main>
      </div>
    </div>
  )
}
