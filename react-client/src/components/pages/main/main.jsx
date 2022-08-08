import React from "react";
/* import PropTypes from "prop-types"; */
import { Link } from "react-router-dom";

function Main(props) {
    const isLoggedIn = false;
    return (
        <main className="container-center h-screen">
            {!isLoggedIn ? (
                <section className="container-center flex flex-col gap-[20px] bg-indigo-600 p-6 rounded-xl text">
                    Have an account?
                    <Link
                        className="container-center btn p-4 rounded-xl"
                        to="/login/login"
                    >
                        Sign In
                    </Link>
                    {`Don't have`}
                    <Link
                        className="container-center btn p-4 rounded-xl"
                        to="/login/register"
                    >
                        Sign Up
                    </Link>
                </section>
            ) : (
                <button className="btn btn-play">Play</button>
            )}
        </main>
    );
}

Main.propTypes = {};

export default Main;
