"use client";
import React from 'react'
import useStore from '@/store/useStore'
import ChatBot from '../common/chat-bot/ChatBot';

const FileSense = () => {
  const { setIsChatbotOpen } = useStore()

  return (
    <div>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">FileSense</h1>
        <button
          onClick={() => setIsChatbotOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Open Chatbot
        </button>
        <ChatBot />

      </div>
      <input type='file' />
    </div>
  )
}

export default FileSense