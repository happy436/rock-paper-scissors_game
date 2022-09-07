import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SignUp from "./signUp";
/* import LoginForm from "../components/ui/loginForm";
import RegisterForm from "../components/ui/registerForm"; */
import "./style.css";

const Login = () => {
    const { type } = useParams("login");
    const [formType, setFormType] = useState(
        type === "register" ? type : "login"
    );

    const toggleFormType = (params) => {
        setFormType((prevState) =>
            prevState === "register" ? "login" : "register"
        );
    };

    return (
        <section
            className={`container-center flex flex-col gap-[40px] mt-[100px]`}
        >
            {formType === "register" ? (
                <div className="flex justify-center items-center flex-col max-w-[400px]">
                    <SignUp />
                </div>
            ) : (
                <>
                    <h3 className="mb-4 text-center">Login</h3>
                    {/* <LoginForm /> */}
                    <p>
                        Dont have account?{" "}
                        <a
                            role="button"
                            onClick={toggleFormType}
                            className="text-violet-600 hover:text-violet-400"
                        >
                            {" "}
                            Sign Up
                        </a>
                    </p>
                </>
            )}
        </section>
    );
};

export default Login;
