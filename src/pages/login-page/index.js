import React, { useState } from 'react';
import { navigate } from 'hookrouter'

const LoginPage = () => {
    const [username, setUsername] = useState("");

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();    
        }
    }
    const handleSubmit = () => {
        if (username) {
            window.localStorage.setItem('username', username);
            navigate('/')
        }
    }

    return (
        <div className="d-flex justify-content-center mt-5">
            <input value={username} className="input-form" placeholder="username" onKeyDown={handleKeyDown} onChange={(e) => setUsername(e.target.value)}></input>
            <button onClick={handleSubmit}>submit</button>
        </div>
    )
}

export default LoginPage;
