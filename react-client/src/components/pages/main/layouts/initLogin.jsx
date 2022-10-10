import React from "react";
import { Link } from "react-router-dom";
import Star from "../../../common/icon/star";
import leaderboard from "../../../../assets/leaderboard.PNG";
import ThemeButton from "./components/themeButton";
import { useTheme } from "../../../hooks/useTheme";

function InitLogin(props) {
    const { themes, activeTheme, setActiveTheme } = useTheme();
    return (
        <>
            <section className="container-center flex flex-col gap-[20px] component raised-m p-6 rounded-xl">
                <h2>Level Up!</h2>
                <div className="flex flex-col sm:flex-row items-center gap-[20px]">
                    <div className="relative ">
                        <img
                            className="h-[100px] w-[100px] rounded-full bg-slate-200"
                            alt="profile image"
                            src={`https://avatars.dicebear.com/api/avataaars/${(
                                Math.random() + 1
                            )
                                .toString(36)
                                .substring(7)}.svg`}
                        />
                        <span className="text-slate-300 absolute bottom-[-20px] left-3">
                            <Star />
                            <Star />
                            <Star />
                        </span>
                        <span className="text-white absolute top-0 left-[35px]">
                            Lvl 1
                        </span>
                    </div>
                    <div className="rotate-90 sm:rotate-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </div>
                    <div className="relative">
                        <img
                            className="h-[100px] w-[100px] rounded-full bg-slate-200"
                            alt="profile image"
                            src={`https://avatars.dicebear.com/api/avataaars/${(
                                Math.random() + 1
                            )
                                .toString(36)
                                .substring(7)}.svg`}
                        />
                        <span className="text-red-400 absolute bottom-[-20px] left-3">
                            <Star styles={"fill-red-400"} />
                            <Star styles={"fill-red-400"} />
                            <Star styles={"fill-red-400"} />
                        </span>
                        <span className="text-white absolute top-0 left-[20px]">
                            Lvl 100
                        </span>
                    </div>
                </div>
            </section>
            <section className="container-center flex flex-col sm:flex-row mx-[10px] gap-[20px] p-6 rounded-xl">
                <div className="container-center flex flex-col">
                    <h2>Climb up!</h2>
                    <h4 className="text-[20px]">the leaderboard</h4>
                </div>
                <img className="sm:skew-y-12" src={leaderboard}></img>
            </section>
            <section className="container-center component raised-m flex flex-col gap-[20px] mx-[10px] p-6 rounded-xl">
                <h2 className="text-center">Choose your favourite theme</h2>
                <div className="flex flex-wrap gap-[10px] items-center">
                    {themes.map((item) => (
                        <ThemeButton
                            key={item}
                            setActiveTheme={setActiveTheme}
                            color={item}
                            activeTheme={activeTheme}
                        />
                    ))}
                </div>
            </section>
            <section className="container-center flex flex-col gap-[20px] p-6 rounded-xl">
                <h2>Login</h2>
                <div className="flex flex-col sm:flex-row items-center gap-[20px]">
                    <span className="container-center flex-col gap-[5px]">
                        <p>Have an account?</p>
                        <Link
                            className="container-center btn p-4 raised-m rounded-xl"
                            to="/login/login"
                        >
                            Sign In
                        </Link>
                    </span>
                    <span className="container-center flex-col gap-[5px]">
                        <p>{`Don't have`}</p>
                        <Link
                            className="container-center raised-m btn p-4 rounded-xl"
                            to="/login/register"
                        >
                            Sign Up
                        </Link>
                    </span>
                </div>
            </section>
        </>
    );
}

export default InitLogin;
