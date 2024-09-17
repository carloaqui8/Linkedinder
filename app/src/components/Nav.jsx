import React from 'react';
import logo from '/images/logo.png';

function Nav({ showAuthModel, setShowAuthModel, setSignUp }) {
    const handleClick = () => {
        setShowAuthModel(true);
        setSignUp(false);
    }

    const authToken = false;

    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={logo} />
            </div>

            {!authToken && <button className="nav-button" onClick={handleClick} disabled={showAuthModel}>Log In</button>}
        </nav>
    );
}

export default Nav;