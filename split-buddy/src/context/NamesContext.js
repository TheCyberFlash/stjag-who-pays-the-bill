import { createContext, useContext, useState } from "react";

const NamesContext = createContext();

export const NamesProvider = ({ children }) => {
    const [names, setNames] = useState([]);

    const addName = (newName) => {
        setNames([...names, newName]);
    };

    return (
        <NamesContext.Provider value={{ names, addName }}>
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