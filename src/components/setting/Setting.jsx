import React from 'react'
import SideBar from './sidebar/SideBar'
import MainScreens from './main-screens/MainScreens'

const Setting = () => {
  return (
    <div className='flex gap-x-3 py-5 pe-5 h-full'>
      <SideBar />
      <MainScreens />
    </div>
  )
}

export default Setting