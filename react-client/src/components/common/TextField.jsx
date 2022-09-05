import React, { useState } from "react";
import PropTypes from "prop-types";

function TextField({ name, onChange, value, type }) {
    const [labelActive, setLabelActive] = useState(false);
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    return (
        <div className="input-container flex justify-center items-center flex-col">
            <input
                onBlur={(e) =>
                    e.target.value !== ""
                        ? setLabelActive(true)
                        : setLabelActive(false)
                }
                required
                placeholder=" "
                className="rounded-xl pl-2 drop-shadow-lg text-input"
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={handleChange}
                autoComplete={type === "text" ? "on" : "off"}
            />
            <label
                className={`label ${labelActive && "filled"}`}
                htmlFor={name}
            >
                {name[0].toUpperCase() + name.slice(1)}
            </label>
        </div>
    );
}

TextField.propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    type: PropTypes.string
};

export default TextField;
