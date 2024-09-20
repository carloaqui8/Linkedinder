import React from 'react';
import Chat from './Chat';
import ChatInput from './ChatInput';

function ChatDisplay() {
    return (
        <div className="chat-display">
            <Chat />
            <ChatInput />
        </div>
    );
}

export default ChatDisplay;