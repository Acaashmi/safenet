import React, { createContext, useState } from "react";

export const locationContext = createContext('');
export default function LocationProvider({ children }) {
    const [location, setLocation] = useState('')
    return (
        <locationContext.Provider value={{ location, setLocation }}>
            {children}
        </locationContext.Provider>
    );
}