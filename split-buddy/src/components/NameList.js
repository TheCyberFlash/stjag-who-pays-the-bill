import React, { useState } from 'react';
import '../index.css';
import { useNames } from '../context/NamesContext';

const NameList = () => {

    const { names, addName } = useNames();   
    const [newName, setNewName] = useState('');
    
    const handleAddName = (event) => {
        event.preventDefault();
        addName(newName);
        setNewName('');
    };

    return (
        <div className="name-list-container">
            <form onSubmit={handleAddName}>
                <label>
                    Add Name:
                    <input 
                        type="text" 
                        value={newName} 
                        onChange={(event) => setNewName(event.target.value)} />
                </label>
                <button type="submit" onClick={handleAddName}>Add</button>
            </form>

            <ul>
                {names.map((name, index) => <li key={index}>{name}</li>)}
            </ul>
        </div>
    )
}

export default NameList;