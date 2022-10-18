import React/* , { useEffect, useState } */ from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppLoader from "./components/hocs/appLoader";
import Main from "./components/pages/main";
import LogOut from "./components/pages/login/logOut";
import Login from "./components/pages/login/login";
import Game from "./components/pages/game";
import Rating from "./components/pages/rating";
import Header from "./components/header";
import ProtectedRoute from "./components/common/protectedRoute";
import Settings from "./components/pages/settings/settings";
import AchievementsContainer from "./components/pages/achievements/achievementsContainer";
import ProfileContainer from "./components/pages/profile/profileContainer";
import { getIsLoggedIn } from "./store/users";
import { useSelector } from "react-redux";

function App() {
    const isLoggedIn = useSelector(getIsLoggedIn());
    const location = useLocation();
    const transition = useTransition(location, {
        from: {
            opacity: 0,
            scale: 0
        },
        enter: {
            opacity: 1,
            scale: 1
        },
        leave: {
            opacity: 0,
            scale: 0
        }
    });
    /* const urlWithoutHeader = [
        "/login/login",
        "/login/register",
        "/",
        "/game",
        "/logout",
        ""
    ];
    const [urlHistory, setUrlHistory] = useState(location.pathname);
    const [showHeader, setShowHeader] = useState(true);
    useEffect(() => {
        setUrlHistory(location.pathname);
        setShowHeader(!urlWithoutHeader.includes(urlHistory));
    }, [isLoggedIn]); */
    return (
        <>
            <h1 hidden>Rock, paper, scissors</h1>
            {isLoggedIn ? <Header /> : null}
            <main className="flex justify-center relative">
                {transition((props, item) => (
                    <animated.div
                        style={{
                            ...props,
                            width: "100%",
                            left: 0,
                            position: "absolute"
                        }}
                    >
                        <AppLoader>
                            <div className="absolute w-full h-screen left-0">
                                <Switch location={item}>
                                    <ProtectedRoute
                                        path="/rating"
                                        component={isLoggedIn ? Rating : null}
                                    />
                                    <ProtectedRoute
                                        path="/game/:type?"
                                        component={isLoggedIn ? Game : null}
                                    />
                                    <ProtectedRoute
                                        path="/achievements/:userId?"
                                        component={isLoggedIn ? AchievementsContainer : null}
                                    />
                                    <ProtectedRoute
                                        path="/profile/:userId?"
                                        component={isLoggedIn ? ProfileContainer : null}
                                    />
                                    <Route
                                        path="/settings"
                                        component={isLoggedIn ? Settings : null}
                                    />
                                    <Route
                                        path="/login/:type?"
                                        component={Login}
                                    />
                                    <Route path="/logout" component={LogOut} />
                                    <Route
                                        path={isLoggedIn ? "/home" : "/"}
                                        exact
                                        component={Main}
                                    />
                                    <Redirect to={isLoggedIn ? "/home" : "/"} />
                                </Switch>
                            </div>
                        </AppLoader>
                    </animated.div>
                ))}
            </main>
            <ToastContainer />
        </>
    );
}

export default App;
