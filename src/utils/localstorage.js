// src/utils/localStorage.js
export const saveMessagesToLocal = (messages) => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  };
  
  export const loadMessagesFromLocal = () => {
    const messages = localStorage.getItem('chatMessages');
    return messages ? JSON.parse(messages) : [];
  };
  
  export const clearMessagesFromLocal = () => {
    localStorage.removeItem('chatMessages');
  };
  