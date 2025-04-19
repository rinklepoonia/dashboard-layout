import React from 'react'
import Notification from './Notification'
import Updates from './States'

const Home = () => {
    return (
        <div className='flex flex-wrap gap-6 w-full overflow-y-auto '>
            <div className='lg:w-[57%] w-full'>
                <Updates />
            </div>
            <div className='lg:w-[40%] w-full'>
                <Notification />
            </div>
        </div>
    )
}

export default Home