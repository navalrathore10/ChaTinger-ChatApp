import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import TopChatBar from './TopChatBar';
import ChatContent from './ChatContent';
import ChatInput from './ChatInput';
import { v4 as uuidv4 } from 'uuid';

const ChatBox = ({ friend, goBack }) => {
    const [messages, setMessages] = useState([]); // Initially empty
    const { theme } = useTheme();
    const active = friend && friend.active ? true : false;


    useEffect(() => {
        const storedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
        setMessages(storedMessages);
    }, [friend]);



    // Handle sending of a message
    const handleSendMessage = (newMessage) => {
        if (newMessage.trim() === '') return; // Avoid sending empty messages

        const message = {
            id: uuidv4(),
            content: newMessage,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
            from: 'You',
            friendId: friend.id // Associate the message with the current friend
        };

        // Show only the user's message first
        setMessages(prevMessages => [...prevMessages, message]);

        // Delay the friend's response to simulate real-time reply
        setTimeout(() => {

            // This is a Testing Code  / Ignore this.
            // console.log(friend.id);

            // Corrected way to generate a random message
            const randomIndex = Math.floor(Math.random() * friend.messages.length);
            const reply = friend.messages[randomIndex].content;

            const responseMessage = {
                id: uuidv4(),
                content: reply || 'This is a premade text',
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
                from: friend.name, // Show it as coming from the friend
                friendId: friend.id // Associate the reply with the current friend
            };

            setMessages(prevMessages => [...prevMessages, responseMessage]);

            // Store the conversation in local storage
            localStorage.setItem('chatMessages', JSON.stringify([...messages, message, responseMessage]));

        }, 1000);
        // 1-second delay for the friend’s response
    };


    // Handle message deletion
    const deleteMessage = (messageId) => {
        const updatedMessages = messages.filter(msg => msg.id !== messageId);
        setMessages(updatedMessages);
        localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));
    };


    if (!friend) {
        return (
            <div className="w-full p-4 h-full overflow-hidden">
                <img src="./OpenChat.png" alt=""  width={'600px'} height={'600px'} className='mx-auto'/>
            </div>
        );
    }

return (
    <div className="chatbox h-screen md:h-[calc(100vh-96px)] lg:h-[calc(100vh-56px)] relative z-20 md:z-0 lg:z-20 w-full flex flex-col justify-between lg:gap-2 border-black">
        <TopChatBar friend={friend} theme={theme} active={true} goBack={goBack} />
        <ChatContent friend={friend} messages={messages} theme={theme} deleteMessage={deleteMessage} />
        <ChatInput handleSendMessage={handleSendMessage} />
    </div>
);
};

export default ChatBox;
