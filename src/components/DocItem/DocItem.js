import React from 'react';
import './DocItem.scss';

function DocItem({ item }) {
    const arrLi = Object.values(item)[0].split('\n');

    return (
        <>
            <h2 className="docitem-title">{Object.keys(item)[0]}</h2>
            <ol>
                {arrLi.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ol>
        </>
    )
}

export default DocItem;