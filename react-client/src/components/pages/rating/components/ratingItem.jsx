import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function RatingItem({ user, index, userId }) {
    return (
        <li key={user._id} className="w-full">
            <Link
                to={`/rating/${user._id}`}
                className={`flex items-center  rounded-full bg-white flex justify-between px-3 py-2 ${
                    userId === user._id && "border-green-500 border-4"
                } ${index + 1 === 1 && "bg-yellow-300"} ${
                    index + 1 === 2 && "bg-slate-300"
                } ${index + 1 === 3 && "bg-orange-500"}`}
            >
                <span className="flex gap-[10px] items-center">
                    <p>{index + 1}.</p>
                    <span>
                        <img className="h-[32px] w-[32px] rounded-full bg-slate-400"></img>
                    </span>
                    <p className="text-[20px]">{user.name}</p>
                </span>
                <span>
                    <p className="text-[20px]">{user.rating}</p>
                </span>
            </Link>
        </li>
    );
}

RatingItem.propTypes = {
    index: PropTypes.number,
    user: PropTypes.object,
    userId: PropTypes.string
};

export default RatingItem;
