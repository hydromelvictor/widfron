import { createContext, useState } from "react";


export const AppContext = createContext();


export default function AppTheme ({ children }) {

    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme : "light";
    });

    const [user, setUser] = useState(null);

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === "light" ? "dark" : "light";
            localStorage.setItem('theme', newTheme); // Persist the theme
            return newTheme;
        });
    };

    return (
        <AppContext.Provider value={{ theme, toggleTheme, user, setUser }}>
            {children}
        </AppContext.Provider>
    );
}
