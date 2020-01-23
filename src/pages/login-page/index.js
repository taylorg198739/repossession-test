import React, { useState } from 'react';
import { navigate } from 'hookrouter'

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const handleSubmit = () => {
        if (username) {
            window.sessionStorage.setItem('username', username);
            navigate('/')
        }
    }

    return (
        <div>
            <input value={username} onChange={(e) => setUsername(e.target.value)}></input>
            <button onClick={handleSubmit}>submit</button>
        </div>
    )
}

export default LoginPage;