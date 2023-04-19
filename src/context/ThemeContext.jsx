import { createContext, useContext, useState } from "react";
import axios from "axios";
import { HttpStatusCode } from "axios";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    
    const [theme, setTheme] = useState('light');

    const data = {
        theme,
        setTheme
    };

    return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
};

export const useTheme = () => useContext(ThemeContext);
