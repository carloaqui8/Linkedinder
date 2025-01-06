import React, { useState } from 'react';
import axios from 'axios';

function ChatInput({ user, clickedUser, getFromMessages, getToMessages }) {
    const [text, setText] = useState('');
    const userId = user?._id;
    const clickedUserId = clickedUser?._id;

    const addMessage = async () => {
        try {
            await axios.post('http://localhost:8000/message', {
                timestamp: new Date().toISOString(),
                fromUserId: userId,
                toUserId: clickedUserId,
                message: text
            })
            getFromMessages()
            getToMessages()
            setText('');
        }
        catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="chat-input">
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
            <button className="secondary-button" onClick={addMessage}>Send</button>
        </div>
    );
}

export default ChatInput;