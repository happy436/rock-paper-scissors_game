import React from "react";
import PropTypes from "prop-types";
import AchievementItem from "./achievementItem";

function AchievementsList({ list }) {
    return (
        <ul className="grid my-4 gap-[10px]">
            {list.map((achievement) => (
                <AchievementItem
                    key={achievement.title}
                    title={achievement.title}
                    description={achievement.description}
                    goal={achievement.goal}
                    value={achievement.value}
                />
            ))}
        </ul>
    );
}

AchievementsList.propTypes = {
    list: PropTypes.array
};

export default AchievementsList;
