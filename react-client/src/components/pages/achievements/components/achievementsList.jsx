import React from "react";
import PropTypes from "prop-types";
import AchievementItem from "./achievementItem";
import {
    useTransition,
    config,
    animated
} from "react-spring";

function AchievementsList({ list }) {
    const transition = useTransition(list, {
        delay: 700,
        trail: 1000 / list.length,
        config: config.stiff,
        from: { opacity: 0, scale: 0 },
        enter: { opacity: 1, scale: 1 }
    });
    return (
        <ul className="grid my-4 gap-[10px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {transition((style, achievement) => (
                <animated.li style={{ ...style }}>
                    <AchievementItem
                        key={achievement.title}
                        title={achievement.title}
                        description={achievement.description}
                        goal={achievement.goal}
                        value={achievement.value}
                        star={achievement.star}
                    />
                </animated.li>
            ))}
        </ul>
    );
}

AchievementsList.propTypes = {
    list: PropTypes.array
};

export default AchievementsList;
