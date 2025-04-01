"use client";
import React from 'react'
import Icons from '../ui/Icons'
import useStore from '@/store/useStore'

const BotNav = () => {
    const { setIsChatbotOpen } = useStore()

    return (
        <div className="flex items-center justify-between p-4 bg-black border-b">
            <h2 className="text-lg font-semibold text-red-100">Chatbot</h2>
            <button className='cursor-pointer'
                onClick={() => setIsChatbotOpen(false)}
            >
                <Icons icon="alertClose" className="w-5 h-5" />
            </button>
        </div>
    )
}

export default BotNav
