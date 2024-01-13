import React, { useState } from "react";
import "../index.css";

const Loser = ({ names }) => {
    const [loading, setLoading] = useState(false);
    const [loser, setLoser] = useState('');

    const selectLoser = async (event) => {
        event.preventDefault();
        setLoading(true);

        await new Promise((resolve) => setTimeout(resolve, 2000));

        const randomIndex = Math.floor(Math.random() * names.length);
        setLoser(names[randomIndex]);
        setLoading(false);
    };

    return (
        <div className="loser-container">
            {names.length >= 2 && (
                <>
                    {/* {loading && <p>Calculating...</p>} */}

                    {loading && (
                        <div className="spinner-container">
                            <div className="spinner">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>)}
                        
                    {loser && !loading && (
                        <div className="loser-result">
                            <p>
                                {loser} pays the bill!
                            </p>
                        </div>
                    )}

                    <button type="submit" onClick={selectLoser}>Select the loser...</button>                    
                </>
            )}
        </div>
    )
};

export default Loser;