import React, { useState, useEffect } from 'react';

import axios from 'axios';

import FAQItem from './FAQItem/FAQItem';

function FAQ() {
    const [faqArr, setFaq] = useState([]);

    useEffect(() => {
        try {
            const getFaqArr = async () => {
                // const url = "https://crypto-trading-2020-10.herokuapp.com/faq";
                const url = "http://localhost:3001/faq";
                const res = await axios.get(url);

                setFaq(res.data);
            }
            getFaqArr();
        } catch (e) {
            console.log(e);
        }
    }, [])

    return (
        <div className="page-wrap">
            <h1>Frequently Asked Questions</h1>
            {faqArr.map((item, index) => (
                <FAQItem key={index} item={item} />
            ))}
        </div>
    )
}

export default FAQ;