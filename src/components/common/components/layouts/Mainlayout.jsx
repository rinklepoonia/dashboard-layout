import DashboardSidebar from '@/components/DashboardSidebar'
import React from 'react'

const Mainlayout = () => {
  return (
    <div className='bg-mainHero h-screen w-screen'>
      <div className='flex pt-5'>
        <DashboardSidebar />
        <div className='bg-white w-full rounded-lg h-screen me-5'>
          <p className='text-black'>all routes show here</p>
        </div>
      </div>

    </div>
  )
}

export default Mainlayout