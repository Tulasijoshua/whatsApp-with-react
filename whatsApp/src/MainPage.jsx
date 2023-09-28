import React, { useEffect, useState } from 'react'
import Chat from './pages/mainPage/chatboard/Chat'
import ChatList from './pages/mainPage/sideComponents/chatlist/ChatList'
import ChatMessage from './pages/mainPage/chatboard/ChatMessage'
import { UserState } from './context/StateContext'

const MainPage = () => {
  const {active, setActive} = UserState();

  useEffect(() => {
    setActive(true);
  }, [])

  return (
    <div className="w-full h-screen p-[1rem] flex justify-between">
        <ChatList />
        {active ? <Chat /> : <ChatMessage />}
        
        
    </div>
  )
}

export default MainPage