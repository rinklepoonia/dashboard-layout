"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import Icons from './common/ui/Icons'
import { DASHBOARD_ICON_DATA_LIST } from '@/app/lib/helper'
import FileSense from './file-sense/FileSense'
import DocLink from './doc-link/DocLink'
import FileTune from './file-tune/FileTune'
import FileStruct from './file-struct/FileStruct'
import ContactList from './contact-list/ContactList'

const DashboardSidebar = () => {
  const [activeComponent, setActiveComponent] = useState('home')

  const renderComponent = () => {
    switch (activeComponent) {
      case 'home':
        return <div className="p-6">Welcome to Dashboard</div>
      case 'file-sense':
        return <FileSense />
      case 'doc-link':
        return <DocLink />
      case 'file-tune':
        return <FileTune />
      case 'file-struct':
        return <FileStruct />
      case 'contact-list':
        return <ContactList />
      default:
        return <div>Welcome to Dashboard</div>
    }
  }

  return (
    <div className="flex w-full">
      <div className="min-h-screen  relative">
        <div className="relative z-10 p-6">
          <Image width={58} height={34} src="/assets/images/png/page-logo.png" alt='logo' className="mb-8" />
          <div className='flex flex-col gap-4.5'>
            {DASHBOARD_ICON_DATA_LIST.map((obj, i) => (   
              <div
                key={i}
                onClick={() => setActiveComponent(obj.path.replace('/', ''))}
                className='flex flex-col items-center rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer'
              >
                <div className='size-11.5 bg-bg-blue-gradient  flex justify-center items-center rounded-lg'>
                  <Icons className='size-[29px] text-white' icon={obj.icon} />
                </div>
                <p className='font-medium text-light-green text-sm'>{obj.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 p-6 bg-red-50 w-full rounded-2xl me-5">
        {renderComponent()}
      </div>
    </div>
  )
}

export default DashboardSidebar