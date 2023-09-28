import React from 'react'
import Navbar from './includes/Navbar'
import ChatListItems from './includes/ChatListItems'
import { UserAuth } from '../../../../context/AuthContext'


const ChatList = () => {
  const {currentUser, logout} = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch(err) {
      console.log(err);
    }
  }
  return (
    <div className="min-h-full w-[43%] border-r border-r-gray-700 overflow-auto">
        <Navbar />

        <div className="w-[95%] mx-auto relative mb-2 flex justify-center items-center">
            <input className="w-full mr-[1rem]  bg-grayClr py-[5px] pl-14 text-md rounded-md text-iconClr" type="search" placeholder='Search or start new chat' />
            <div className="absolute top-[10px] left-[15px] text-xs text-textClr font-thin">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="text-xs text-iconClr">
                <i class="fa fa-filter"></i>
            </div>
        </div>

        <ChatListItems />
        <div className="absolute bottom-8 left-4 border-2 border-grayBack p-2 rounded hover:bg-grayClr">
          {currentUser ? <button onClick={handleLogout} 
                                className="text-textClr font-medium hover:text-iconClr">
                                  Logout
                                  </button>
                      : ""}
        </div>
    </div>
  )
}

export default ChatList