# ChaTinger -Chat Application (Front-end)

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Responsive Design](#responsive-design)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

## Introduction
This is a responsive chat application built using React, where users can chat with their friends. The application features a sidebar, chat window, and user profile modal, all designed to work seamlessly across various screen sizes.

## Features
- **Chat with Friends**: Users can select friends from the sidebar and send messages.
- **Static/Dynamic Messages**: Messages are initially hidden, and replies are shown only after the user sends a message.
- **Sidebar**: Displays a list of friends, responsive to screen size.
- **User Profile Modal**: Slide-in modal with user information including image, name, email, and GitHub icon.
- **Responsive Design**: Sidebar and chat windows are conditionally rendered on mobile devices. Sidebar is fixed at the bottom for smaller screens.
- **Scroll Bar**: Custom scroll bar with title, search bar, and icon button for navigation.
- **Local Storage Support**: Messages and user interactions are stored in the browser's local storage for persistence.

## Technologies Used
- **Frontend**: React.js, Tailwind CSS
- **Routing**: React Router
- **Icons**: React Icons
- **State Management**: React Context (ThemeContext)
- **Local Storage**: Used for persisting chat data

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/username/ChaTinger-ChatApp.git
    ```
2. Navigate into the project directory:
    ```bash
    cd chat-app
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```

## Usage
1. On launching the application, you’ll see a sidebar listing all friends.
2. Clicking on a friend will open the chat window where you can view and send messages.
3. The user profile can be viewed by clicking the profile icon in the sidebar, triggering a modal with your profile details.
4. The chat and sidebar will render side by side on larger devices, while on smaller screens, only one component (sidebar or chat) will be shown at a time.

## Project Structure
```bash
src/
│
├── components/
│   ├── Sidebar.jsx        # Sidebar displaying friends
│   ├── ChatWindow.jsx     # Chat window to display messages
│   ├── ProfileModal.jsx   # Slide-in modal for user profile
│   ├── SearchBar.jsx      # Custom scrollbar with search functionality
│   ├── MessageInput.jsx   # Input field for sending messages
│
├── context/
│   ├── ThemeContext.js    # Context for theme toggling
│
├── assets/                # Static assets like images
│
├── App.js                 # Main entry point
├── index.js               # React DOM render
└── styles.css             # Tailwind CSS configuration and global styles
```

## Responsive Design
- On larger screens, the **sidebar** and **chat window** are displayed side by side.
- On smaller devices, the **sidebar** is fixed at the bottom and can be toggled.
- The **chatbox** and **sidebar** are conditionally rendered based on the screen size and user interaction.
  
## Future Improvements
- **Dynamic Friend List**: Fetch the friend list and chat messages from a backend API.
- **Real-time Messaging**: Implement WebSocket or Firebase for real-time messaging functionality.
- **Group Chats**: Support for creating group chats and adding multiple users.
- **Notifications**: Push notifications for new messages.

## Contributing
Feel free to submit pull requests or issues for any bugs or improvements.

## License
This project is licensed under the MIT License.