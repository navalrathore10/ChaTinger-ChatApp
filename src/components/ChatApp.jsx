import React, { useState } from 'react';
import FriendsList from './FriendsList';
import ChatBox from './ChatBox';
import Sidebar from './Sidebar';
import { useTheme } from '../context/ThemeContext';

const ChatApp = () => {
    const [selectedFriend, setSelectedFriend] = useState(null);
    const [showFriendsList, setShowFriendsList] = useState(true); // For smaller devices
    const [hideSidebar, setHideSidebar] = useState(false); // For smaller devices
    const { theme } = useTheme();

    // When a friend is selected, hide sidebar and FriendsList on smaller devices
    const handleSelectFriend = (friend) => {
        setSelectedFriend(friend);
        setShowFriendsList(false); // Hide FriendsList when a friend is selected on smaller devices
        setHideSidebar(true); // Hide sidebar when in chat view on smaller devices
    };

    // Go back to FriendsList and show Sidebar on smaller devices
    const goBackToHome = () => {
        setShowFriendsList(true); // Show FriendsList when back is clicked
        setSelectedFriend(null); // Unselect friend
        setHideSidebar(false); // Show sidebar again on smaller devices
    };

    return (
        <div className="chatApp flex-grow grid grid-cols-7 gap-2 h-full">

            {/* For Smaller Devices*/}
            {showFriendsList || selectedFriend === null ? (
                <div className={`col-span-7 lg:hidden lg:col-span-5 ${theme ? 'text-primdark' : 'text-white'} border-black h-full max-h-full`}>
                    <FriendsList onSelectFriend={handleSelectFriend} />
                </div>
            ) : (
                <div className={`col-span-7 lg:hidden lg:col-span-5 ${theme ? 'text-primdark' : 'text-white'} border-black h-full max-h-full`}>
                    <ChatBox friend={selectedFriend} goBack={goBackToHome} />
                </div>
            )}

            {/* Conditionally Render Sidebar for Small Screens */}
            {!hideSidebar && (
                <div className={`fixed lg:hidden bottom-0 left-0 w-full h-[80px] ${theme?'bg-lighte3':'bg-dark24'}`}>
                    <Sidebar showHome={goBackToHome} />
                </div>
            )}


            {/* For Larger Devices */}

            <>
                <div className={`hidden lg:block col-span-7 lg:col-span-2 ${theme ? 'text-primdark' : 'text-white'} border-black h-full max-h-full`}>
                    <FriendsList onSelectFriend={handleSelectFriend} />
                </div>
                <div className={`hidden lg:block lg:col-span-5 ${theme ? 'text-primdark' : 'text-white'} border-black h-full max-h-full`}>
                    <ChatBox friend={selectedFriend} goBack={goBackToHome} />
                </div>
            </>

        </div>
    );
};

export default ChatApp;
