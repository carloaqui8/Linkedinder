import React, { useState } from 'react';

function AuthModel({ setShowAuthModel, signUp }) {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confPass, setConfPass] = useState(null);
    const [error, setError] = useState(null);

    const handleClick = () => {
        setShowAuthModel(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            if (signUp && (password !== confPass)) {
                setError("Passwords must match");
            }
            console.log('make POST request to db');
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="auth-model">
            <div className="close" onClick={handleClick}>ⓧ</div>
            <h2>{signUp ? "Create Account" : "Log In"}</h2>
            <form onSubmit={handleSubmit}>
                <input type="email"
                    id="email"
                    placeholder="Email"
                    required={true}
                    onChange={(e) => setEmail(e.target.value)} />
                <input type="password"
                    id="password"
                    placeholder="Password"
                    required={true}
                    onChange={(e) => setPassword(e.target.value)} />
                {signUp && <input type="password"
                    id="confPass"
                    placeholder="Confirm Password"
                    required={true}
                    onChange={(e) => setConfPass(e.target.value)} />}
                <input type="submit" className="secondary-button" />
                <p>{error}</p>
            </form>
            <hr />

        </div>
    );
}

export default AuthModel;