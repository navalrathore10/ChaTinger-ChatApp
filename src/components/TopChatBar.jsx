import React, { useState } from 'react';
import { HiDotsVertical, HiArrowLeft } from "react-icons/hi";

const TopChatBar = ({ friend, theme, active, goBack }) => {
    // State to manage popup visibility
    const [showImagePopup, setShowImagePopup] = useState(false);

    // Function to toggle image popup
    const toggleImagePopup = () => {
        setShowImagePopup(prevState => !prevState);
    };

    return (
        <div className={`flex h-[10%] justify-between items-center lg:rounded-2xl py-4 px-5 shadow-lg text-inter
            ${theme ? 'bg-dark24 text-lighte3 shadow-black' : 'bg-white text-primdark'}`}>
            <div className="left flex items-center">
                {/* Go back button */}
                <button onClick={goBack} className="text-xl mr-4">
                    <HiArrowLeft />
                </button>
                <div className="image relative cursor-pointer" onClick={toggleImagePopup}>
                    <div className={`absolute right-0 bottom-0 w-[10px] h-[10px] border-[2px] rounded-full 
                        ${friend.active ? 'bg-green-600' : 'bg-red-500'} ${theme ? 'border-primdark' : 'border-white'}`}></div>
                    <img src={friend.image} alt={friend.name} className="w-10 h-10 rounded-full" />
                </div>
                <div className="text">
                    <h2 className="text-md lg:text-lg font-semibold px-5">{friend.name}</h2>
                    <p className='text-xs px-5 text-gray-500'>{friend.active  ? 'Online' : 'Offline'}</p>
                </div>
            </div>
            <div className="right flex">
                <button
                    onClick={() => { }}
                    className={`text-xs rounded-full px-5 h-[35px] font-bold bg-prim text-white ${theme?'hover:bg-white hover:text-primdark':'hover:bg-primdark'} focus:outline-none`}
                >Profile
                </button>
                <button onClick={() => { }}
                    className='h-[35px] px-5'>
                    <HiDotsVertical />
                </button>
            </div>

            {/* Image Popup */}
            {showImagePopup && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50" onClick={toggleImagePopup}>
                    <img
                        src={friend.image}
                        alt={friend.name}
                        className="w-[300px] h-[300px] rounded-full object-cover"
                    />
                </div>
            )}
        </div>
    );
};

export default TopChatBar;
