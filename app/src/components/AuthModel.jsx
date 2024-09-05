import React from 'react';

function AuthModel({ setShowAuthModel }) {
    const handleClick = () => {
        setShowAuthModel(false);
    }

    return (
        <div className="auth-model">
            <div onClick={handleClick}>X</div>
            AUTH MODEL
        </div>
    );
}

export default AuthModel;