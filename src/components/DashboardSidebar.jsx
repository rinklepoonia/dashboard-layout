"use client";
import Image from 'next/image'
import React from 'react'
import Icons from './common/ui/Icons'
import { DASHBOARD_ICON_DATA_LIST } from '@/app/lib/helper'
import FileSense from './file-sense/FileSense'
import DocLink from './doc-link/DocLink'
import FileTune from './file-tune/FileTune'
import FileStruct from './file-struct/FileStruct'
import ContactList from './contact-list/ContactList'
import useStore from '@/store/useStore'

const DashboardSidebar = () => {
  const { activeComponent, setActiveComponent } = useStore()

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
        return <div className="p-6">Welcome to Dashboard</div>
    }
  }

  return (
    <div className="flex">
      <div className="min-h-screen bg-mainHero relative w-64">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 p-6">
          <Image width={58} height={34} src="/assets/images/png/page-logo.png" alt='logo' className="mb-8" />
          <div className='flex flex-col gap-4.5'>
            {DASHBOARD_ICON_DATA_LIST.map((obj, i) => (
              <div
                key={i}
                onClick={() => setActiveComponent(obj.path)}
                className={`flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer
                  ${activeComponent === obj.path ? 'bg-white/20' : ''}`}
              >
                <div className='size-11.5 bg-white/20 backdrop-blur-sm flex justify-center items-center rounded-lg'>
                  <Icons className='size-[29px] text-white' icon={obj.icon} />
                </div>
                <p className='font-medium text-white'>{obj.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 p-6">
        {renderComponent()}
      </div>
    </div>
  )
}

export default DashboardSidebar