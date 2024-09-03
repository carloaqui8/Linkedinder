import React from 'react';
import Nav from '../components/Nav';

function Home() {
    const authToken = true;

    const handleClick = () => {
        console.log("clicked");
    }





    return (
        <>
            <Nav />
            <div className="home">
                <h1>Swipe Right 😀</h1>
                <button className="main-button" onClick={handleClick}>
                    {authToken ? "Sign Out" : "Create an Account"}
                </button>
            </div>
        </>
    );
}

export default Home;