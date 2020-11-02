import React, { useState, useEffect } from 'react';

import axios from 'axios';

import DocItem from './../DocItem/DocItem';

function Copiwriters() {
    const [doc, setDoc] = useState([]);

    useEffect(() => {
        try {
            const getDoc = async () => {
                const url = "https://crypto-trading-2020-10.herokuapp.com/text";
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
            <h1>Copiwriters</h1>
            {doc.map((item, index) => (
                <DocItem key={index} item={item} />
            ))}
        </div>
    )
}

export default Copiwriters;