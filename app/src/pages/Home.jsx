import React, { useState } from 'react';
import Nav from '../components/Nav';
import AuthModel from '../components/AuthModel';
import { useCookies } from 'react-cookie';

function Home() {
    const [showAuthModel, setShowAuthModel] = useState(false);
    const [signUp, setSignUp] = useState(true);
    const [cookies, setCookie, removeCookie] = useCookies(['user']);

    const authToken = cookies.AuthToken;

    const handleClick = () => {
        if (authToken) {
            removeCookie('id', cookies.id)
            removeCookie('AuthToken', cookies.AuthToken)
            window.location.reload();
        }

        setShowAuthModel(true);
        setSignUp(true);
    }

    return (
        <div className="home-cover">
            <Nav authToken={authToken}
                showAuthModel={showAuthModel}
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