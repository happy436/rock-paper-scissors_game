import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SignUp from "./signUp";
import SignIn from "./signIn";
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
    console.log(toggleFormType);

    return (
        <section
            className={`container-center flex flex-col gap-[40px] mt-[100px]`}
        >
            {formType === "register" ? (
                <div className="flex justify-center items-center flex-col max-w-[400px]">
                    <SignUp />
                </div>
            ) : (
                <div className="flex justify-center items-center flex-col max-w-[400px]">
                    <SignIn/>
                </div>
            )}
        </section>
    );
};

export default Login;
