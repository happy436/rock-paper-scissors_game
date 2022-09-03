import React, { useState } from "react";
import { useParams } from "react-router-dom";
/* import LoginForm from "../components/ui/loginForm";
import RegisterForm from "../components/ui/registerForm"; */
import Refresh from "../components/common/icon/refresh";
import "./style.css";

const Login = () => {
    const { type } = useParams("login");
    const [formType, setFormType] = useState(
        type === "register" ? type : "login"
    );
    const getRandomAvatar = `https://avatars.dicebear.com/api/avataaars/${(
        Math.random() + 1
    )
        .toString(36)
        .substring(7)}.svg`;
    const [image, setImage] = useState(getRandomAvatar);
    const toggleFormType = (params) => {
        setFormType((prevState) =>
            prevState === "register" ? "login" : "register"
        );
    };
    const [labelActive, setLabelActive] = useState(false);
    const [formData, setFormData] = useState({});

    return (
        <section
            className={`container-center flex flex-col gap-[40px] mt-[100px]`}
        >
            {formType === "register" ? (
                <div className="flex justify-center items-center flex-col">
                    <form className="flex justify-center items-center flex-col gap-[20px] relative">
                        <div className="relative h-[150px] w-[150px] z-20">
                            <img
                                className="h-full w-full rounded-full bg-slate-200"
                                alt="profile image"
                                src={image}
                            />
                            <button
                                className="bg-slate-600 rounded-full p-1 absolute top-0 right-0"
                                onClick={() => setImage(getRandomAvatar)}
                            >
                                <Refresh />
                            </button>
                        </div>
                        <div className="flex justify-center items-center flex-col bg-white pt-[100px] pb-[20px] w-[250px] rounded-xl absolute top-[75px] gap-[20px] z-10">
                            <div className="input-container flex justify-center items-center flex-col">
                                <input
                                    onBlur={(e) =>
                                        e.target.value !== ""
                                            ? setLabelActive(true)
                                            : setLabelActive(false)
                                    }
                                    required
                                    placeholder=" "
                                    className="rounded-xl pl-2 drop-shadow-lg text-input"
                                    autoComplete="off"
                                    id="email"
                                    name="email"
                                    value={formData.email || ""}
                                    onChange={({ target }) => {
                                        setFormData(() => ({
                                            [target.name]: target.value
                                        }));
                                    }}
                                />
                                <label
                                    className={`label ${
                                        labelActive && "filled"
                                    }`}
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                            </div>
                            <div className="input-container flex justify-center items-center flex-col">
                                <input
                                    onBlur={(e) =>
                                        e.target.value !== ""
                                            ? setLabelActive(true)
                                            : setLabelActive(false)
                                    }
                                    required
                                    placeholder=" "
                                    className="rounded-xl pl-2 drop-shadow-lg text-input"
                                    autoComplete="off"
                                    id="email"
                                    name="email"
                                    value={formData.email || ""}
                                    onChange={({ target }) => {
                                        setFormData(() => ({
                                            [target.name]: target.value
                                        }));
                                    }}
                                />
                                <label
                                    className={`label ${
                                        labelActive && "filled"
                                    }`}
                                    htmlFor="email"
                                >
                                    Password
                                </label>
                            </div>
                        </div>
                    </form>
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
