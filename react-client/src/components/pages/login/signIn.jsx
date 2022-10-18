import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getAuthErrors, login } from "../../../store/users";
import { validator } from "../../../utils/validator";
import TextField from "../../common/textField";

function SignIn(props) {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const logInError = useSelector(getAuthErrors());
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const [firstTry, setFirstTry] = useState(false);

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Email is required"
            },
            isEmail: {
                message: "Email entered incorrectly"
            }
        },
        password: {
            isRequired: {
                message: "Password is required"
            }
        }
    };
    useEffect(() => {
        if (firstTry) {
            validate();
        }
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;
    const handleSubmit = (e) => {
        !firstTry && setFirstTry(true);
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const redirect = "/home";
        dispatch(login({ payload: data, redirect }));
        if (logInError) {
            toast.error(logInError, { autoClose: 2000 });
        }
    };
    return (
        <form
            className="flex justify-center items-center flex-col gap-[20px] relative"
            onSubmit={handleSubmit}
            autoComplete="off"
        >
            <div className="flex justify-center items-center shadow-xl flex-col bg-white pt-[20px] pb-[20px] w-[300px] rounded-xl absolute top-[75px] gap-[20px] z-10">
                <h1>✌🏻 ✋🏻 ✊🏻</h1>
                <h1 hidden>Rock, paper, scissors</h1>
                <h2>Login</h2>
                <TextField
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    error={errors.email}
                />
                <TextField
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    error={errors.password}
                    type="password"
                />
                <button
                    className="btn w-100 p-4 rounded-xl"
                    disabled={!isValid}
                >
                    Sign In
                </button>
            </div>
        </form>
    );
}

export default SignIn;
