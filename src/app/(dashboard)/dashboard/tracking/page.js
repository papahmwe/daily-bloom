'use client'

import { useState, useEffect } from 'react'
import { CalendarIcon, ArrowUpDown, Search } from 'lucide-react'
import { Calendar } from '@/components/Calendar'
import { HabitConfirmation } from '@/components/HabitComfimration'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { toast } from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'

export function calculateDateRange(startDate, endDate) {
  const dates = []
  const current = new Date(startDate)
  const end = new Date(endDate)

  while (current <= end) {
    dates.push(current.toISOString().split('T')[0])
    current.setDate(current.getDate() + 1)
  }

  return dates
}

export function calculateProgress(habit) {
  const dateRange = calculateDateRange(habit.startDate, habit.endDate)
  const totalDays = dateRange.length
  const completedDays = habit.completedDates.length
  const percentage = Math.round((completedDays / totalDays) * 100)

  return {
    totalDays,
    completedDays,
    percentage,
  }
}


export default function TrackingPage() {
  const { data: session, status } = useSession()
  const [habits, setHabits] = useState([])
  const [selectedHabit, setSelectedHabit] = useState(null)
  const [showCalendar, setShowCalendar] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [activeView, setActiveView] = useState('current') // Add state for active view

  const fetchHabits = async () => {
    const response = await fetch(`/api/habits/${session.user.id}`)
    const data = await response.json()
    setHabits(data)
  }

  useEffect(() => {
    if (status === 'authenticated') {
        fetchHabits()
    }
  }, [session, status])


  const handleDateSelect = (habit, date) => {
    setSelectedHabit(habit)
    setSelectedDate(date)
    setShowConfirmation(true)
  }

  const handleHabitComplete = async () => {
    if (!selectedHabit || !selectedDate) return
    setShowCalendar(false)
    try {
      const response = await fetch(`/api/habits/update/${selectedHabit._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          completedDates: [...selectedHabit.completedDates, selectedDate],
          userId: session.user.id 
        }),
      })
      
      const data = await response.json()
      if (response.ok) {
        await fetchHabits()
        setShowConfirmation(false)
        console.log("data", data)
        if (data.pointsAwarded) {
          toast.success(`Congratulations! You completed the habit and earned ${data.pointsAwarded} points!`)
        }
      }
    } catch (error) {
      console.error('Failed to update habit:', error)
      toast.error('Failed to update habit')
    }
  }

  const getFilteredHabits = () => {
    return habits
  }

  if (status === 'unauthenticated') {
    return <div>Access Denied</div>
  }

  if (habits.length === 0) {
    return <div>No habits found</div>
  }

  if(status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <div className='p-6 font-jost'>
      <Toaster position="top-center" />
      <div className='flex items-center justify-between mb-6'>
        <div className='flex space-x-8'>
          <button className='px-4 py-2 bg-white rounded-lg border flex items-center space-x-2'>
            <Image
              src='/assets/tracking/habit.png'
              alt='habit'
              width={20}
              height={20}
            />
            <span>Habits</span>
          </button>
          <button className='px-4 py-2 bg-white rounded-lg border flex items-center space-x-2'>
            <Image
              src='/assets/tracking/fire.png'
              alt='fire'
              width={20}
              height={20}
            />
            <span>Streak</span>
          </button>
        </div>
      </div>

      <div className='bg-white rounded-lg shadow p-3'>
        <div className='flex items-center justify-between mb-6'>
          <div className='flex items-center space-x-4 mb-6'>
            <button
              className={`px-4 py-2 ${
                activeView === 'current'
                  ? 'text-[#7C5CFC] border-b-2 border-[#7C5CFC]'
                  : 'text-black'
              }`}
              onClick={() => setActiveView('current')}
            >
              <div className='flex items-center space-x-2'>
                <CalendarIcon
                  className={`w-5 h-5 ${
                    activeView === 'current' ? 'text-[#7C5CFC]' : 'text-black'
                  }`}
                />
                <span>Current</span>
              </div>
            </button>
            <button
              className={`px-4 py-2 ${
                activeView === 'month'
                  ? 'text-[#7C5CFC] border-b-2 border-[#7C5CFC]'
                  : 'text-black'
              }`}
              onClick={() => setActiveView('month')}
            >
              <div className='flex items-center space-x-2'>
                <CalendarIcon
                  className={`w-5 h-5 ${
                    activeView === 'month' ? 'text-[#7C5CFC]' : 'text-black'
                  }`}
                />
                <span>This Month</span>
              </div>
            </button>
            <button
              className={`px-4 py-2 ${
                activeView === 'year'
                  ? 'text-[#7C5CFC] border-b-2 border-[#7C5CFC]'
                  : 'text-black'
              }`}
              onClick={() => setActiveView('year')}
            >
              <div className='flex items-center space-x-2'>
                <CalendarIcon
                  className={`w-5 h-5 ${
                    activeView === 'year' ? 'text-[#7C5CFC]' : 'text-black'
                  }`}
                />
                <span>This Year</span>
              </div>
            </button>
          </div>

          <div className='flex items-center space-x-4'>
            <ArrowUpDown className='w-5 h-5 text-black' />
            <Search className='w-5 h-5 text-black' />
          </div>
        </div>

        <div>
          <table className='w-full'>
            <thead>
              <tr className='border-b'>
                <th className='px-6 py-3 text-left text-sm font-medium text-gray-500'>
                  <div className='flex items-center space-x-2'>
                    <Image
                      src='/assets/tracking/progress.png'
                      alt='progress'
                      width={16}
                      height={16}
                    />
                    <span>Progress</span>
                  </div>
                </th>
                <th className='px-6 py-3 text-left text-sm font-medium text-gray-500'>
                  <div className='flex items-center space-x-2'>
                    <Image
                      src='/assets/tracking/calendar.png'
                      alt='calendar'
                      width={16}
                      height={16}
                    />
                    <span>Date Range</span>
                  </div>
                </th>
                <th className='px-6 py-3 text-left text-sm font-medium text-gray-500'>
                  <div className='flex items-center space-x-2'>
                    <Image
                      src='/assets/tracking/meditation.png'
                      alt='meditation'
                      width={16}
                      height={16}
                    />
                    <span>Habit Name</span>
                  </div>
                </th>
                <th className='px-6 py-3 text-left text-sm font-medium text-gray-500'>
                  <div className='flex items-center space-x-2'>
                    <Image
                      src='/assets/tracking/menu.png'
                      alt='menu'
                      width={16}
                      height={16}
                    />
                    <span>Category</span>
                  </div>
                </th>
                <th className='px-6 py-3 text-left text-sm font-medium text-gray-500'>
                  <div className='flex items-center space-x-2'>
                    <Image
                      src='/assets/tracking/shield.png'
                      alt='shield'
                      width={16}
                      height={16}
                    />
                    <span>Status</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {getFilteredHabits().map((habit, index) => {
                const progress = calculateProgress(habit)
                return (
                  <tr key={index} className='border-b'>
                    <td className='px-6 py-4'>
                      <div className='flex items-center space-x-2'>
                        <span className='text-sm'>{progress.percentage}%</span>
                      </div>
                    </td>
                    <td className='px-6 py-4'>
                      <button
                        onClick={() => {
                          setSelectedHabit(habit)
                          setShowCalendar(true)
                        }}
                        className='flex items-center space-x-2 text-sm text-black'
                      >
                        <span>
                          {new Date(habit.startDate).toLocaleDateString()} -{' '}
                          {new Date(habit.endDate).toLocaleDateString()}
                        </span>
                        <CalendarIcon className='w-4 h-4' />
                      </button>
                    </td>
                    <td className='px-6 py-4'>
                      <div className='flex items-center space-x-2'>
                        <input
                          type='checkbox'
                          className='rounded border-gray-300'
                        />
                        <span className='text-sm'>{habit.name}</span>
                      </div>
                    </td>
                    <td className='px-6 py-4'>
                      <div className='flex items-center space-x-2'>
                        <input
                          type='checkbox'
                          className='rounded border-gray-300'
                        />
                        <span className='text-sm'>{habit.category}</span>
                      </div>
                    </td>
                    <td className='px-6 py-4'>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          habit.status === 'completed'
                            ? 'bg-green-100 text-green-800'
                            : habit.status === 'ongoing'
                            ? 'bg-blue-100 text-blue-800'
                            : habit.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-800' 
                            : habit.status === 'failed'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {habit.status}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {selectedHabit && showCalendar && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
          <div className='bg-white rounded-lg p-4'>
            <Calendar
              setShowCalendar={setShowCalendar}
              startDate={selectedHabit.startDate}
              endDate={selectedHabit.endDate}
              completedDates={selectedHabit.completedDates}
              onDateSelect={(date) => handleDateSelect(selectedHabit, date)}
            />
          </div>
        </div>
      )}

      {selectedHabit && selectedDate && (
        <HabitConfirmation
          isOpen={showConfirmation}
          onClose={() => setShowConfirmation(false)}
          onConfirm={handleHabitComplete}
          habitName={selectedHabit.name}
          date={selectedDate}
        />
      )}
    </div>
  )
}
