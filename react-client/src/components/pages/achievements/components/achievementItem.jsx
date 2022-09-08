import React from "react";
import PropTypes from "prop-types";
import ProgressBar from "./../../../common/progressBar";
import Star from "./../../../common/icon/star";

function AchievementItem({ title, description, goal, value, star }) {
    const multiply = (multiplyValue) => {
        const list = [];
        for (let i = 1; i < multiplyValue + 1; i++) {
            list.push(i);
        }
        return list.map((i) => (
            <Star key={i} active={(goal * i) / multiplyValue <= value} />
        ));
    };
    return (
        <section
            key={title}
            className={`px-4 py-2 max-w-[400px] w-full ${
                goal <= value ? "bg-yellow-400 " : "bg-white"
            } rounded-xl`}
        >
            <div className="flex flex-col items-center gap-[10px]">
                <span className="text-center">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </span>
                <span className="text-yellow-400">{multiply(star)}</span>
                <ProgressBar
                    label={`${goal <= value ? value : value + "/" + goal}`}
                    maxValue={goal}
                    value={value}
                />
            </div>
        </section>
    );
}

AchievementItem.defaultProps = {
    star: 5
};

AchievementItem.propTypes = {
    star: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    goal: PropTypes.number,
    value: PropTypes.number
};

export default AchievementItem;
