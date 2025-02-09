'use client'

import { Search, Pencil, Trash2, Plus, ChevronDown } from 'lucide-react'
import { useState, React } from 'react'
import { Modal } from '@/components/AsignHabitModal'

const dummyhabits = [
  {
    id: 1,
    name: 'Play Games',
    startDate: '2th Jan, 2025',
    endDate: '4th Jan, 2025',
    category: 'Relax',
    status: 'Completed',
  },
]
  .concat(
    Array(5).fill({
      id: 1,
      name: 'Play Games',
      startDate: '2th Jan, 2025',
      endDate: '4th Jan, 2025',
      category: 'Relax',
      status: 'Completed',
    })
  )
  .map((habit, index) => ({ ...habit, id: index + 1 }))

const defaultCategories = [
  'Education',
  'Meditation',
  'Hydration',
  'Exercises',
  'Personal Development',
  'Relax',
  'Productivity',
  'Financial Habit',
  'Long-term goals',
  'Short-term goals',
  'Creativity',
  'Time Management',
  'Focus',
]

export default function HabitsPage() {
  const [habits, setHabits] = useState(dummyhabits)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false)
  const [categories, setCategories] = useState(defaultCategories)
  const [newCategory, setNewCategory] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    startDate: '',
    endDate: '',
    category: '',
  })

  const itemsPerPage = 10
  const totalPages = Math.ceil(habits.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentHabits = habits.slice(startIndex, endIndex)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newHabit = {
      id: habits.length + 1,
      ...formData,
      status: 'Pending',
    }
    setHabits([...habits, newHabit])
    setIsModalOpen(false)
    setFormData({ name: '', startDate: '', endDate: '', category: '' })
  }

  const handleAddCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory])
      setFormData({ ...formData, category: newCategory })
      setNewCategory('')
    }
  }

  const handleDeleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id))
  }

  return (
    <div className='p-6 font-jost'>
      <div className='mb-6'>
        <div className='flex justify-between items-center'>
          <div className='relative'>
            <input
              type='text'
              placeholder='Search'
              className='pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-[#7C5CFC] focus:border-transparent'
            />
            <Search className='w-5 h-5 text-black/80 absolute right-3 top-2.5' />
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className='bg-[#7C5CFC] text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-[#6a4ee3]'
          >
            <Plus className='w-5 h-5' />
            <span>Assign Habit</span>
          </button>
        </div>
      </div>

      {/* Habits Table */}
      <div className='bg-white rounded-lg shadow'>
        <table className='w-full'>
          <thead>
            <tr className='bg-[#7C5CFC]/70'>
              <th className='px-6 py-3 text-left text-sm font-semibold'>No.</th>
              <th className='px-6 py-3 text-left text-sm font-semibold'>
                Habit Name
              </th>
              <th className='px-6 py-3 text-left text-sm font-semibold'>
                Start Date
              </th>
              <th className='px-6 py-3 text-left text-sm font-semibold'>
                End Date
              </th>
              <th className='px-6 py-3 text-left text-sm font-semibold'>
                Category
              </th>
              <th className='px-6 py-3 text-left text-sm font-semibold'>
                Status
              </th>
              <th className='px-6 py-3 text-left text-sm font-semibold'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentHabits.map((habit) => (
              <tr
                key={habit.id}
                className='border-b border-gray-200 hover:bg-gray-50'
              >
                <td className='px-6 py-4 text-sm'>{habit.id}</td>
                <td className='px-6 py-4 text-sm'>{habit.name}</td>
                <td className='px-6 py-4 text-sm'>{habit.startDate}</td>
                <td className='px-6 py-4 text-sm'>{habit.endDate}</td>
                <td className='px-6 py-4 text-sm'>{habit.category}</td>
                <td className='px-6 py-4 text-sm'>
                  {/* ${habit.status === 'Completed'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'} */}
                  <span className={`px-2 py-1 rounded-full text-xs `}>
                    {habit.status}
                  </span>
                </td>
                <td className='px-6 py-4 text-sm'>
                  <div className='flex space-x-2'>
                    <button className='p-1 hover:bg-gray-100 rounded'>
                      <Pencil className='w-4 h-4 text-yellow-500' />
                    </button>
                    <button
                      onClick={() => handleDeleteHabit(habit.id)}
                      className='p-1 hover:bg-gray-100 rounded'
                    >
                      <Trash2 className='w-4 h-4 text-red-500' />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='px-6 py-4 flex justify-between items-center border-t border-gray-200'>
          <p className='text-sm text-gray '>
            Showing pairs of {startIndex + 1}-
            {Math.min(endIndex, habits.length)}
          </p>
          <div className='flex space-x-2'>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className='bg-[#7C5CFC] text-white px-4 py-2 rounded-lg hover:bg-[#6a4ee3] disabled:opacity-50'
            >
              Previous
            </button>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className='bg-[#7C5CFC] text-white px-4 py-2 rounded-lg hover:bg-[#6a4ee3] disabled:opacity-50'
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Assign Habit Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className='text-2xl font-bold mb-6'>Assign Habit</h2>
        <form onSubmit={handleSubmit}>
          <div className='space-y-6'>
            <div>
              <label className='block text-sm font-medium mb-2'>
                Habit Name
              </label>
              <input
                type='text'
                placeholder='Enter Habit Name'
                className='w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7C5CFC]'
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label className='block text-sm font-medium mb-2'>
                Start Date
              </label>
              <div className='relative'>
                <input
                  type='date'
                  className='w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7C5CFC]'
                  value={formData.startDate}
                  onChange={(e) =>
                    setFormData({ ...formData, startDate: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div>
              <label className='block text-sm font-medium mb-2'>End Date</label>
              <div className='relative'>
                <input
                  type='date'
                  className='w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7C5CFC]'
                  value={formData.endDate}
                  onChange={(e) =>
                    setFormData({ ...formData, endDate: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div>
              <label className='block text-sm font-medium mb-2'>Category</label>
              <div className='relative'>
                <button
                  type='button'
                  onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                  className='w-full p-3 bg-gray-50 rounded-lg border border-gray-200 flex justify-between items-center'
                >
                  {formData.category || 'Choose Category'}
                  <ChevronDown className='w-5 h-5 text-gray-400' />
                </button>

                {showCategoryDropdown && (
                  <div className='absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg'>
                    <div className='p-2'>
                      <div className='flex flex-wrap gap-2 mb-2'>
                        {categories.map((category) => (
                          <button
                            key={category}
                            type='button'
                            onClick={() => {
                              setFormData({ ...formData, category })
                              setShowCategoryDropdown(false)
                            }}
                            className={`px-3 py-1 rounded-full text-sm ${
                              formData.category === category
                                ? 'bg-[#7C5CFC] text-white'
                                : 'border border-gray-200 hover:border-[#7C5CFC]'
                            }`}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                      <div className='flex gap-2 mt-2 pt-2 border-t'>
                        <input
                          type='text'
                          placeholder='Add custom category'
                          value={newCategory}
                          onChange={(e) => setNewCategory(e.target.value)}
                          className='flex-1 p-2 text-sm border rounded'
                        />
                        <button
                          type='button'
                          onClick={handleAddCategory}
                          className='px-3 py-1 bg-[#7C5CFC] text-white rounded-lg text-sm'
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className='flex justify-end space-x-4 mt-8'>
              <button
                type='button'
                onClick={() => setIsModalOpen(false)}
                className='px-6 py-2 border border-[#7C5CFC] text-[#7C5CFC] rounded-lg hover:bg-gray-50'
              >
                Cancel
              </button>
              <button
                type='submit'
                className='px-6 py-2 bg-[#7C5CFC] text-white rounded-lg hover:bg-[#6a4ee3]'
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  )
}
