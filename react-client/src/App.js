import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AppLoader from "./components/hoc/appLoader";
import Main from "./components/pages/main";
import Game from "./components/pages/game";
import Rating from "./components/pages/rating";
import Header from "./components/header";
/* import ProtectedRoute from "./components/common/protectedRoute"; */
import Settings from "./components/pages/settings/settings";
import AchievementsContainer from "./components/pages/achievements/achievementsContainer";
import ProfileContainer from "./components/pages/profile/profileContainer";
import Login from "./components/pages/login/login";
import LogOut from "./components/pages/login/logOut";

function App() {
    const isLoggedIn = false;
    return (
        <AppLoader>
            <h1 className="hidden">Rock, paper, scissors</h1>
            <Header />
            <main className="flex justify-center w-full">
                <Switch>
                    {/*
                <ProtectedRoute
                    path="/profile/:userId?"
                    component={Profile}
                />
                <ProtectedRoute
                    path="/achievements/:userId?" component={Achievements}
                />
                <ProtectedRoute path="/rating" component={Rating} />
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
