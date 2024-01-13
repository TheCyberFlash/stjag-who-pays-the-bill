import React, { useState } from "react";
import "../index.css";

const Loser = ({ names }) => {
    const [loser, setLoser] = useState('');

    const selectLoser = (event) => {
        event.preventDefault();
        const randomIndex = Math.floor(Math.random() * names.length);
        setLoser(names[randomIndex]);
    };

    return (
        <div className="loser-container">
            {names.length >= 2 && (
                <>
                    <h2>And the loser is...</h2>
                    <button type="submit" onClick={selectLoser}>Select</button>
                    {loser && <p>{loser} pays the bill!</p>}
                </>
            )}
        </div>
    )
};

export default Loser;