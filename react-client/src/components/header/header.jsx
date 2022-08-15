import React, { useState } from "react";
import Close from "../common/icon/close";
import LogOut from "../common/icon/logOut";
import Menu from "../common/icon/menu";
import Profile from "../common/icon/profile";
import Rating from "../common/icon/rating";
import Setting from "../common/icon/setting";
import Star from "../common/icon/star";
import ArrowRight from "../common/select/arrowRight";
import s from "./header.module.css";
import { Link } from "react-router-dom";
import Home from "../common/icon/home";

function Header(props) {
    const [showMenu, setShowMenu] = useState(false);
    const [expandMenu, setExpandMenu] = useState(false);
    return (
        <header className="flex fixed justify-between pl-[20px] w-full top-0 pr-[20px] pt-[20px] basis-1/12">
            <span className="relative">
                <button
                    className="btn p-5 rounded-[32px]"
                    onClick={() => setShowMenu((prev) => !prev)}
                >
                    <Menu />
                </button>
                <aside
                    className={`${s.aside} ${showMenu && s.active} ${
                        expandMenu && s.expandMenu
                    } absolute top-0 left-0 flex flex-nowrap container-concave bg-indigo-600 flex-col p-5 rounded-[32px]`}
                >
                    <nav>
                        <ul className="flex gap-[20px] flex-col">
                            <li className="h-[24px]">
                                <Link className="flex" to="/" >
                                    <span className="h-[24px] overflow-hidden">
                                        <Home/> Main
                                    </span>
                                </Link>
                            </li>
                            <li className="h-[24px]">
                                <Link className="flex" to="/profile">
                                    <span className="h-[24px] overflow-hidden">
                                        <Profile /> Profile
                                    </span>
                                </Link>
                            </li>
                            <li className="h-[24px]">
                                <Link className="flex" to="/rating">
                                    <span className="h-[24px] overflow-hidden">
                                        <Rating /> Rating
                                    </span>
                                </Link>
                            </li>
                            <li className="h-[24px]">
                                <Link className="flex" to="/achievement">
                                    <span className="h-[24px] overflow-hidden">
                                        <Star /> Achievements
                                    </span>
                                </Link>
                            </li>
                            <li className="h-[24px]">
                                <Link className="flex" to="/setting">
                                    <span className="h-[24px] overflow-hidden">
                                        <Setting /> Settings
                                    </span>
                                </Link>
                            </li>
                            <li className="h-[24px]">
                                <button
                                    className={expandMenu ? s.revers : s.arrow}
                                    onClick={() =>
                                        setExpandMenu((prev) => !prev)
                                    }
                                >
                                    <ArrowRight />
                                </button>
                            </li>
                            <li className="h-[24px]">
                                <button
                                    onClick={() => {
                                        setShowMenu((prev) => !prev);
                                        setExpandMenu(false);
                                    }}
                                >
                                    <Close />
                                </button>
                            </li>
                        </ul>
                    </nav>
                </aside>
            </span>
            <button className="btn p-5 rounded-[32px] h-[64px]">
                <LogOut />
            </button>
        </header>
    );
}

export default Header;
