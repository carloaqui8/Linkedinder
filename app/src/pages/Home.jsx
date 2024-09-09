import React, { useState } from 'react';
import Nav from '../components/Nav';
import AuthModel from '../components/AuthModel';

function Home() {
    const [showAuthModel, setShowAuthModel] = useState(false);
    const [signUp, setSignUp] = useState(true);

    const authToken = false;

    const handleClick = () => {
        setShowAuthModel(true);
        setSignUp(true);
    }

    return (
        <div className="home-cover">
            <Nav showAuthModel={showAuthModel}
                setShowAuthModel={setShowAuthModel}
                setSignUp={setSignUp} />
            <div className="home">
                <h1 className="title">Swipe Right 😀</h1>
                <button className="main-button" onClick={handleClick} disabled={showAuthModel}>
                    {authToken ? "Sign Out" : "Create an Account"}
                </button>
            </div>

            {showAuthModel &&
                <AuthModel setShowAuthModel={setShowAuthModel}
                    signUp={signUp} />
            }
        </div>
    );
}

export default Home;