import React, { useEffect, useState } from 'react'
import Message from './Message';
import MessageTwo from './MessageTwo';
import SendMessageTwo from './SendMessageTwo';
import { StateContext, UserState } from '../../../../context/StateContext';

const SendMessage = () => {
  const [value, setValue] = useState("");
  // const [messages, setMessages] = useState(JSON.parse(localStorage.getItem("messages")) ?? []);
  const [messages, setMessages] = useState([]);
  const {showFirstTodoList, setShowFirstTodoList, showSecondTodoList, setShowSecondTodoList} = UserState()

  // const {userTwo} = StateContext();


  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(messages))
  }, [messages])

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!value) {
      alert('Enter new item.....');
    } else {
      let addDate = new Date();
      const newItem = {
        id: messages.length,
        text: value,
        newDate: addDate.toDateString(),
        completed: false,
      };
      setMessages([...messages, newItem]);
      setValue('');
    }
  }


  return (
    <div>
      {showFirstTodoList && (
        <div >
          <div className='w-[100%] h-[50px] z-10 absolute bottom-[0] bg-grayClr py-10 px-6 flex justify-center items-center'>
            <div className="text-gray-400 pr-6 text-2xl"><i class="fa-regular fa-face-smile"></i></div>
            <div className='text-gray-400 pr-6 text-2xl'><i class="fa fa-plus" aria-hidden="true"></i></div>
            <form onSubmit={handleSendMessage} className='w-[90%] flex justify-center items-center'>
              <input value={value} onChange={(e) => setValue(e.target.value)} type='text' className='w-full p-[15px] rounded-lg bg-grayBack text-textClr outline-none' placeholder="Type a message" />
              <button type="submit" className='text-gray-400 pl-6 text-2xl'><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
            </form>
          </div>
          <Message messages={messages} />
        </div>
      )}
      
        <SendMessageTwo messages={messages} setMessages={setMessages} />

    </div>

    
  )
}

export default SendMessage