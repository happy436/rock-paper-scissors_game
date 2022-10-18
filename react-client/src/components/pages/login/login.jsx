import React from "react";
import { useParams } from "react-router-dom";
import SignUp from "./signUp";
import SignIn from "./signIn";
import "./style.css";

const Login = () => {
    const { type } = useParams("login");

    return (
        <section
            className={`container-center flex flex-col gap-[40px] mt-[100px]`}
        >
            {type === "register" ? (
                <div className="flex justify-center items-center flex-col max-w-[400px]">
                    <SignUp />
                </div>
            ) : (
                <div className="flex justify-center items-center flex-col max-w-[400px]">
                    <SignIn />
                </div>
            )}
        </section>
    );
};

export default Login;
