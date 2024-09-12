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

    const handleSubmit = () => {
        if (newMessage.trim() !== '') {
            handleSendMessage(newMessage); // Send the message
            setNewMessage(''); // Clear the input field after submission
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(); // Call handleSubmit when Enter key is pressed
        }
    };

    return (
        <div className={`flex items-center w-full h-[10%] px-4 py-2 gap-3 lg:rounded-2xl shadow-lg
            ${theme ? 'bg-dark24 shadow-black' : 'bg-white text-primdark'}`}>
            <button
                onClick={() => { }}
                className="px-4 py-3 text-white bg-prim rounded-xl hover:bg-primdark"
            >
                <BsEmojiHeartEyesFill />
            </button>
            <input
                type="text"
                value={newMessage} // Bind input value to newMessage state
                onChange={handleInputChange}
                onKeyDown={handleKeyDown} // Trigger handleSubmit on Enter key press
                placeholder="Type a message..."
                className={`w-full px-4 py-2 border rounded-xl
                ${theme ? 'bg-lightop10 focus:ring-primdark border-transparent text-lighte3' : 'bg-gray-100 focus:ring-white text-dark24 border-gray-300'}
                 shadow-sm focus:outline-none focus:ring-2 `}
            />
            <button
                onClick={handleSubmit} // Call handleSubmit on button click
                className="px-4 py-3 text-white bg-prim rounded-xl hover:bg-primdark"
            >
                <RiSendPlaneFill />
            </button>
        </div>
    );
};

export default ChatInput;
