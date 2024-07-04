"use client";
import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }: { children: any }) => {
    const [theme, setTheme] = useState('light');
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
        setLoaded(true);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    if (!loaded) {
        // Avoid rendering children until the theme is loaded
        return null;
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`min-h-full ${theme} text-foreground bg-background`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};
