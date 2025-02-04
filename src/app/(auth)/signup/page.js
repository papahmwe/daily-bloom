'use client'

import { Eye, EyeOff, User } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import signup1 from '@/public/signup1.png'
import signup2 from '@/public/signup2.png'
import signup3 from '@/public/signup3.png'

const slides = [
  {
    image: signup1.src,
    title: 'One login',
    subtitle: 'endless growth with DailyBloom',
  },
  {
    image: signup2.src,
    title: 'Small Steps Big Rewards',
    subtitle: 'Stay Consisten With Dailybloom',
  },
  {
    image: signup3.src,
    title: 'Consistency Unlocks Rewards Rewards',
    subtitle: 'Start Blooming with DailyBloom',
  },
]

export default function SignupPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  // Highlight Text
  const formatSubtitle = (text) => {
    if (text.includes('DailyBloom')) {
      return text.split('DailyBloom').map((part, index, array) => (
        <span key={index}>
          {part}
          {index < array.length - 1 && (
            <span className='text-backgroundForm'>DailyBloom</span>
          )}
        </span>
      ))
    }
    return text
  }

  return (
    <div className='min-h-screen bg-backgroundPrimary flex items-center justify-center p-4'>
      <div className='p-3 w-full max-w-5xl bg-backgroundForm rounded-lg overflow-hidden shadow-xl grid grid-cols-1 md:grid-cols-2'>
        {/* Left side*/}
        <div className='bg-backgroundForm p-8'>
          <div className=' space-y-8'>
            <div>
              <h1 className='text-4xl font-bold text-white'>Logo</h1>
            </div>

            <div>
              <h2 className='text-3xl font-bold text-white'>Get Started</h2>
              <p className='text-white/90 mt-2'>
                already have an account? <Link href='/login'>sign in</Link>
              </p>
            </div>

            <form className='space-y-8'>
              <div className='relative'>
                <input
                  type='text'
                  placeholder='username'
                  required
                  className='w-full px-4 py-5 rounded-lg bg-white/80  
                    border border-white/30 text-black/60 placeholder:text-black/60
                    focus:outline-none focus:border-white/50'
                />
                <User className='absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/60' />
              </div>

              <div className='relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='password'
                  required
                  className='w-full px-4 py-5 rounded-lg bg-white/80  
                    border border-white/30 text-black/60 placeholder:text-black/60
                    focus:outline-none focus:border-white/50'
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-4 top-1/2 -translate-y-1/2 text-black/60'
                >
                  {showPassword ? (
                    <EyeOff className='w-5 h-5' />
                  ) : (
                    <Eye className='w-5 h-5' />
                  )}
                </button>
              </div>

              <div className='relative'>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder='confirm password'
                  required
                  className='w-full px-4 py-5 rounded-lg bg-white/80  
                    border border-white/30 text-black/60 placeholder:text-black/60
                    focus:outline-none focus:border-white/50'
                />
                <button
                  type='button'
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className='absolute right-4 top-1/2 -translate-y-1/2 text-black/60'
                >
                  {showConfirmPassword ? (
                    <EyeOff className='w-5 h-5' />
                  ) : (
                    <Eye className='w-5 h-5' />
                  )}
                </button>
              </div>

              <button
                type='submit'
                className='w-full py-4 px-4 bg-white text-2xl text-backgroundForm font-bold rounded-lg
                  hover:bg-white/90'
              >
                Sign up
              </button>
            </form>
          </div>
        </div>

        {/* Right side*/}
        <div className='p-3 bg-backgroundPrimary rounded-lg'>
          <div className='relative flex flex-col items-center justify-center overflow-hidden'>
            <div className='relative w-full aspect-square max-w-md '>
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out 
                    ${
                      index === currentSlide
                        ? 'opacity-100 translate-x-0'
                        : index < currentSlide
                        ? 'opacity-0 -translate-x-full'
                        : 'opacity-0 translate-x-full'
                    }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className='object-contain'
                  />
                </div>
              ))}
            </div>
            <div className='flex gap-3 mt-6'>
              {' '}
              {/* Increased gap between dots */}
              {slides.map((value, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`rounded-full transition-all duration-1000 ease-in-out
                    ${
                      index === currentSlide
                        ? 'w-6 bg-violet-500'
                        : 'w-2 bg-gray-300'
                    } h-2`}
                />
              ))}
            </div>
            <div className='text-center mt-6 space-y-2'>
              <h2 className='text-xl font-semibold'>
                {slides[currentSlide].title}
              </h2>
              <p className='text-gray-600'>
                {formatSubtitle(slides[currentSlide].subtitle)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
