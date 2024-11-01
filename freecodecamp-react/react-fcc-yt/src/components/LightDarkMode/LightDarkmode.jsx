import React from "react";
import useLocalStorage from "./useLocalStorage";
import "./theme.css";

const LightDarkMode = () => {
    const [theme, setTheme] = useLocalStorage("theme", "dark");

    const handleToggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <>
            <h1>Light Dark Mode</h1>
            <div className="light-dark-mode" data-theme={theme}>
                <div className="light-dark-mode-container">
                    <p>Hello World!!</p>
                    <button onClick={handleToggleTheme}>Change Theme</button>
                </div>
            </div>
        </>
    );
};

export default LightDarkMode;
