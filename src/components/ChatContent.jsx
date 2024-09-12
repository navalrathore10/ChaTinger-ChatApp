import React from 'react';
import { MdDelete } from "react-icons/md";

const ChatContent = ({ friend, messages, theme, deleteMessage }) => {
    // Filter messages to show only those related to the selected friend
    const filteredMessages = messages.filter(
        (msg) => msg.friendId === friend.id && (msg.from === friend.name || msg.from === 'You')
    );
    // console.log(filteredMessages);

    return (
        <div className={`h-[80%] max-h-[80%] overflow-y-auto border-black p-5 lg:rounded-2xl shadow-lg 
            ${theme ?
                'bg-dark24 bg-[url(./bg-graphiti-white.png)] bg-center bg-cover shadow-black'
                :
                'bg-white text-primdark bg-[url(./bg-graphiti-black.png)] bg-center bg-cover'
            }
            `}>
            {filteredMessages.length === 0 ?
                (
                    <div className="sayhi text-ma text-5xl w-full h-full flex justify-center items-center">
                        <p className={`text-center ${theme ? 'text-white' : 'text-darkop60'} p-5 backdrop-blur-md border border-gray-300 shadow-xl rounded-2xl`}>
                            Say Hi 👋 <br /> to <br />{friend?.name}
                        </p>
                    </div>
                )
                :
                (
                    filteredMessages.map((msg) => (
                        <div key={msg.id} className={`mb-2 w-full flex flex-col relative ${msg.from === 'You' ? 'items-end' : 'items-start'}`}>
                            <p className={`group max-w-[60%] min-w-[70px] p-2 pb-5 shadow-md relative z-10
                                ${msg.from === 'You' ? ' bg-blue-400 text-white rounded-[15px_15px_0px_15px]' : 'bg-yellow-200 text-white rounded-[15px_15px_15px_0px]'}`}
                                style={{
                                    backgroundColor: msg.from === 'You' ? '' : friend.colorTheme || 'bg-yellow-200' // Use friend colorTheme
                                }}>
                                {msg.content}
                                <span className="text-xs absolute bottom-1 right-3">{msg.timestamp}</span>
                                <button
                                    onClick={() => deleteMessage(msg.id)}
                                    className={`absolute hidden group-hover:block ${msg.from ==='You'?'left-[-35px]':'right-[-27px]'}  rounded-xl text-xl py-2 p-1  ml-2
                                     text-red-500 top-[10px]
                                     ${theme ? 'bg-dark17' : 'bg-white'}`}
                                >
                                    <MdDelete />
                                </button>
                            </p>
                            <div className={`blur-2xl absolute z-2 w-[100px] h-[50px] top-0 ${msg.from === 'You' ? 'right-0' : 'left-0'} ${theme ? 'bg-darkop80' : 'bg-white'}`}></div>

                        </div>
                    ))
                )}
        </div>
    );
};

export default ChatContent;
