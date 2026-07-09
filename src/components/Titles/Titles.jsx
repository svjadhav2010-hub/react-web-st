import React from 'react';
import "./Titles.css";


function Titles({subtitle, title})
{

    return (
        <div className='titles'>
            <p>{subtitle}</p>
            <h2>{title}</h2>
        </div>
    );
}

export default Titles;