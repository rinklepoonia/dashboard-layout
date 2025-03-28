import Image from 'next/image'
import React from 'react'
import Icons from './common/ui/Icons'
import { DASHBOARD_ICON_DATA_LIST } from '@/app/lib/helper'

const DashboardSidebar = () => {
  return (
    <div>
      <Image width={58} height={34} src="/assets/images/png/page-logo.png" alt='logo' />
      <div className='border border-solid border-[#0000001A] w-[60px] mt-4 mb-6'></div>
      <div className='flex flex-col gap-4.5'>
        {DASHBOARD_ICON_DATA_LIST.map((obj, i) => (
          <div key={i}>
            <div className='size-11.5 bg-blue-gradient rounded-sm flex justify-center items-center mx-auto'>
              <Icons className='size-[29px]' icon={obj.icon} />
            </div>
            <p className='font-medium text-light-green text-custom-xsm mt-1.5 text-center'>{obj.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashboardSidebar