// ChatInput.jsx
import React, { useState } from 'react';
import { RiSendPlaneFill } from "react-icons/ri";
import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { useTheme } from '../context/ThemeContext';

const ChatInput = ({ handleSendMessage }) => {
    const { theme } = useTheme();
    const [newMessage, setNewMessage] = useState('');

    const handleInputChange = (e) => {
        setNewMessage(e.target.value);
    };


    // setNewMessage('');   

    return (
        <div className={`flex items-center w-full h-[10%] px-4 py-2 gap-3 lg:rounded-2xl shadow-lg
            ${theme ? 'bg-dark24 shadow-black' : 'bg-white text-primdark'}`}>
            <button
                onClick={() => { }}
                className=" px-4 py-3 text-white bg-prim rounded-xl hover:bg-primdark"
            >
                <BsEmojiHeartEyesFill />
            </button>
            <input
                type="text"
                // value={newMessage}
                onChange={handleInputChange}
                placeholder="Type a message..."
                className={`w-full px-4 py-2 border rounded-xl
                ${theme ? 'bg-lightop10 focus:ring-primdark border-transparent text-lighte3' : 'bg-gray-100 focus:ring-white text-dark24 border-gray-300'}
                 shadow-sm focus:outline-none focus:ring-2 `}
            />
            <button
                onClick={() => handleSendMessage(newMessage)}
                className=" px-4 py-3 text-white bg-prim rounded-xl hover:bg-primdark"
            >
                <RiSendPlaneFill />
            </button>
        </div>
    );
};

export default ChatInput;
