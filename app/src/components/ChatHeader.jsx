import React from 'react';

function ChatHeader() {
    return (
        <div className="chat-header">
            <div className="profile">
                <div className="img-container">
                    <img src=""></img>
                </div>
                <h3>UserName</h3>
            </div>
            <i className="logout-icon">⤶</i>
        </div>
    );
}

export default ChatHeader;