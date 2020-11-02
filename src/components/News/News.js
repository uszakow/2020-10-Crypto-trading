import React, { useState, useEffect } from 'react';

import axios from 'axios';

import NewsItem from './NewsItem/NewsItem';

function News() {
    const [newsArr, setNewsArr] = useState([]);

    useEffect(() => {
        try {
            const getNewsFromServer = async () => {
                const url = "https://crypto-trading-2020-10.herokuapp.com/news";
                const res = await axios.get(url);

                setNewsArr(res.data);
            }
            getNewsFromServer();
        } catch (e) {
            console.log(e);
        }
    }, [])

    return (
        <div className="page-wrap">
            <h1>Our News</h1>
            {newsArr.map((item, index) => (
                <NewsItem key={index} item={item} />
            ))}
        </div>
    )
}

export default News;