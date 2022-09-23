import React from "react";
import PropTypes from "prop-types";
import RatingItem from "./ratingItem";
import { useTransition, config, animated } from "react-spring";

function RatingList({ list, handleSelectUser, currentUserId, setShowModal }) {
    const transition = useTransition(list, {
        trail: 3000 / list.length,
        config: config.stiff,
        from: { opacity: 0, scale: 0 },
        enter: { opacity: 1, scale: 1 }
    });
    return (
        <ul className="container-center flex-col w-full max-w-[400px] gap-[20px] px-4 mb-10 2xl:max-w-[600px] 2xl:w-[600px]">
            {transition((style, user, index) => (
                <animated.li style={{ ...style }} className="w-full">
                    <RatingItem
                        key={user._id}
                        user={user}
                        index={list.indexOf(user)}
                        handleSelectUser={handleSelectUser}
                        handleShowModal={setShowModal}
                        currentUserId={currentUserId}
                    />
                </animated.li>
            ))}
        </ul>
    );
}

RatingList.propTypes = {
    list: PropTypes.array,
    handleSelectUser: PropTypes.func,
    currentUserId: PropTypes.string,
    setShowModal: PropTypes.func
};

export default RatingList;
