import React from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

function ChatHeader({ user }) {
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const navigate = useNavigate();

    const logout = () => {
        removeCookie('id', cookies.id);
        removeCookie('AuthToken', cookies.AuthToken);
        // window.location.reload();
        navigate(-1)
    }

    return (
        <div className="chat-header">
            <div className="profile">
                <div className="img-container">
                    <img src={user.imgUrl}></img>
                </div>
                <h3>{user.firstName}</h3>
            </div>
            <i className="logout-icon" onClick={logout}>⤶</i>
        </div>
    );
}

export default ChatHeader;