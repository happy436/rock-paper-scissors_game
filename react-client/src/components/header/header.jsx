import React, { useState } from "react";
import LogOut from "../common/icon/logOut";
import Menu from "../common/icon/menu";
import AsideMenu from "./components/asideMenu";
import Profile from "../common/icon/profile";
import Rating from "../common/icon/rating";
import Setting from "../common/icon/setting";
import Star from "../common/icon/star";
import Home from "../common/icon/home";
import { useSelector } from "react-redux";
import { getCurrentUserId } from "./../../store/users";

function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const [expandMenu, setExpandMenu] = useState(false);
    const currentUser = useSelector(getCurrentUserId());
    const menuList = [
        {
            name: "Main",
            url: "/home",
            icon: <Home />
        },
        {
            name: "Profile",
            url: `/profile/${currentUser}`,
            icon: <Profile />
        },
        {
            name: "Rating",
            url: "/rating",
            icon: <Rating />
        },
        {
            name: "Achievements",
            url: `/achievements/${currentUser}`,
            icon: <Star />
        },
        {
            name: "Settings",
            url: "/settings",
            icon: <Setting />
        }
    ];
    return (
        <header className="flex fixed justify-between pl-[20px] w-full top-0 pr-[20px] pt-[20px] basis-1/12">
            <span className="relative">
                <button
                    className="btn p-5 rounded-[32px] h-[64px]"
                    onClick={() => setShowMenu((prev) => !prev)}
                >
                    <Menu />
                </button>
                <AsideMenu
                    itemsList={menuList}
                    showMenu={showMenu}
                    expandMenu={expandMenu}
                    setExpandMenu={setExpandMenu}
                    setShowMenu={setShowMenu}
                />
            </span>
            <button className="btn p-5 rounded-[32px] h-[64px]">
                <LogOut />
            </button>
        </header>
    );
}

export default Header;
