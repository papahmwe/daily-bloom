import Image from 'next/image'

export default function Popup({ open, onChange }) {
  if (!open) return null

  return (
    <div className='w-[100vw] h-[100vh] absolute top-0 left-[-333px] z-[1000]'>
      {/* Popup overlay */}
      <div
        className='w-full h-full bg-[#8F8F8F80] '
        onClick={() => onChange(!open)}
      />

      {/* Popup box */}
      <div className='w-[400px] h-[500px] bg-backgroundPrimary rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 pt-4'>
        <div className='flex justify-end items-center'>
          <Image
            src={'/assets/rewards/rewards-icon.svg'}
            alt='close icon'
            width={16}
            height={16}
            className='cursor-pointer'
            onClick={() => onChange(!open)}
          />
        </div>

        {/* For content */}
        <div>
          <h1>Popup Content</h1>
        </div>
      </div>
    </div>
  )
}
