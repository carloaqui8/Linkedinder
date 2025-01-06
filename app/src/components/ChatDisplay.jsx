import React, { useState, useEffect } from 'react';
import Chat from './Chat';
import ChatInput from './ChatInput';
import axios from 'axios';

function ChatDisplay({ user, clickedUser }) {
    const userId = user?._id;
    const clickedUserId = clickedUser?._id;
    const [fromMessages, setFromMessages] = useState(null);
    const [toMessages, setToMessages] = useState(null);

    const getFromMessages = async () => {
        try {
            const response = await axios.get('http://localhost:8000/messages', {
                params: { userId: userId, otherUserId: clickedUserId }
            });

            setFromMessages(response.data);
        }
        catch (e) {
            console.log(e);
        }
    }

    const getToMessages = async () => {
        try {
            const response = await axios.get('http://localhost:8000/messages', {
                params: { userId: clickedUserId, otherUserId: userId }
            });

            setToMessages(response.data);
        }
        catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getFromMessages(userId, clickedUserId);
        getToMessages(clickedUserId, userId);
    }, []);

    const formattedMessages = [];
    fromMessages?.forEach(message => {
        const formattedMessage = {};
        formattedMessage['name'] = user?.firstName;
        formattedMessage['img'] = user?.imgUrl;
        formattedMessage['message'] = message?.message;
        formattedMessage['timestamp'] = message?.timestamp;

        formattedMessages.push(formattedMessage);
    });

    toMessages?.forEach(message => {
        const formattedMessage = {};
        formattedMessage['name'] = clickedUser?.firstName;
        formattedMessage['img'] = clickedUser?.imgUrl;
        formattedMessage['message'] = message?.message;
        formattedMessage['timestamp'] = message?.timestamp;

        formattedMessages.push(formattedMessage);
    });

    const orderedMessages = formattedMessages?.sort((a, b) => a.timestamp.localeCompare(b.timestamp));

    return (
        <div className="chat-display">
            <Chat orderedMessages={orderedMessages} />
            <ChatInput user={user}
                clickedUser={clickedUser}
                getFromMessages={getFromMessages}
                getToMessages={getToMessages} />
        </div>
    );
}

export default ChatDisplay;