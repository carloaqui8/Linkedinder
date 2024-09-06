import React from 'react';
import logo from '../images/logo.png';

function Nav({ authToken, showAuthModel, setShowAuthModel, setSignUp }) {
    const handleClick = () => {
        setShowAuthModel(true);
        setSignUp(false);
    }
    
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