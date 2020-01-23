import React, { useState } from 'react';
import { navigate } from 'hookrouter'
import { PageWrapper, LoginWrapper } from './styles';

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
        <PageWrapper>
            <LoginWrapper>
                <input value={username} className="form-control" placeholder="username" onKeyDown={handleKeyDown} onChange={(e) => setUsername(e.target.value)}></input>
                <button className="btn btn-primary" onClick={handleSubmit}>submit</button>
            </LoginWrapper>
        </PageWrapper>
        
    )
}

export default LoginPage;
