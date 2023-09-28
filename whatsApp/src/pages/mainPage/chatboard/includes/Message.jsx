import React from 'react'
import Profile from "../../../../assets/profile/profile.jpg"
import { UserState } from '../../../../context/StateContext'

const Message = ({ messages }) => {
    const {showFirstTodoList, setShowFirstTodoList, showSecondTodoList, setShowSecondTodoList} = UserState()


    return (
        <div
            style={{ height: "calc(100vh - 110px)" }} 
            className='w-full p-8 overflow-auto'
        >
            {messages.map((message, index) => (
                <div key={index} className={`${showFirstTodoList} ? "chat chat-start" : "chat chat-end `} >
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img src={Profile} />
                        </div>
                    </div>
                    <div className="chat-header">
                        Joshua
                    </div>
                    <div className="max-w-[60%] chat-bubble break-words">{message.text}</div>
                    <div className="chat-footer opacity-50">
                        Delivered
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Message