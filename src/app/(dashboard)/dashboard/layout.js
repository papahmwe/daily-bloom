'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Home,
  Shield,
  LineChart,
  FileText,
  ClipboardList,
  Trophy,
  LogOut,
  Bell,
} from 'lucide-react'
import React from 'react'
import Image from 'next/image'

const menuItems = [
  { name: 'Home', href: '/dashboard', icon: Home },
  { name: 'Challenges', href: '/dashboard/challenges', icon: Shield },
  { name: 'Progress', href: '/dashboard/progress', icon: LineChart },
  { name: 'Habit Management', href: '/dashboard/habits', icon: FileText },
  { name: 'Tracking', href: '/dashboard/tracking', icon: ClipboardList },
  { name: 'Rewards', href: '/dashboard/rewards', icon: Trophy },
]

export default function DashboardLayout({ children }) {
  const pathname = usePathname()
  // const formattedPathname = pathname.split('/').pop()
  // convert to capitalize
  const formattedPathname = pathname
    .split('/')
    .pop()
    .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())

  return (
    <div className='flex h-screen bg-white'>
      {/* Sidebar */}
      <aside className='w-64 border-r border-gray-200 font-montserrat'>
        <div className='flex flex-col h-full'>
          {/* Logo */}
          <div className='p-6'>
            <Link
              href='/dashboard'
              className='flex items-center justify-center space-x-2'
            >
              <Image
                src='/assets/dashboardNavbar/logo.png'
                alt='Logo'
                width={104}
                height={104}
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className='flex-1 px-4'>
            <ul className='space-y-2'>
              {menuItems.map(({ name, href, icon: Icon }) => {
                const isActive = pathname === href
                console.log(pathname, href)
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-[#7C5CFC] text-white'
                          : 'text-gray-700 hover:bg-[#7C5CFC] hover:text-white'
                      }`}
                    >
                      <Icon className='w-5 h-5 mr-3' />
                      <span>{name}</span>
                    </Link>
                  </li>
                )
              })}
              <li>
                <button className='flex items-center px-4 py-3 text-red-500 rounded-lg hover:bg-red-50 w-full'>
                  <LogOut className='w-5 h-5 mr-3' />
                  <span>Log Out</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className='flex-1 flex flex-col'>
        {/* Top Navigation */}
        <header className='h-16 border-b border-gray-200 flex items-center justify-between px-6'>
          <h1 className='text-3xl font-bold font-montserrat'>
            {formattedPathname}
          </h1>
          <div className='flex items-center space-x-4'>
            <button className='p-2 hover:bg-gray-100 rounded-lg'>
              <Bell className='w-5 h-5' />
            </button>
            <div className='flex items-center space-x-2'>
              <Image
                src='/assets/dashboardNavbar/avatar.png'
                alt='Avatar'
                width={32}
                height={32}
                className='rounded-full'
              />
              <div>
                <p className='text-sm font-medium'>Henery</p>
                <p className='text-xs text-gray-500'>User Account</p>
              </div>
            </div>
          </div>
        </header>

        {/* Children */}
        <main className='flex-1 overflow-auto bg-gray-50'>{children}</main>
      </div>
    </div>
  )
}
