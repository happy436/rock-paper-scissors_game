import React from "react";
import Star from "./../../common/icon/star";
import componentMultiplication from "./../../../utils/componentMultiplication";
import AchievementsList from "./components/achievementsList";

function Achievements(props) {
    const achievementsList = [
        {
            title: "Cut off",
            description: "Win with scissors",
            goal: 100,
            value: 40
        },
        {
            title: "Cut off",
            description: "Win with scissors",
            goal: 100,
            value: 11
        },
        {
            title: "Cut off",
            description: "Win with scissors",
            goal: 100,
            value: 11
        },
        {
            title: "Cut off",
            description: "Win with scissors",
            goal: 100,
            value: 11
        },
        {
            title: "Cut off",
            description: "Win with scissors",
            goal: 100,
            value: 11
        },
        {
            title: "Cut off",
            description: "Win with scissors",
            goal: 100,
            value: 11
        }
    ];

    return (
        <section className="flex justify-center items-center flex-col mt-2">
            <h2>Achievements</h2>
            <span className="text-yellow-400">{componentMultiplication(5, <Star />)}</span>
            <AchievementsList list={achievementsList} />
        </section>
    );
}

Achievements.propTypes = {};

export default Achievements;
