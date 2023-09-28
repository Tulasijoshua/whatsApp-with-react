import React from 'react'
import { UserState } from '../../../../context/StateContext'
// import Userimg from "./images/user_two.jpg"

const MessageTwo = ({messages}) => {
    const {showFirstTodoList, setShowFirstTodoList, showSecondTodoList, setShowSecondTodoList} = UserState()

  return (
    <div 
        style={{ height: "calc(100vh - 110px)" }} 
        className='w-full p-8 overflow-auto'
            >
            {messages.map((message, index) => (
                <div key={index} className={`${showSecondTodoList} ? "w-[60%] chat chat-end chat-end" : "chat chat-start `} >
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img src="" />
                        </div>
                    </div>
                    <div className="chat-header">
                        Joshua
                    </div>
                    <div className="chat-bubble break-words">{message.text}</div>
                    <div className="chat-footer opacity-50">
                        Delivered
                    </div>
                </div>
            ))}
        </div>
  )
}

export default MessageTwo