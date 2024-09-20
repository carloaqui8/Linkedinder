import React from 'react';
import ChatHeader from './ChatHeader';
import ConnectionsDisplay from './ConnectionsDisplay';
import ChatDisplay from './ChatDisplay';

function ChatContainer() {
    return (
        <div className="chat-container">
            <ChatHeader />

            <div>
                <button className="menu">Connections</button>
                <button className="menu">Chat</button>
            </div>

            <ConnectionsDisplay />

            <ChatDisplay />
        </div>
    );
}

export default ChatContainer;