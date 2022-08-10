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

function Header(props) {
    const [showMenu, setShowMenu] = useState(false);
    const [expandMenu, setExpandMenu] = useState(false);
    return (
        <section className="flex justify-between pl-[20px] pr-[20px] pt-[20px]">
            <span className="relative">
                <button
                    className="btn p-5 rounded-[32px]"
                    onClick={() => setShowMenu((prev) => !prev)}
                >
                    <Menu />
                </button>
                <aside
                    className={`${s.aside} ${showMenu ? s.active : null} ${
                        expandMenu ? s.expandMenu : null
                    } absolute top-0 left-0 flex flex-nowrap container-concave bg-indigo-600 flex-col p-5 rounded-[32px] gap-[20px]`}
                >
                    <span className="h-[24px] overflow-hidden">
                        <Profile /> Profile
                    </span>
                    <span className="h-[24px] overflow-hidden">
                        <Rating /> Rating
                    </span>
                    <span className="h-[24px] overflow-hidden">
                        <Star /> Achievements
                    </span>
                    <span className="h-[24px] overflow-hidden">
                        <Setting /> Settings
                    </span>
                    <button
                        className={expandMenu ? s.revers : s.arrow}
                        onClick={() => setExpandMenu((prev) => !prev)}
                    >
                        <ArrowRight />
                    </button>
                    <button
                        onClick={() => {
                            setShowMenu((prev) => !prev);
                            setExpandMenu(false);
                        }}
                    >
                        <Close />
                    </button>
                </aside>
            </span>
            <button className="btn p-5 rounded-full">
                <LogOut />
            </button>
        </section>
    );
}

export default Header;
