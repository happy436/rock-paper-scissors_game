import React from "react";
import { Link } from "react-router-dom";

function InitLogin(props) {
    return (
        <section className="Main__containerWrapper container-center flex flex-col gap-[20px] bg-indigo-600 p-6 rounded-xl">
            <h2 className="block">Login</h2>
            <div className="container-center flex-col">
                <span className="container-center flex-col">
                    <p>Have an account?</p>
                    <Link
                        className="container-center btn p-4 rounded-xl"
                        to="/login/login"
                    >
                        Sign In
                    </Link>
                </span>
                <span className="container-center flex-col">
                    <p>{`Don't have`}</p>
                    <Link
                        className="container-center btn p-4 rounded-xl"
                        to="/login/register"
                    >
                        Sign Up
                    </Link>
                </span>
            </div>
        </section>
    );
}

export default InitLogin;
