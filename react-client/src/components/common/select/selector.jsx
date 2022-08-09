import React from "react";
import PropTypes from "prop-types";
import "./selector.css";

function Selector({ options, onChange }) {
    return (
        <div className="select">
            <select
                name="format"
                id="format"
                onChange={(e) => onChange(e.target.value)}
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
    onChange: PropTypes.func
};

export default Selector;
