import React, { useState } from "react";
import Close from "../common/close";
import LogOut from "../common/logOut";
import Menu from "../common/menu";
import Profile from "../common/profile";
import Rating from "../common/rating";
import ArrowRight from "../common/select/arrowRight";
import Setting from "../common/setting";
import Star from "../common/star";

function Header(props) {
    const [showMenu, setShowMenu] = useState(false);
    /* const [expandMenu, setExpandMenu] = useState(false); */
    return (
        <section className="flex justify-between pl-[20px] pr-[20px] pt-[20px]">
            <span className="relative">
                <button
                    className="btn p-5 rounded-full"
                    onClick={() => setShowMenu((prev) => !prev)}
                >
                    <Menu />
                </button>
                <aside
                    className={`${
                        showMenu ? "z-20" : "-z-10"
                    } absolute z-20 top-0 left-0 flex container-concave bg-indigo-600 flex-col p-5 rounded-full gap-[20px]`}
                >
                    <span>
                        <Profile />
                    </span>
                    <span>
                        <Rating />
                    </span>
                    <span>
                        <Star />
                    </span>
                    <span>
                        <Setting />
                    </span>
                    <button>
                        <ArrowRight />
                    </button>
                    <button onClick={() => setShowMenu((prev) => !prev)}>
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
