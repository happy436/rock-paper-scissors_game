import React from "react";
import "./menu.css";
import PropTypes from "prop-types";

function Menu({ list, handleClick }) {
    const rotatedDegree = 360 / list.length;
    return (
        <div className="menu">
            <ul className="menu_list">
                {list.map((item, index) => (
                    <li
                        className="item"
                        style={{
                            transform: `rotate(${
                                rotatedDegree * index
                            }deg) skew(${90 - rotatedDegree}deg)`
                        }}
                        key={item}
                        onClick={() => {
                            if (item === "❔") {
                                handleClick(
                                    list[
                                        Math.floor(Math.random() * list.length)
                                    ]
                                );
                            } else {
                                handleClick(item);
                            }
                        }}
                    >
                        <span
                            style={{
                                width: `140px`,
                                height: `140px`,
                                transform: `skew(-${
                                    90 - rotatedDegree
                                }deg)  ` /* rotate(-${rotatedDegree}deg) */
                            }}
                        >
                            <a
                                style={{
                                    transform: `rotate(-${
                                        rotatedDegree * index
                                    }deg)`
                                }}
                            >
                                {item}
                            </a>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

Menu.propTypes = {
    list: PropTypes.array,
    handleClick: PropTypes.func
};

export default Menu;
