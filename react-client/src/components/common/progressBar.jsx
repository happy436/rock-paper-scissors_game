import React from "react";
import PropTypes from "prop-types";

function ProgressBar({ label, value, maxValue, minValue }) {
    return (
        <span className="relative flex items-center justify-center">
            <label className="absolute">{label}</label>
            <progress
                max={maxValue}
                min={minValue}
                value={value}
                className="h-[30px]"
            />
        </span>
    );
}

ProgressBar.propTypes = {
    label: PropTypes.string,
    value: PropTypes.number.isRequired,
    maxValue: PropTypes.number.isRequired,
    minValue: PropTypes.number
};

export default ProgressBar;
