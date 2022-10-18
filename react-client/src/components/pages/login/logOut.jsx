import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../../store/users";
import history from "../../../utils/history";

const LogOut = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        history.push("/");
        dispatch(logOut());
    }, []);
    return <h1>Loading</h1>;
};

export default LogOut;
