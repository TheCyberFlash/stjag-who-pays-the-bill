import React from 'react';
import { useNames } from '../context/NamesContext';

const NameList = () => {
    const { names } = useNames();    

    return (
        <div id="name-list" className="name-list-container">
            <ul className="name-list">
                {names.map((name, index) => <li key={index}>{name}</li>)}
            </ul>
        </div>
    )
}

export default NameList;