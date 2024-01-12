import React, { useState } from 'react';
import '../index.css';

const NameList = () => {
    const [names, setNames] = useState([]);
    const [newName, setNewName] = useState('');

    const addName = (event) => {
        event.preventDefault();
        setNames(names.concat(newName));
        setNewName('');
    };

    return (
        <div className="name-list-container">
            <h2>Who pays the bill?</h2>
            <form>
                <label>
                    Add Name:
                    <input 
                        type="text" 
                        value={newName} 
                        onChange={(event) => setNewName(event.target.value)} />
                </label>
                <button type="submit" onClick={addName}>Add</button>
            </form>

            <ul>
                {names.map((name, index) => <li key={index}>{name}</li>)}
            </ul>
        </div>
    )
}

export default NameList;