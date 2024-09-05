import React from 'react';
import logo from '../images/UppercaseGamma.png';

function Nav() {
    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={logo} />
            </div>
            {!authToken && <button className="nav-button">Log In</button>}
        </nav>
    );
}

export default Nav;