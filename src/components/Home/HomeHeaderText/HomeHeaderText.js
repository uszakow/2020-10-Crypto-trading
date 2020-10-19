import React, { useState } from 'react';
import './HomeHeaderText.scss';

import axios from 'axios';

function HomeHeaderText() {
    const [email, setEmail] = useState('');

    const handleEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    }
    const sendEmail = async (e) => {
        e.preventDefault();
        const date = new Date();
        const qs = require('qs');
        try {
            await axios.post('http://localhost:3001/emails', qs.stringify({ [date]: email }));
            setEmail('');
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="home-headertext-wrap">
            <h1 className="home-header-title">The first fully-automatic social crypto trading platform with real crypto currency</h1>
            <span className="home-header-label">Subscribe and get the lastest information</span>
            <form className="home-header-form" onSubmit={(e) => sendEmail(e)}>
                <input type="text" placeholder="Enter your email" value={email} onChange={(e) => handleEmail(e)} />
                <button type="submit">Subscribe</button>
            </form>
        </div>
    )
}

export default HomeHeaderText;