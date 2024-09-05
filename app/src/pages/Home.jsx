import React, { useState } from 'react';
import Nav from '../components/Nav';
import AuthModel from '../components/AuthModel';

function Home() {
    const [showAuthModel, setShowAuthModel] = useState(false);
    
    const authToken = false;

    const handleClick = () => {
        console.log("clicked");
        setShowAuthModel(true);
    }

    return (
        <div className="home-cover">
            <Nav authToken={authToken} showAuthModel={showAuthModel} setShowAuthModel={setShowAuthModel} />
            <div className="home">
                <h1>Swipe Right 😀</h1>
                <button className="main-button" onClick={handleClick}>
                    {authToken ? "Sign Out" : "Create an Account"}
                </button>
            </div>

            {showAuthModel &&
                <AuthModel setShowAuthModel={setShowAuthModel} />
            }
        </div>
    );
}

export default Home;