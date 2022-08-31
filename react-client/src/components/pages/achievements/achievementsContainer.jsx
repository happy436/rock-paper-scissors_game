import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAchievementsList } from "../../../store/gameData";
import { getUserById } from "../../../store/users";
import Achievements from "./achievements";

function AchievementsContainer(props) {
    const { userId } = useParams();
    const userHistory = useSelector(getUserById(userId)).history;
    const achievementsList = useSelector(getAchievementsList());
    const refactoringDataForGoal = (i) => {
        if (i.goal) {
            return i.goal;
        } else if (Array.isArray(i.rules)) {
            return i.rules.reduce((prev, curr) => {
                if (typeof prev === "object") {
                    return (
                        Object.values(Object.values(prev)[0])[0] +
                        Object.values(Object.values(curr)[0])[0]
                    );
                }
                return prev + Object.values(Object.values(curr)[0])[0];
            });
        } else {
            return Object.values(Object.values(i.rules)[0])[0];
        }
    };
    const refactoringDataForValue = (i) => {
        let result = 0;
        if (i.goal) {
            for (let item = 0; item < i.rules.length; item++) {
                const historyItem = Object.values(
                    userHistory.find((historyItem) => {
                        return (
                            Object.keys(historyItem)[0] ===
                            Object.keys(i.rules[item])[0]
                        );
                    })
                )[0].find((type) => {
                    return (
                        Object.keys(type)[0] === Object.values(i.rules[item])[0]
                    );
                });
                result = result + Object.values(historyItem)[0];
            }
        } else if (Array.isArray(i.rules)) {
            for (let item = 0; item < i.rules.length; item++) {
                const historyItem = Object.values(
                    userHistory.find((historyItem) => {
                        return (
                            Object.keys(historyItem)[0] ===
                            Object.keys(i.rules[item])[0]
                        );
                    })
                )[0].find((type) => {
                    return (
                        Object.keys(type)[0] ===
                        Object.keys(Object.values(i.rules[item])[0])[0]
                    );
                });
                if (
                    Object.values(historyItem)[0] >
                    Object.values(Object.values(i.rules[item])[0])[0]
                ) {
                    result =
                        result +
                        Object.values(Object.values(i.rules[item])[0])[0];
                } else {
                    result = result + Object.values(historyItem)[0];
                }
            }
        } else {
            const historyItem = Object.values(
                userHistory.find((historyItem) => {
                    return (
                        Object.keys(historyItem)[0] === Object.keys(i.rules)[0]
                    );
                })
            )[0].find((type) => {
                return (
                    Object.keys(type)[0] ===
                    Object.keys(Object.values(i.rules)[0])[0]
                );
            });
            result = Object.values(historyItem)[0];
        }
        return result;
    };

    const list = achievementsList.map((i) => ({
        title: i.title,
        description: i.description,
        goal: refactoringDataForGoal(i),
        value: refactoringDataForValue(i)
    }));

    return <Achievements list={list} />;
}

export default AchievementsContainer;
