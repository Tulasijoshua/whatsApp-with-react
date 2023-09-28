import React from 'react'
import ChatImage from "./images/chat_back.png"

const Chat = () => {
  return (
    <div className="w-full h-full grow-1 text-textWhite"
    style={{  
      backgroundImage: `url(${ChatImage})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }} >
    </div>
  )
}

export default Chat