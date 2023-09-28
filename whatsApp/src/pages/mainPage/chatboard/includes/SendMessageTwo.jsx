import React, { useEffect, useState } from 'react'
import Message from './Message';
import MessageTwo from './MessageTwo';
import { UserState } from '../../../../context/StateContext';

const SendMessageTwo = ({ messages, setMessages }) => {
    const [value, setValue] = useState("");
    const {showSecondTodoList} = UserState();

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
            {showSecondTodoList && (
                <div>
                    <div className='w-[100%] h-[50px] z-10 absolute bottom-[0] bg-grayClr py-10 px-6 flex justify-center items-center'>
                        <div className="text-gray-400 pr-6 text-2xl"><i class="fa-regular fa-face-smile"></i></div>
                        <div className='text-gray-400 pr-6 text-2xl'><i class="fa fa-plus" aria-hidden="true"></i></div>
                        <form onSubmit={handleSendMessage} className=' w-[90%] flex justify-center items-center'>
                            <input value={value} onChange={(e) => setValue(e.target.value)} type='text' className='w-full p-[15px] rounded-lg bg-grayBack text-textClr outline-none' placeholder="Type a message" />
                            <button type="submit" className='text-gray-400 pl-6 text-2xl'><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                        </form>
                    </div>
                    <MessageTwo messages={messages} />
                </div>
            )}
        </div>

        // <div className='bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg'>
        //     <form onSubmit={handleSendMessage} action="" className="px-2 containerWrap flex">
        //         <input value={value} onChange={e => setValue(e.target.value)} className='input w-[80%] focus:outline-none bg-gray-100 rounded-r-none' type="text" />
        //         <button type="submit" className='w-auto bg-gray-500 text-white rounded-r-lg px-5 text-sm'>Send</button>
        //     </form>
        // </div>
    )
}

export default SendMessageTwo