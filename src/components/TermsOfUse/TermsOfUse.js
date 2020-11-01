import React, { useState, useEffect } from 'react';

import axios from 'axios';

import DocItem from './../DocItem/DocItem';

function TermsOfUse() {
    const [doc, setDoc] = useState([]);

    useEffect(() => {
        try {
            const getDoc = async () => {
                const url = "http://localhost:3001/text";
                const res = await axios.get(url);

                setDoc(res.data);
            }
            getDoc();
        } catch (e) {
            console.log(e);
        }
    }, [])

    return (
        <div className="page-wrap">
            <h1>Terms of Use</h1>
            {doc.map((item, index) => (
                <DocItem key={index} item={item} />
            ))}
        </div>
    )
}

export default TermsOfUse;