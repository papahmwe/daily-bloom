'use client'
import { usePathname } from 'next/navigation'
import { Bell } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

export default function DashboardNavbar() {
  const pathname = usePathname()
  const formattedPathname = pathname
    .split('/')
    .pop()
    .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())

  return (
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
  )
}
