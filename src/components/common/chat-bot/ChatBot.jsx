"use client";
import React from 'react'
import useStore from '@/store/useStore'
import BotNav from './BotNav'

const ChatBot = () => {
    const { isChatbotOpen } = useStore()

    if (!isChatbotOpen) return null

    return (
        <div className="fixed bottom-4 right-4 w-96 bg-black rounded-lg shadow-xl overflow-hidden">
            <BotNav />
            <div className="p-4 h-[500px] overflow-y-auto">
                <div className="space-y-4">
                    <div className="bg-gray-100 p-3 rounded-lg">
                        <p>Hello! How can I help you today?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatBot 