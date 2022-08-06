import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
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
            <Routes>
                {/* <ProtectedRoute
                        path="/profile/:userId?/:edit?"
                        component={<Profile/>}
                    />
                    <ProtectedRoute
                        path="/rating/:userId?"
                        component={<Rating/>}
                    />
                    <ProtectedRoute path="/game" component={<Game/>} /> */}

                <Route path="login" >
					<Route path=":type" element={<Login />}/>
				</Route>
                <Route path="/logout" element={<LogOut />} />
                <Route path="/" element={<Main />}>
					
				</Route>
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <ToastContainer />
        </AppLoader>
    );
}

export default App;
