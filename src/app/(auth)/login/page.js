'use client'

import { Eye, EyeOff, User } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const slides = [
  {
    image: '/assets/images/auth/login1.png',
    title: 'One login',
    subtitle: 'endless growth with DailyBloom',
  },
  {
    image: '/assets/images/auth/login2.png',
    title: 'Track Progress',
    subtitle: 'watch yourself grow every day',
  },
  {
    image: '/assets/images/auth/login3.png',
    title: 'Earn Rewards',
    subtitle: 'get rewarded for consistency',
  },
]

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

export default function LoginPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className='min-h-screen bg-backgroundPrimary flex items-center justify-center p-4'>
      <div className='p-3 w-full max-w-5xl bg-backgroundForm rounded-lg overflow-hidden shadow-xl grid grid-cols-1 md:grid-cols-2'>
        {/* Left side */}
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

        {/* Right side */}
        <div className='bg-backgroundForm p-8'>
          <div className='space-y-6'>
            <div className='text-center space-y-2'>
              <h1 className='text-3xl font-bold text-backgroundPrimary'>
                Welcome Back
              </h1>
              <p className='text-backgroundPrimary/90'>
                DailyBloom: Login and thrive with us
              </p>
              <p className='text-backgroundPrimary/90'>every sigle day!</p>
            </div>

            <form className='space-y-6'>
              <div className='relative w-[350px] mx-auto'>
                <input
                  type='text'
                  placeholder='username'
                  className='w-full px-4 py-4 rounded-lg bg-white/80  
                    border border-white/30 text-black/60 placeholder:text-black/60
                    focus:outline-none focus:border-white/50'
                />
                <User className='absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/60' />
              </div>

              <div className='relative w-[350px] mx-auto'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='password'
                  className='w-full px-4 py-4 rounded-lg bg-white/80  
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

              <div className='flex justify-center'>
                <button
                  type='button'
                  className='text-white/90 hover:text-white'
                >
                  forget password ?
                </button>
              </div>

              <div className='relative w-[350px] mx-auto'>
                <button
                  type='submit'
                  className=' w-full py-4 px-4 bg-white text-bold text-2xl text-backgroundForm rounded-lg
                  hover:bg-white/90 transition-colors font-medium '
                >
                  Log In
                </button>
              </div>
            </form>

            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-white/20' />
              </div>
              <div className='relative flex justify-center text-sm'>
                <span className='px-2 bg-backgroundForm text-white/80'>
                  or continue with
                </span>
              </div>
            </div>

            <div className='flex justify-center items-center gap-10'>
              <button>
                <Image
                  src='/assets/images/auth/google.png'
                  alt='google'
                  width={36}
                  height={36}
                />
              </button>
              <button className='p-3  transition-colors '>
                <Image
                  src='/assets/images/auth/facebook.png'
                  alt='facebook'
                  width={36}
                  height={36}
                  className='rounded-full'
                />
              </button>
              <button className='p-3  transition-colors'>
                <Image
                  src='/assets/images/auth/instagram.png'
                  alt='instagram'
                  width={36}
                  height={36}
                />
              </button>
            </div>

            <p className='text-center text-white/90'>
              Not a member?{' '}
              <Link href='/signup' className='text-white hover:underline'>
                Register now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
