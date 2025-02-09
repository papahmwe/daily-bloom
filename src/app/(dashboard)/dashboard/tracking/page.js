'use client'

import { useState } from 'react'
import { CalendarIcon, ArrowUpDown, Search } from 'lucide-react'
import { Calendar } from '@/components/Calendar'
import { HabitConfirmation } from '@/components/HabitComfimration'
import Image from 'next/image'

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

// Demo data
const initialHabits = [
  {
    id: 1,
    name: 'Yoga',
    startDate: '2025-02-07',
    endDate: '2025-02-12',
    category: 'Lifestyle',
    status: 'Not Started',
    completedDates: [],
  },
  {
    id: 2,
    name: 'Meditation',
    startDate: '2025-01-03',
    endDate: '2025-01-09',
    category: 'Health',
    status: 'Not Started',
    completedDates: [],
  },
]

export default function TrackingPage() {
  const [habits, setHabits] = useState(initialHabits)
  const [selectedHabit, setSelectedHabit] = useState(null)
  const [showCalendar, setShowCalendar] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [activeView, setActiveView] = useState('current') // Add state for active view

  const handleDateSelect = (habit, date) => {
    setSelectedHabit(habit)
    setSelectedDate(date)
    setShowConfirmation(true)
  }

  const handleHabitComplete = () => {
    if (!selectedHabit || !selectedDate) return
    setShowCalendar(false)
    setHabits(
      habits.map((habit) => {
        if (habit.id === selectedHabit.id) {
          const newCompletedDates = [...habit.completedDates, selectedDate]
          const progress = calculateProgress({
            ...habit,
            completedDates: newCompletedDates,
          })

          return {
            ...habit,
            completedDates: newCompletedDates,
            status: progress.percentage === 100 ? 'Completed' : 'In Progress',
          }
        }
        return habit
      })
    )
  }

  // Function to get habits based on active view
  const getFilteredHabits = () => {
    // For now, return all habits for each view
    // You can implement actual filtering logic here later
    return habits
  }

  return (
    <div className='p-6 font-jost'>
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
              {getFilteredHabits().map((habit) => {
                const progress = calculateProgress(habit)
                return (
                  <tr key={habit.id} className='border-b'>
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
                          habit.status === 'Completed'
                            ? 'bg-green-100 text-green-800'
                            : habit.status === 'In Progress'
                            ? 'bg-blue-100 text-blue-800'
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
