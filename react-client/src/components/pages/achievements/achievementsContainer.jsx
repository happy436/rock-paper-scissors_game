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
        } else {
            let goalCount = 0;
            for (const key in i.rules) {
                goalCount = goalCount + Object.values(i.rules[key])[0];
            }
            return goalCount;
        }
    };
    const refactoringDataForValue = (i) => {
        let result = 0;
        if (i.goal) {
            for (const item in i.rules) {
                const historyItem = userHistory[item][i.rules[item]];
                result = result + historyItem;
            }
        } else {
            for (const item in i.rules) {
                const historyItem =
                    userHistory[item][Object.keys(i.rules[item])[0]];
                if (historyItem > Object.values(i.rules[item])[0]) {
                    result = result + Object.values(i.rules[item])[0];
                } else {
                    result = result + historyItem;
                }
            }
        }
        return result;
    };

    const list = achievementsList.map((i) => ({
        title: i.title,
        description: i.description,
        goal: refactoringDataForGoal(i),
        value: refactoringDataForValue(i)
    })).sort((a, b) => {
        return ((a.value * 100) / a.goal) - ((b.value * 100) / b.goal);
    });

    return <Achievements list={list} />;
}

export default AchievementsContainer;
