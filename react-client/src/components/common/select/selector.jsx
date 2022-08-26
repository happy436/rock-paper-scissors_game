import React from "react";
import PropTypes from "prop-types";
import "./selector.css";

function Selector({ options, onChange, selectedOption }) {
    return (
        <div className="select">
            <select
                name="format"
                id="format"
                onChange={(e) => onChange(e.target.value)}
                value={selectedOption}
            >
                {options.map((option, index) => (
                    <option key={option._id} value={option.name}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

Selector.propTypes = {
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func,
    selectedOption: PropTypes.string
};

export default Selector;
