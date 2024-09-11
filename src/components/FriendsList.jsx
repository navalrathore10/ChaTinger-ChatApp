// FriendsList.js
import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaSearch } from 'react-icons/fa'; // Example icon, adjust as needed

const FriendsList = ({ onSelectFriend }) => {
    const [friends, setFriends] = useState([]);
    const { theme } = useTheme();
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('../src/api/friends.json')
            .then(response => response.json())
            .then(data => setFriends(data.friends))
            .catch(error => console.error('Error fetching friends:', error));
    }, []);

    const pinnedFriends = friends.filter(friend => friend.pinned);
    const unpinnedFriends = friends.filter(friend => !friend.pinned);

    const getLastMessage = (messages) => {
        const lastMessage = messages[messages.length - 1];
        return lastMessage ? lastMessage.content : "No messages yet";
    };

    const getLastMessageTime = (messages) => {
        const lastMessage = messages[messages.length - 1];
        return lastMessage ? lastMessage.timestamp : "";
    };

    return (
        <div className="flex flex-col w-full h-[calc(100vh-96px)] lg:h-[calc(100vh-56px)] gap-2 rounded-2xl px-2 pt-2">
            {/* Header with title, search box, and button */}
            <div className={`flex h-[10%] items-center rounded-2xl py-4 px-2 shadow-lg  
                ${theme ? 'bg-dark24 text-lighte3 shadow-black' : 'bg-white text-primdark'}`}>
                <h2 className="text-2xl font-semibold px-5 text-syne">Chats</h2>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search..."
                    className={`w-full px-3 py-2 border rounded-full
                    ${theme ? 'bg-lightop10 focus:ring-primdark border-transparent text-lighte3' : 'bg-gray-100 focus:ring-white text-dark24 border-gray-300'}
                     shadow-sm focus:outline-none focus:ring-2 `}
                />
                <button
                    onClick={() => { }}
                    className={`mx-2 rounded-full p-3 bg-prim text-white ${theme ? 'hover:bg-lighte3 hover:text-prim' : 'hover:bg-primdark'} focus:outline-none`}
                >
                    <FaSearch />
                </button>
            </div>

            {/* Scrollable list */}
            <div className={`outer text-inter h-[90%] h-[calc((100vh-56px)-10%)] overflow-y-auto scrollbar-hide rounded-2xl shadow-lg
            ${theme ? 'bg-dark24 text-lighte3 shadow-black' : 'bg-white text-primdark'}`}>
                <div className={`rounded-2xl py-4 px-2 ${theme ? 'bg-dark24 text-lighte3 shadow-black' : 'bg-white text-primdark'}`}>
                    {pinnedFriends.length > 0 && (
                        <>
                            <h3 className="font-semibold text-xs px-3">PINNED</h3>
                            <ul>
                                {pinnedFriends.filter(friend => friend.name.toLowerCase().includes(searchTerm.toLowerCase())).map(friend => (
                                    <li
                                        key={friend.id}
                                        onClick={() => onSelectFriend(friend)}
                                        className={`cursor-pointer p-3 ${theme ? 'hover:bg-lightop10' : 'hover:bg-gray-200'}  rounded-md flex items-center gap-3`}
                                    >
                                        <img src={friend.image} alt={friend.name} className="w-10 h-10 rounded-full" />
                                        <div className="flex-grow">
                                            <p className="font-bold">{friend.name}</p>
                                            <p className="text-sm text-gray-500">{getLastMessage(friend.messages)}</p>
                                        </div>
                                        <span className="text-sm text-gray-400">{getLastMessageTime(friend.messages)}</span>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}

                    {unpinnedFriends.length > 0 && (
                        <>
                            <h3 className="font-semibold text-xs px-3">ALL</h3>
                            <ul>
                                {unpinnedFriends.filter(friend => friend.name.toLowerCase().includes(searchTerm.toLowerCase())).map(friend => (
                                    <li
                                        key={friend.id}
                                        onClick={() => onSelectFriend(friend)}
                                        className={`cursor-pointer p-3 ${theme ? 'hover:bg-lightop10' : 'hover:bg-gray-400'}  rounded-md flex items-center gap-3`}
                                    >
                                        <img src={friend.image} alt={friend.name} className="w-10 h-10 rounded-full" />
                                        <div className="flex-grow">
                                            <p className="font-bold">{friend.name}</p>
                                            <p className="text-sm text-gray-500">{getLastMessage(friend.messages)}</p>
                                        </div>
                                        <span className="text-sm text-gray-400">{getLastMessageTime(friend.messages)}</span>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FriendsList;
