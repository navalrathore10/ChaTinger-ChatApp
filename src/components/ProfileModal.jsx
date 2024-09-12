import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';


const ProfileModal = ({ showProfile, handleProfileClick }) => {

    const { theme } = useTheme();
    return (
        <div className={`fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
             lg:absolute lg:top-[50%] lg:left-[50%] lg:translate-x-[48px] h-[300px] shadow-xl rounded-2xl
             transform transition-transform duration-500
            ${showProfile ? 'lg:translate-x-0 w-[0px] hidden z-0' : 'flex z-20 w-[300px] lg:translate-x-full'}
            ${theme ? 'bg-lighte3' : 'bg-dark24'}`}>
            <div className="p-3 flex gap-3 pt-5 items-start">
                <img src="./profilepic.jpg" alt="Your Name" className="w-[100px] h-[100px] rounded-full mb-4" />
                <div className="info flex pt-9 flex-col gap-2">
                    <h2 className={`text-2xl font-semibold mb-2 ${theme ? 'text-dark24' : 'text-lighte3'}`}>Naval Rathore</h2>
                    <p className={`text-sm mb-4 ${theme ? 'text-dark24' : 'text-gray-400'}`}>navalrathore10 <br />@gmail.com</p>
                    <p className={`text-sm mb-4 ${theme ? 'text-dark24' : 'text-gray-400'}`}>+91 6230031442</p>
                    <a href="https://github.com/navalrathore10"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-2xl flex justify-center items-center w-[35px] h-[35px] rounded-lg 
                        ${theme ? 'bg-prim text-lighte3 hover:bg-dark24' : 'text-dark24 bg-lighte3 hover:bg-prim hover:text-black'} `}>
                        <FaGithub />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProfileModal;
