import React from "react";
import PropTypes from "prop-types";

function RatingItem({
    user,
    index,
    handleSelectUser,
    currentUserId,
    handleShowModal
}) {
    return (
        <span
            key={user._id}
            onClick={() => {
                handleSelectUser(user._id);
                handleShowModal(true);
            }}
            className={`flex items-center  rounded-full cursor-pointer bg-white flex justify-between px-3 py-2 ${
                currentUserId === user._id && "border-green-500 border-4"
            } ${index + 1 === 1 && "bg-yellow-300"} ${
                index + 1 === 2 && "bg-slate-300"
            } ${index + 1 === 3 && "bg-orange-500"} raised-m `}
        >
            <span className="flex gap-[10px] items-center">
                <p>{index + 1}.</p>
                <span>
                    <img src={user.image} className="h-[32px] w-[32px] rounded-full bg-slate-400"></img>
                </span>
                <p className="text-[20px]">{user.name}</p>
            </span>
            <span>
                <p className="text-[20px]">{user.rating}</p>
            </span>
        </span>
    );
}

RatingItem.propTypes = {
    index: PropTypes.number,
    user: PropTypes.object,
    currentUserId: PropTypes.string,
    handleSelectUser: PropTypes.func,
    handleShowModal: PropTypes.func
};

export default RatingItem;
