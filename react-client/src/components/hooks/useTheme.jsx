import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";

const ThemeContext = React.createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
};

const ThemeProvider = ({ children }) => {
    const localTheme = localStorage.getItem("theme");
    const [activeTheme, setActiveTheme] = useState(
        localTheme === null ? "indigo" : localTheme
    );
    const body = document.body;
    const themes = [
        "indigo",
        "black",
        "white",
        "red",
        "amber",
        "emerald",
        "sky",
        "purple",
        "pink"
    ];
    useEffect(() => {
        localStorage.setItem("theme", activeTheme);
        body.setAttribute("data-theme", activeTheme);
        setActiveTheme(activeTheme);
    }, [activeTheme]);

    return (
        <ThemeContext.Provider
            value={{ themes: themes, setActiveTheme, activeTheme }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default ThemeProvider;
