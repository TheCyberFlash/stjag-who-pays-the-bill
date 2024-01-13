import React, { useState } from 'react';
import { useNames } from '../context/NamesContext';

const NameInput = () => {

    const { names, addName } = useNames();   
    const [newName, setNewName] = useState('');
    
    const handleAddName = (event) => {
        event.preventDefault();
        addName(newName);
        setNewName('');
    };

    return (
        <div className="name-input-container">
            <form onSubmit={handleAddName}>
                <input
                type="text"
                value={newName}
                onChange={(event) => setNewName(event.target.value)} />
                <button type="submit" onClick={handleAddName}>Add</button>
            </form>
        </div>
    )
}

export default NameInput;