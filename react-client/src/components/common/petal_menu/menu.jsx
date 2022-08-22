import React from "react";
import "./menu.css";
import PropTypes from "prop-types";

function Menu({ list, handleClick }) {
    const menuList = [...list, "❔"];
    const rotatedDegree = 360 / menuList.length;
    return (
        <div className="menu">
            <ul>
                {menuList.map((item, index) => (
                    <li
                        className="item"
                        style={{
                            transform: `rotate(${
                                rotatedDegree * index
                            }deg) skew(${90 - rotatedDegree}deg)`
                        }}
                        key={item}
                        onClick={() => handleClick(item)}
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
