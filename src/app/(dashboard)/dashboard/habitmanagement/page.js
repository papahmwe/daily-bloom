'use client'

import { Search, Pencil, Trash2, Plus, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Modal } from '@/components/AsignHabitModal'
import { useSession } from 'next-auth/react'
import { ClipboardX } from 'lucide-react'


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
  const { data: session, status } = useSession()
  const [habits, setHabits] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [habitToDelete, setHabitToDelete] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false)
  const [categories, setCategories] = useState(defaultCategories)
  const [newCategory, setNewCategory] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    startDate: '',
    endDate: '',
    totalDays: '',
    category: '',
  })
  
  useEffect(() => {
    if (session?.user?.id) {
      fetchHabits()
    }
  }, [session])

  const fetchHabits = async () => {
    try {
      const response = await fetch(`/api/habits/${session.user.id}`)
      if (response.ok) {
        const data = await response.json()
        setHabits(data)
        console.log(data)
      }
    } catch (error) {
      console.error('Failed to fetch habits:', error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/habits/create', {
        method: isEditing ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          userId: session?.user?.id,
          startDate: new Date(formData.startDate),
          endDate: new Date(formData.endDate),
          status: 'pending',

        }),
      })

      if (response.ok) {
        await fetchHabits() 
        closeModal()
      }
      console.log(formData)
    } catch (error) {
      console.error('Failed to save habit:', error)
    }
  }

  const handleEdit = (habit) => {
    setFormData({
      ...habit,
      userId: session?.user?.id,
      startDate: new Date(habit.startDate).toISOString().split('T')[0],
      endDate: new Date(habit.endDate).toISOString().split('T')[0],
    })
    setIsEditing(true)
    setIsModalOpen(true)
  }

  const handleDeleteClick = (habit) => {
    setHabitToDelete(habit)
    setIsDeleteModalOpen(true)
  }

  const handleDeleteConfirm = async () => {
    try {
      const response = await fetch(`/api/habits/delete/${habitToDelete._id}`, {
        method: 'DELETE',
      })
      if (response.ok) {
        await fetchHabits()
        setIsDeleteModalOpen(false)
        setHabitToDelete(null)
      }
    } catch (error) {
      console.error('Failed to delete habit:', error)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setIsEditing(false)
    setFormData({ name: '', startDate: '', endDate: '', category: '' })
  }

  const itemsPerPage = 10
  const totalPages = Math.ceil(habits.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentHabits = habits.slice(startIndex, endIndex)

  const handleAddCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory])
      setFormData({ ...formData, category: newCategory })
      setNewCategory('')
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (status === "unauthenticated") {
    return <div>Access Denied</div>
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
            {habits.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-8">
                  <div className="flex flex-col items-center justify-center ">
                    <div className="mb-4">
                      <ClipboardX className="w-12 h-12 text-gray-400" />
                    </div>
                    <p className="text-lg font-medium text-gray-600 mb-2">No habits created yet</p>
                    <p className="text-sm text-gray-500 mb-4">Get started by creating your first habit using the 'Assign Habit' button above</p>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="bg-[#7C5CFC] text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-[#6a4ee3]"
                    >
                      <Plus className="w-5 h-5" />
                      <span>Assign Habit</span>
                    </button>
                  </div>
                </td>
              </tr>
            ) : (
              habits.map((habit, index) => (
                <tr
                  key={index}
                className='border-b border-gray-200 hover:bg-gray-50'
              >
                <td className='px-6 py-4 text-sm'>{index + 1}</td>
                <td className='px-6 py-4 text-sm'>{habit.name }</td>
                <td className='px-6 py-4 text-sm'>{formatDate(habit.startDate)}</td>
                <td className='px-6 py-4 text-sm'>{formatDate(habit.endDate)}</td>
                <td className='px-6 py-4 text-sm'>{habit.category}</td>
                <td className='px-6 py-4 text-sm'>
                  
                  <span className={`px-2 py-1 rounded-full text-xs ${habit.status === 'completed'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'} `}>
                    {habit.status}
                  </span>
                </td>
                <td className='px-6 py-4 text-sm'>
                  <div className='flex space-x-2'>
                    <button onClick={() => handleEdit(habit)} className='p-1 hover:bg-gray-100 rounded'>
                      <Pencil className='w-4 h-4 text-yellow-500' />
                    </button>
                    <button onClick={() => handleDeleteClick(habit)} className='p-1 hover:bg-gray-100 rounded'>
                      <Trash2 className='w-4 h-4 text-red-500' />
                    </button>
                  </div>
                </td>
              </tr>
              ))
            )}
          </tbody>
        </table>
        {habits.length > 0 && (
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
        )}
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

      {/* Delete Habit Modal */}
      <Modal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)}>
        <h2 className='text-2xl font-bold mb-6'>Delete Habit</h2>
        <p className='mb-6'>Are you sure you want to delete this habit?</p>
        <div className='flex justify-end space-x-4'>
          <button
            type='button'
            onClick={() => setIsDeleteModalOpen(false)}
            className='px-6 py-2 border border-[#7C5CFC] text-[#7C5CFC] rounded-lg hover:bg-gray-50'
          >
            Cancel
          </button>
          <button
            type='button'
            onClick={handleDeleteConfirm}
            className='px-6 py-2 bg-[#7C5CFC] text-white rounded-lg hover:bg-[#6a4ee3]'
          >
            Delete
          </button> 
        </div>
      </Modal>
    </div>
  )
}
