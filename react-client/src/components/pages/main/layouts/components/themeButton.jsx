import React from "react";
import PropTypes from "prop-types";

function ThemeButton({ setActiveTheme, color, activeTheme }) {
    return (
        <button
            className={`h-[50px] w-[50px] rounded-full ${
                color === activeTheme && "border-2 border-emerald-700"
            } bg-${
                color === "black"
                    ? color
                    : color === "white"
                        ? "slate-300"
                        : color + "-400"
            }`}
            onClick={() => setActiveTheme(color)}
        ></button>
    );
}

ThemeButton.propTypes = {
    setActiveTheme: PropTypes.func,
    color: PropTypes.string,
    activeTheme: PropTypes.string
};

export default ThemeButton;
