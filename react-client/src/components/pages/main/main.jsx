import React from "react";
<<<<<<< HEAD
import InitGame from "./layouts/initGame";
import InitLogin from "./layouts/initLogin";

function Main() {
    const isLoggedIn = true;
=======
/* import PropTypes from "prop-types"; */
import { Link } from "react-router-dom";
>>>>>>> cb130d025a73866532cc4b8421b63d094cf42900

    return (
        <main className="Main__container container-center h-full flex flex-col gap-[40px] relative">
            <span className="container-center flex-col absolute top-[20px]">
                <h1 className="text-5xl text-center">Rock, paper, scissors</h1>
                <h3>and another</h3>
            </span>
            {!isLoggedIn ? <InitLogin /> : <InitGame />}
        </main>
    );
}
export default Main;
