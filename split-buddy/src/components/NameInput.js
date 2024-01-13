import React, { useState } from 'react';
import { useNames } from '../context/NamesContext';

const NameInput = () => {

    const { names, addName, resetNames } = useNames();   
    const [newName, setNewName] = useState('');
    
    const handleAddName = (event) => {
        event.preventDefault();
        addName(newName);
        setNewName('');
    };

    const handleResetName = (event) => {
        event.preventDefault();
        resetNames();
        setNewName('');
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleAddName(event);
        } else if (event.key === 'Escape') {
            handleResetName(event);
        }
    }

    return (
        <div className="name-input-container">
            <form onSubmit={handleAddName}>
                <input
                type="text"
                value={newName}
                onChange={(event) => setNewName(event.target.value)}
                onKeyDown={handleKeyDown} />
                <button type="submit" onClick={handleAddName}>Add</button>
                <button type="submit" onClick={handleResetName}>Reset</button>
            </form>
        </div>
    )
}

export default NameInput;