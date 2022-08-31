import React from "react";
import Close from "../../common/icon/close";
import ArrowRight from "../../common/select/arrowRight";
import s from "../header.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function AsideMenu({
    showMenu,
    expandMenu,
    setExpandMenu,
    setShowMenu,
    itemsList
}) {
    const hideAndCloseMenu = () => {
        setShowMenu((prev) => !prev);
        setExpandMenu(false);
    };
    const style = { height: `${(itemsList.length + 2) * 47}px`, zIndex: 20 };
    return (
        <aside
            style={showMenu ? style : null}
            className={`${s.aside}  ${
                expandMenu && s.expandMenu
            } absolute top-0 left-0 flex flex-nowrap container-concave bg-indigo-600 flex-col p-5 rounded-[32px]`}
        >
            <nav>
                <ul className="flex gap-[20px] flex-col">
                    {itemsList.map((item) => (
                        <li
                            key={item.name}
                            className="h-[24px]"
                            onClick={() => hideAndCloseMenu()}
                        >
                            <Link className="flex" to={item.url}>
                                <span className="h-[24px] overflow-hidden">
                                    {item.icon} {item.name}
                                </span>
                            </Link>
                        </li>
                    ))}
                    <li className="h-[24px]">
                        <button
                            className={expandMenu ? s.revers : s.arrow}
                            onClick={() => setExpandMenu((prev) => !prev)}
                        >
                            <ArrowRight />
                        </button>
                    </li>
                    <li className="h-[24px]">
                        <button onClick={() => hideAndCloseMenu()}>
                            <Close />
                        </button>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

AsideMenu.propTypes = {
    itemsList: PropTypes.array,
    showMenu: PropTypes.bool,
    expandMenu: PropTypes.bool,
    setExpandMenu: PropTypes.func,
    setShowMenu: PropTypes.func
};

export default AsideMenu;
