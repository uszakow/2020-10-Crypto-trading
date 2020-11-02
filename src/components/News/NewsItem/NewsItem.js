import React from 'react';
import './NewsItem.scss';

function NewsItem({ item }) {
    const date = new Date(Object.keys(item)[0]);
    console.log(date)

    return (
        <>
            <h2 className="news-item-title">{date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}</h2>
            <p>{Object.values(item)[0]}</p>
        </>
    )
}

export default NewsItem;