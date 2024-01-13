import { createContext, useContext, useState } from "react";

const NamesContext = createContext();

export const NamesProvider = ({ children }) => {
    const [names, setNames] = useState([]);

    const addName = (newName) => {
        setNames([...names, newName]);
    };

    const resetNames = () => {
        setNames([]);
    };

    return (
        <NamesContext.Provider value={{ names, addName, resetNames }}>
            {children}
        </NamesContext.Provider>
    );

};

export const useNames = () => {
    const context = useContext(NamesContext);
    if (context === undefined) {
        throw new Error("useNames must be used within a NamesProvider");
    }
    return context; 
}