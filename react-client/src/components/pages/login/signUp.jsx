import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getAuthErrors, signUp } from "../../../store/users";
import { validator } from "../../../utils/validator";
import Refresh from "../../common/icon/refresh";
import TextField from "../../common/textField";

function SignUp() {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        email: "",
        password: "",
        name: ""
    });
    const getRandomAvatar = () =>
        `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`;
    const [image, setImage] = useState(getRandomAvatar);
    const [errors, setErrors] = useState({});
    const authInError = useSelector(getAuthErrors());
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
        name: {
            isRequired: {
                message: "Name is required"
            },
            min: {
                message: "Name must be at least 3 characters long",
                value: 2
            }
        },
        password: {
            isRequired: {
                message: "Password is required"
            },
            isCapitalSymbol: {
                message: "Password must contain at least one capital letter"
            },
            isContainDigit: {
                message: "Password must contain at least one number"
            },
            min: {
                message: "Password must be at least 8 characters long",
                value: 8
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
        dispatch(
            signUp({
                ...data,
                image,
                history: {
                    scissors: { win: 0, lose: 0, draw: 0 },
                    rock: { win: 0, lose: 0, draw: 0 },
                    spock: { win: 0, lose: 0, draw: 0 },
                    lizard: { win: 0, lose: 0, draw: 0 },
                    paper: { win: 0, lose: 0, draw: 0 },
                    random: { win: 0, lose: 0, draw: 0 }
                }
            })
        );
        if (authInError) {
            toast.error(authInError, { autoClose: 2000 });
        }
    };
    return (
        <form
            className="flex justify-center items-center flex-col gap-[20px] relative"
            onSubmit={handleSubmit}
        >
            <div className="relative h-[150px] w-[150px] z-20">
                <img
                    className="h-full w-full rounded-full bg-slate-200"
                    alt="profile image"
                    src={image}
                />
                <button
                    className="bg-slate-600 rounded-full p-1 absolute top-0 right-0"
                    onClick={() => setImage(getRandomAvatar)}
                    type="button"
                >
                    <Refresh />
                </button>
            </div>
            <div className="flex justify-center items-center flex-col bg-white pt-[100px] pb-[20px] w-[300px] rounded-xl absolute top-[75px] gap-[20px] z-10">
                <TextField
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    type="text"
                    error={errors.email}
                />
                <TextField
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    type="text"
                    error={errors.name}
                />
                <TextField
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    type="password"
                    error={errors.password}
                />
                <button
                    className="btn bg-violet-400 hover:bg-violet-700 w-100 p-4 rounded-xl"
                    disabled={!isValid}
                >
                    Sign up
                </button>
            </div>
        </form>
    );
}

SignUp.propTypes = {};

export default SignUp;
