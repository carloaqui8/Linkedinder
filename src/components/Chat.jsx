import React from 'react';

function Chat({ orderedMessages }) {
    return (
        <div className="messages-display">
            {orderedMessages.map((message, _index) => (
                <div key={_index}>
                    <div className='chat-message-header'>
                        <div className='img-container'>
                            <img src={message.img} />
                        </div>
                        <p>{message.name}</p>
                    </div>
                    <p>{message.message}</p>
                </div>
            ))}
        </div>
    );
}

export default Chat;