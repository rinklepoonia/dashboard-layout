'use client'
import { SETTING_DATA_LIST } from '@/app/lib/helper'
import Icons from '@/components/common/ui/Icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const SideBar = () => {
  const pathname = usePathname()
  return (
    <div className=''>
      <div className='flex flex-col gap-2 border-r border-solid border-black h-full items-center'>
        {SETTING_DATA_LIST.map((obj, i) => {
          const isActive = pathname === `/settings/${obj.url}`
          return (
            < Link href={`/settings/${obj.url}`} key={i} className={`flex items-center me-2 gap-2 py-2.5 ps-2 max-sm:pe-2 max-w-[192px]  sm:w-[192px]  w-fit ${isActive && 'bg-setting-gradient'}`}>
              <Icons icon={obj.icon} />
              <p className='font-normal text-sm leading-[164%] text-black/80 sm:block hidden'>{obj.label}</p>
            </Link>
          )
        })
        }
      </div >
    </div>
  )
}

export default SideBar