import React, { useEffect } from 'react'
import Navbar from './includes/Navbar';
import SendMessage from './includes/SendMessage';
import Chat from './Chat';
// import Message from './includes/Message';

const ChatMessage = () => {
  
    const chatItms = [
        {
          key: 1,
          image:
            "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
          type: "",
          msg: "Hi Tim, How are you?",
        },
        {
          key: 2,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
          type: "other",
          msg: "I am fine.",
        },
        {
          key: 3,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
          type: "other",
          msg: "What about you?",
        },
        {
          key: 4,
          image:
            "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
          type: "",
          msg: "Awesome these days.",
        },
        {
          key: 5,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
          type: "other",
          msg: "Finally. What's the plan?",
        },
        {
          key: 6,
          image:
            "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
          type: "",
          msg: "what plan mate?",
        },
        {
          key: 7,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
          type: "other",
          msg: "I'm taliking about the tutorial",
        },
      ];
  return (
    <div className="w-full grow-1 h-full relative">
        <Navbar />
        {/* <Chat /> */}
        {/* <Message /> */}
        <SendMessage />
    </div>
  )
}

export default ChatMessage