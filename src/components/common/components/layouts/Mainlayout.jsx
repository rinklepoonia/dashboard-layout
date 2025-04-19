'use client'
import DashboardSidebar from '@/components/DashboardSidebar'
import Navigation from '@/components/Navigation'
import useStore from '@/store/useStore'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

const Mainlayout = ({ children }) => {
  const [bottomBarHeight, setBottomBarHeight] = useState(0)
  const bottomBarRef = useRef(null)

  const { getImageFromLocalStorage } = useStore()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      getImageFromLocalStorage()
    }
  }, [])

  useLayoutEffect(() => {
    if (bottomBarRef.current) {
      setBottomBarHeight(bottomBarRef.current.scrollHeight)
    }
  }, [])
  useEffect(() => {
    console.log(bottomBarHeight, 'dfrg')
  }, [bottomBarHeight])


  return (
    <div className='bg-mainHero flex flex-col overflow-hidden h-dvh sm:py-5 pt-5 pb-3 sm:pr-5 pr-3 max-sm:pl-3 fixed top-0 right-0 left-0'>
      <div style={{ maxHeight: `calc(100dvh - ${bottomBarHeight + 35}px)` }} className='flex grow max-h-full'>
        <div className='sm:block hidden'>
          <DashboardSidebar />
        </div>
        <div className='bg-white w-full rounded-[20px] sm:px-[30px] px-4 flex flex-col h-full  pb-5'>
          <Navigation />
          <div className='bg-white border border-solid border-black shadow-sky-blue sm:p-5  p-3 sm:mt-12 flex grow w-full h-full overflow-hidden'>
            {children}
          </div>

        </div>

      </div>
      <div ref={bottomBarRef} className='max-sm:block hidden pt-3'>
        <DashboardSidebar />
      </div>

    </div>
  )
}

export default Mainlayout