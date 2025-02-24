'use client'

import Image from 'next/image'

import DonutChart from '@/components/Dashboard_Progress/DonutPieWithData'

export default function Data({ data }) {
  // Dynamic Goal Data
  const goalData = [
    {
      name: 'Remaining',
      value: 100 - data.completedHabitsPercentage,
      fill: '#E2E8F0',
    },
    {
      name: 'Completed',
      value: data.completedHabitsPercentage,
      fill: '#FAA1D2',
    },
  ]

  // Dynamic Monthly Data
  const monthlyData = data.mostCompletedCategories.map((category, index) => ({
    name: category._id,
    value: category.count,
    fill: ['#FAA1D2', '#90CDFC', '#93FC90'][index % 5],
  }))

  // Static Datas
  const images = [
    '/assets/Progress/Workout.svg',
    '/assets/Progress/Yoga.svg',
    '/assets/Progress/Drinking.svg',
    '/assets/Progress/Reading.svg',
  ]

  const completedData = [
    {
      id: 1,
      name: 'Workout',
      progress: '100%',
      progressTitleOne: 'Completed',
      progressTitleTwo: 'Active',
      image: '/assets/Progress/Workout.svg',
    },
    {
      id: 2,
      name: 'Yoga',
      progress: '100%',
      progressTitleOne: 'Completed',
      progressTitleTwo: 'Active',
      image: '/assets/Progress/Yoga.svg',
    },
    {
      id: 3,
      name: 'Drinking',
      progress: '100%',
      progressTitleOne: 'Completed',
      progressTitleTwo: 'Active',
      image: '/assets/Progress/Drinking.svg',
    },
    {
      id: 4,
      name: 'Reading',
      progress: '100%',
      progressTitleOne: 'Completed',
      progressTitleTwo: 'Active',
      image: '/assets/Progress/Reading.svg',
    },
  ]

  const percentage = 80

  return (
    <div className=' flex flex-col justify-start gap-[50px] '>
      {/* Progress Section */}
      <div className=' flex flex-col gap-[30px] '>
        <h1 className='font-montserrat font-[600] text-[24px] opacity-80 text-[#000000] leading-[32.91px]'>
          The progress you&apos;ve already made.
        </h1>

        <div className='w-[660px] h-[269px] flex justify-start items-center gap-[40px] '>
          <div className='flex justify-start items-center gap-[80px] '>
            {/* First Donut Chart */}
            <DonutChart data={goalData} percentage={percentage} />

            {/* Second Donut Chart */}
            <DonutChart data={monthlyData} percentage={'This Month'} />
          </div>

          {/* Legend on the Right */}
          <div className='flex flex-col justify-center items-start gap-[10px] '>
            {monthlyData.map((entry, index) => (
              <div
                key={index}
                className='flex justify-center items-center gap-[8px]'
              >
                <div
                  className='w-[20px] h-[20px] rounded-full'
                  style={{ backgroundColor: entry.fill }} // Use the color defined in the data
                ></div>
                <span className='font-jost font-[400] text-[16px] text-[#000000] tracking-wide leading-[17.34px] opacity-80'>
                  {entry.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Completed Habits Section */}
      <div className='flex flex-col gap-[30px]'>
        <h1 className='font-montserrat font-[600] text-[24px] opacity-80 text-[#000000] leading-[32.91px]'>
          Completed Habits
        </h1>

        {/* Display Data Section */}
        <div className='w-auto h-[722.46px] flex flex-1 flex-wrap gap-6 '>
          {completedData.map((data, index) => {
            return (
              <div
                key={data.id}
                className={`lg:w-[463px] w-auto h-[348px] flex justify-between items-center bg-mainLight hover:bg-mainPrimary transition-all duration-700 cursor-pointer p-7
                ${
                  data.id === 2 || data.id === 4
                    ? 'flex-row-reverse '
                    : 'flex-row '
                }
                ${
                  data.id === 1
                    ? 'rounded-t-[10px] rounded-bl-[10px] rounded-br-[100px]'
                    : ''
                }
                 ${
                   data.id === 2
                     ? 'rounded-t-[10px] rounded-bl-[100px] rounded-br-[10px]'
                     : ''
                 }
                 ${
                   data.id === 3
                     ? 'rounded-tl-[10px] rounded-tr-[100px] rounded-b-[10px]'
                     : ''
                 }
                 ${
                   data.id === 4
                     ? 'rounded-tl-[100px] rounded-tr-[10px] rounded-b-[10px]'
                     : ''
                 }
               `}
              >
                <div
                  className={`flex flex-col justify-between gap-28
                ${data.id === 2 || data.id === 4 ? 'items-end' : 'items-start'}
                `}
                >
                  {/* Title */}
                  <h1 className='font-montserrat font-[600] text-[40px] text-[#F5F5F5]'>
                    {data.name}
                  </h1>

                  {/* Bottom Data */}
                  <div>
                    <h3 className='font-montserrat font-[600] text-[36px] text-[#F5F5F5]'>
                      {data.progress}
                    </h3>
                    <div className='flex flex-col gap-2'>
                      <div className='flex justify-start items-center gap-2'>
                        <span className='inline-block w-[15px] h-[15px] border-2 border-mainPrimary rounded-full bg-[#F5F5F5]'></span>
                        <h3 className='font-jost font-[400] text-[18px] text-[#F5F5F5]'>
                          {data.progressTitleOne}
                        </h3>
                      </div>
                      <div className='flex justify-start items-center gap-2'>
                        <span className='inline-block w-[15px] h-[15px] border-2 border-mainPrimary rounded-full bg-[#F5F5F5]'></span>
                        <h3 className='font-jost font-[400] text-[18px] text-[#F5F5F5]'>
                          {data.progressTitleTwo}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div>
                  <Image
                    src={data.image}
                    alt={data.name}
                    width={250}
                    height={250}
                    className='object-cover'
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
