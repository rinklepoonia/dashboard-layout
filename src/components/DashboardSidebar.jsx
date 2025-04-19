"use client";
import Image from 'next/image'
import React, { useEffect } from 'react'
import Icons from './common/ui/Icons'
import { DASHBOARD_ICON_DATA_LIST } from '@/app/lib/helper'
import useStore from '@/store/useStore'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DashboardSidebar = () => {
  const { activeComponent, setActiveComponent } = useStore()
  const getBasePath = (pathname) => pathname.split("/")[1];


  const pathName = usePathname()
  return (

    <div className="h-full relative sm:w-20 w-full">
      <div className="relative sm:px-4 sm:w-20 h-full flex sm:flex-col justify-between items-center">
        <div className='flex sm:flex-col items-center max-sm:gap-3 w-full'>
          <Image width={58} height={34} src="/assets/images/png/page-logo.png" alt='logo' className=" sm:mb-8 max-sm:w-[30px] max-sm:h-[20px]" />
          <div className='flex sm:flex-col max-sm:justify-between sm:gap-4.5 gap-3 items-center w-full'>
            {DASHBOARD_ICON_DATA_LIST.map((obj, i) => {
              const isActive = getBasePath(pathName) === getBasePath(obj.path);


              return (

                <Link
                  key={i}
                  href={obj.path}
                  onClick={() => setActiveComponent(obj.path.replace('/', ''))}
                  className={`flex flex-col gap-1.5 items-center  rounded-lg transition-all duration-300 cursor-pointer ${i === DASHBOARD_ICON_DATA_LIST.length - 1 && "sm:hidden block"
                    }
                     `}
                >
                  <div className={`sm:size-11.5 size-6 max-w-[46px] sm:p-3 p-1 w-full  flex justify-center items-center sm:rounded-lg rounded-sm  ${isActive ? 'bg-blue-gradient' : ''}`}>
                    <Icons className={`sm:size-[29px] size-5 sm:min-w-[29px] min-w-5 sm:max-w-[29px] max-w-5 w-full text-white `} fill={isActive ? "white" : "#365E71"}
                      stroke={isActive ? "white" : "#365E71"} icon={obj.icon} />
                  </div>
                  <p className={`font-medium text-[10px] text-[#365E71] fit-content max-sm:hidden`}>{obj.label}</p>
                </Link>
              )
            })}
          </div>
        </div>
        <Link className='max-sm:hidden'
          onClick={() => setActiveComponent('settings')}
          href="/settings/account">
          <div className="flex flex-col group justify-center items-center gap-1 cursor-pointer p-1 lg:p-2 rounded-md ">
            <div
              className={`size-10 lg:size-11 flex justify-center items-center rounded-md ${getBasePath(pathName) === "settings" ? 'bg-blue-gradient' : ''}`}>
              <Icons stroke={getBasePath(pathName) === "settings" ? "white" : "#365E71"}

                className="size-6 md:size-8"
                icon="setting"
              />
            </div>
            <p className="!leading-100 font-medium text-[#365E71]  text-custom-xxs m-0">
              Settings
            </p>
          </div>
        </Link>
      </div>







    </div>



  )
}

export default DashboardSidebar