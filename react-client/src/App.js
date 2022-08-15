import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AppLoader from "./components/hoc/appLoader";
import Main from "./components/pages/main";
import LogOut from "./layouts/logOut";
import Login from "./layouts/login";
import Game from "./components/pages/game";
import Rating from "./components/pages/rating";
import Profile from "./components/pages/profile";
import Header from "./components/header";
/* import ProtectedRoute from "./components/common/protectedRoute"; */

function App() {
    return (
        <AppLoader>
            <Header />
            <main className="mt-[100px]">
                <Switch>
                    {/*
                <ProtectedRoute
                    path="/profile/:userId?/:edit?"
                    component={Profile}
                />
                <ProtectedRoute path="/rating/:userId?" component={Rating} />
                <ProtectedRoute path="/game" component={Game} /> */}
                    <Route path="/rating" component={Rating} />
                    <Route path="/game" component={Game} />
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/login/:type?" component={Login} />
                    <Route path="/logout" component={LogOut} />
                    <Route path="/" exact component={Main} />
                    <Redirect to="/" />
                </Switch>
            </main>
            <ToastContainer />
        </AppLoader>
    );
}

export default App;
