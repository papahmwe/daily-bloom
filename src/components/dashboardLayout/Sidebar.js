'use client'
import Link from 'next/link'
import {
  Home,
  Shield,
  LineChart,
  FileText,
  ClipboardList,
  Trophy,
  LogOut,
} from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const menuItems = [
  { name: 'Home', href: '/dashboard', icon: Home },
  { name: 'Challenges', href: '/dashboard/challenges', icon: Shield },
  { name: 'Progress', href: '/dashboard/progress', icon: LineChart },
  { name: 'Habit Management', href: '/dashboard/habits', icon: FileText },
  { name: 'Tracking', href: '/dashboard/tracking', icon: ClipboardList },
  { name: 'Rewards', href: '/dashboard/rewards', icon: Trophy },
]

export default function DashboardSidebar() {
  const pathname = usePathname()
  return (
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
  )
}
