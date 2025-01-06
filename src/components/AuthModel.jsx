import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function AuthModel({ setShowAuthModel, signUp }) {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confPass, setConfPass] = useState(null);
    const [error, setError] = useState(null);
    const [cookies, setCookie, removeCookie] = useCookies('user');

    const navigate = useNavigate();

    const handleClick = () => {
        setShowAuthModel(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (signUp && (password !== confPass)) {
                setError("Passwords must match");
                return;
            }
            const response = await axios.post(`http://localhost:8000/${signUp ? 'signup' : 'login'}`, { email, password });
            setCookie('AuthToken', response.data.token)
            setCookie('id', response.data.id)

            const success = response.status === 201;

            if (success && signUp) {
                navigate('/onboarding');
            }
            else {
                navigate('/dashboard');
            }

            window.location.reload();
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
                    onChange={(e) => setConfPass(e.target.value)} />
                }
                <input type="submit" className="secondary-button" />
                <p>{error}</p>
            </form>
            <hr />

        </div>
    );
}

export default AuthModel;