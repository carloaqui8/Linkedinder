import React, { useState } from 'react';

function ChatInput() {
    const [text, setText] = useState("");

    return (
        <div className="chat-input">
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
            <button className="secondary-button">Submit</button>
        </div>
    );
}

export default ChatInput;