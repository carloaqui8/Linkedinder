import React, { useState } from 'react';
import ChatHeader from './ChatHeader';
import ConnectionsDisplay from './ConnectionsDisplay';
import ChatDisplay from './ChatDisplay';

function ChatContainer({ user }) {
    const [clickedUser, setClickedUser] = useState(null);
    
    return (
        <div className="chat-container">
            <ChatHeader user={user} />

            <div>
                <button className="menu" onClick={() => setClickedUser(null)}>Connections</button>
                <button className="menu" disabled={!clickedUser}>Chat</button>
            </div>

            {!clickedUser && <ConnectionsDisplay conns={user.offers} setClickedUser={setClickedUser} />}

            {clickedUser && <ChatDisplay user={user} clickedUser={clickedUser} />}
        </div>
    );
}

export default ChatContainer;