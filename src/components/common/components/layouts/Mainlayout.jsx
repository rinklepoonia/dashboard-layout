import DashboardSidebar from '@/components/DashboardSidebar'
import React from 'react'

const Mainlayout = () => {
  return (
    <div className='bg-mainHero h-screen w-screen overflow-hidden'>
      <div className='flex pt-5'>
        <DashboardSidebar />
        
      </div>

    </div>
  )
}

export default Mainlayout