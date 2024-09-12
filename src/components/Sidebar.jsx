import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { GiNightSky } from "react-icons/gi";
import { WiDaySunny } from "react-icons/wi";
import { TiHome } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";
import ProfileModal from './ProfileModal'; // Import Profile Modal

function Sidebar({ showHome }) {
    const { theme, toggleTheme } = useTheme();
    const [showProfile, setShowProfile] = useState(true);

    const handleProfileClick = () => {
        setShowProfile(!showProfile);
    };

    return (
        <>
            <div className={`sidebar fixed bottom-0 left-0 w-[100vw] h-[90px] rounded-0
                 lg:relative lg:max-w-[80px] z-10 p-5 lg:h-full lg:rounded-2xl borde
                 flex lg:flex-col justify-between items-center 
            ${theme ? 'bg-lighte3' : 'bg-dark24'}`}>
                <div className="logo">
                    <img src="./logo.png" alt="" className='lg:w-[35px] w-[45px] lg:h-[35px] h-[45px]' />
                </div>
                <div className="middlenav">
                    <ul className='flex lg:flex-col gap-3 text-3xl lg:text-xl'>
                        <li 
                            className={`p-2 rounded-lg ${theme ? 'bg-prim text-white' : 'bg-white text-dark24'}`}
                            onClick={showHome} // Show home when clicked
                        >
                            <TiHome />
                        </li>
                        <li className={`p-2 rounded-lg cursor-pointer ${theme ? 'bg-prim text-white' : 'bg-white text-dark24'}`}
                        onClick={handleProfileClick}><CgProfile /></li>
                        <li className={`p-2 rounded-lg ${theme ? 'bg-prim text-white' : 'bg-white text-dark24'}`}><IoSettings /></li>
                    </ul>
                </div>

                <button onClick={toggleTheme} title='Change Theme' className={`rounded-full text-5xl lg:text-4xl 
                ${theme ? 'text-prim bg-lighte3' : 'text-lighte3 bg-prim'}`}>
                    {theme ? <GiNightSky /> : <WiDaySunny />}
                </button>
                {/* Profile Modal Component */}
                <ProfileModal showProfile={showProfile} handleProfileClick={handleProfileClick} />
            </div>
        </>
    );
}

export default Sidebar;
