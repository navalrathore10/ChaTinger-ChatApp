import React from 'react';
import { useTheme } from './context/ThemeContext';
import Sidebar from './components/Sidebar';
import ChatApp from './components/ChatApp';

const ThemePasser = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <div className={`w-full h-screen lg:p-7 flex justify-between items-center gap-2
            ${theme ? 'bg-dark14' : 'bg-lighte3'}`}>
                <Sidebar theme={theme} toggleTheme={toggleTheme} />
                <ChatApp />
            </div>
        </>
    );
};

export default ThemePasser;
