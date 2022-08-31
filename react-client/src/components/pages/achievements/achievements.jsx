import React from "react";
import Star from "./../../common/icon/star";
import AchievementsList from "./components/achievementsList";
import PropTypes from "prop-types";

function Achievements({ list }) {
    return (
        <section className="flex justify-center items-center flex-col mt-[100px]">
            <h2>Achievements</h2>
            <span className="text-yellow-400">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </span>
            <AchievementsList list={list} />
        </section>
    );
}

Achievements.propTypes = {
    list: PropTypes.array
};

export default Achievements;
