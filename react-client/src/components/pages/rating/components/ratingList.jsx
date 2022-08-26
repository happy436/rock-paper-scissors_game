import React from "react";
import PropTypes from "prop-types";
import RatingItem from "./ratingItem";

function RatingList({ list, userId }) {
    return (
        <ul className="container-center flex-col w-full max-w-[400px] gap-[20px] px-4 mb-10 2xl:max-w-[600px] 2xl:w-[600px]">
            {list
                .sort((a, b) => b.rating - a.rating)
                .map((user, index) => {
                    return (
                        <RatingItem
                            key={user._id}
                            user={user}
                            index={index}
                            userId={userId}
                        />
                    );
                })}
        </ul>
    );
}

RatingList.propTypes = {
    list: PropTypes.array,
    userId: PropTypes.string
};

export default RatingList;
