import React from "react";
import PropTypes from "prop-types";
import AchievementItem from "./achievementItem";

function AchievementsList({ list }) {
    return (
        <ul className="grid my-4 gap-[10px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {list.map((achievement) => (
                <AchievementItem
                    key={achievement.title}
                    title={achievement.title}
                    description={achievement.description}
                    goal={achievement.goal}
                    value={achievement.value}
                    star={achievement.star}
                />
            ))}
        </ul>
    );
}

AchievementsList.propTypes = {
    list: PropTypes.array
};

export default AchievementsList;
