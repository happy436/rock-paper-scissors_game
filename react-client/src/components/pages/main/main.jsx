import React from "react";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../../store/users";
import InitGame from "./layouts/initGame";
import InitLogin from "./layouts/initLogin";
/* import s from "./main.module.css"; */

const Main = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    return (
        <section className={`container-center flex flex-col gap-[40px] mt-[100px] mb-[50px]`}>
            <span className="text-[60px] hidden">✊🏻 ✌🏻 ✋🏻 🤏🏻 🖖🏻</span>
            <span className="container-center flex-col">
                <h1 className="text-5xl text-center">✊🏻 ✋🏻 ✌🏻</h1>
                <h3>and another</h3>
            </span>
            {!isLoggedIn ? <InitLogin /> : <InitGame />}
        </section>
    );
};
export default Main;
