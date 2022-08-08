import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AppLoader from "./components/hoc/appLoader";
import Main from "./components/pages/main";
import ProtectedRoute from "./components/common/protectedRoute";
import LogOut from "./layouts/logOut";
import Login from "./layouts/login";
import Game from "./components/pages/game";
import Profile from "./components/pages/profile";
import Rating from "./components/pages/rating";

function App() {
    return (
        <AppLoader>
            <Switch>
                <ProtectedRoute
                    path="/profile/:userId?/:edit?"
                    component={Profile}
                />
                <ProtectedRoute
                    path="/rating/:userId?"
                    component={Rating}
                />
                <ProtectedRoute path="/game" component={Game} />
                <Route path="/login/:type?" component={Login} />
                <Route path="/logout" component={LogOut} />
                <Route path="/" component={Main}></Route>
                <Redirect to="/" />
            </Switch>
            <ToastContainer />
        </AppLoader>
    );
}

export default App;
