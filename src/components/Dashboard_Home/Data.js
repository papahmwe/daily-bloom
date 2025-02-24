'use client'

import DonutChart from '@/components/Dashboard_Home/HomeDataChart'

export default function Data({
  totalHabits,
  upcomingHabits,
  failedHabits,
  completedHabits,
  ongoingHabits,
}) {
  console.log(
    totalHabits,
    upcomingHabits,
    failedHabits,
    completedHabits,
    ongoingHabits
  )
  const firstData = [
    { name: 'completed', value: completedHabits, fill: '#f1e6b9' },
    { name: 'active', value: ongoingHabits, fill: '#9409ff' },
  ]
  const secondData = [
    { name: 'consistency', value: completedHabits, fill: '#ff7f50' },
    { name: 'skipped', value: failedHabits, fill: '#55efc4' },
  ]
  const thirdData = [
    { name: 'on time', value: completedHabits, fill: '#74b9ff' },
    { name: 'missed', value: failedHabits, fill: '#fa1111' },
  ]

  const firstDataPercentage = (
    (completedHabits / (completedHabits + ongoingHabits)) *
    100
  ).toFixed(0)
  const secondDataPercentage = (
    (completedHabits / (completedHabits + failedHabits)) *
    100
  ).toFixed(0)
  const thirdDataPercentage = (
    (completedHabits / (completedHabits + failedHabits)) *
    100
  ).toFixed(0)

  return (
    <div className='flex flex-wrap justify-start p-5 mt-10'>
      {/* Card Component */}
      {[
        { title: 'Progress', data: firstData, percentage: firstDataPercentage },
        {
          title: 'Consistency',
          data: secondData,
          percentage: secondDataPercentage,
        },
        {
          title: 'Habit Completion',
          data: thirdData,
          percentage: thirdDataPercentage,
        },
      ].map((item, index) => (
        <div
          key={index}
          className='w-full md:w-1/2 lg:w-1/4 flex flex-col items-center p-5 bg-white rounded-2xl shadow-md text-center ml-5'
        >
          {/* Title */}
          <h3 className='text-xl font-semibold mb-4'>{item.title}</h3>

          {/* Content */}
          <div className='flex flex-col items-center'>
            {/* Donut Chart */}
            <div className='flex justify-center mb-4'>
              <DonutChart data={item.data} percentage={item.percentage} />
            </div>

            {/* Legend */}
            <div className='flex flex-col justify-center items-start gap-2'>
              {item.data.map((entry) => (
                <div key={entry.name} className='flex items-center gap-2'>
                  <div
                    className='w-4 h-4 rounded-full'
                    style={{ backgroundColor: entry.fill }}
                  ></div>
                  <span className='font-jost text-sm text-black'>
                    {entry.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
