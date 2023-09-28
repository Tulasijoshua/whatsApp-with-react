import React, { useState } from 'react'
import UserOne from './UserOne'
import UserTwo from './UserTwo'
import { UserState } from '../../../../../context/StateContext';

const ChatListItems = () => {
  return (
    <div>
      <UserOne />
      <UserTwo />
    </div>
    
  )
}

export default ChatListItems