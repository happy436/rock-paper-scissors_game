import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AppLoader from "./components/hoc/appLoader";
import Main from "./components/pages/main";
import LogOut from "./components/pages/login/logOut";
import Login from "./components/pages/login/login";
import Game from "./components/pages/game";
import Rating from "./components/pages/rating";
import Header from "./components/header";
/* import ProtectedRoute from "./components/common/protectedRoute"; */
import Settings from "./components/pages/settings/settings";
import AchievementsContainer from "./components/pages/achievements/achievementsContainer";
import ProfileContainer from "./components/pages/profile/profileContainer";
import history from "./utils/history";

function App() {
    const isLoggedIn = false;
    const urlWithoutHeader = ["/login/login", "/login/register", "/", "/game", ""];
    const [urlHistory, setUrlHistory] = useState(history.location.pathname);
    const [showHeader, setShowHeader] = useState(false);
    useEffect(() => {
        setUrlHistory(history.location.pathname);
        setShowHeader(!urlWithoutHeader.includes(urlHistory));
    }, [history.location.pathname]);
    return (
        <AppLoader>
            <h1 hidden>Rock, paper, scissors</h1>
            {showHeader && <Header />}
            <main className="flex justify-center w-full">
                <Switch>
                    {/*
                <ProtectedRoute path="/game" component={Game} /> */}
                    <Route path="/rating" component={Rating} />
                    <Route path="/game/:type?" component={Game} />
                    <Route
                        path="/achievements/:userId?"
                        component={AchievementsContainer}
                    />
                    <Route
                        path="/profile/:userId?"
                        component={ProfileContainer}
                    />
                    <Route path="/settings" component={Settings} />
                    <Route path="/login/:type?" component={Login} />
                    <Route path="/logout" component={LogOut} />
                    <Route
                        path={isLoggedIn ? "/home" : "/"}
                        exact
                        component={Main}
                    />
                    <Redirect to={isLoggedIn ? "/home" : "/"} />
                </Switch>
            </main>
            <ToastContainer />
        </AppLoader>
    );
}

export default App;
