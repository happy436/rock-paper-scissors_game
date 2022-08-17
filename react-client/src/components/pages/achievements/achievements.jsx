import React from "react";
import Star from "./../../common/icon/star";
import AchievementsList from "./components/achievementsList";

function Achievements(props) {
    const achievementsList = [
        {
            title: "I am the best",
            description: "Get all achievements",
            goal: 1,
            value: 0,
            star: 1
        },
        {
            title: "Cut off",
            description: "Win with scissors ✌",
            goal: 100,
            value: 40
        },
        {
            title: "Smash them",
            description: "Win with rock ✊",
            goal: 100,
            value: 11
        },
        {
            title: "Death note",
            description: "Win with paper 🤚",
            goal: 100,
            value: 11
        },
        {
            title: "Ancient dragon",
            description: "Win with lizard 🤏",
            goal: 100,
            value: 11
        },
        {
            title: "I am Spock",
            description: "Win with spock 🖖",
            goal: 100,
            value: 11
        },
        {
            title: "Probability theory",
            description: "Win with random ❔",
            goal: 100,
            value: 100
        }
    ];

    return (
        <section className="flex justify-center items-center flex-col mt-2">
            <h2>Achievements</h2>
            <span className="text-yellow-400">
                <Star/>
                <Star/>
                <Star/>
                <Star/>
                <Star/>
            </span>
            <AchievementsList list={achievementsList} />
        </section>
    );
}

Achievements.propTypes = {};

export default Achievements;
