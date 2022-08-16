import React from "react";
import PropTypes from "prop-types";
import ProgressBar from "./../../../common/progressBar";
import Star from "./../../../common/icon/star";
import Container from "./../../../common/container";

function AchievementItem({ title, description, goal, value }) {
    const multiply = (multiplyValue) => {
        const list = [];
        for (let i = 1; i < multiplyValue + 1; i++) {
            list.push(<Star active={(goal * i) / multiplyValue <= value} />);
        }
        return list.map((i) => i);
    };
    return (
        <li key={title}>
            <Container>
                <div className="flex flex-col items-center gap-[10px]">
                    <span className="text-center">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </span>
                    <span className="text-yellow-400">{multiply(5)}</span>
                    <ProgressBar
                        label={`${value}/${goal}`}
                        maxValue={goal}
                        value={value}
                    />
                </div>
            </Container>
        </li>
    );
}

AchievementItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    goal: PropTypes.number,
    value: PropTypes.number
};

export default AchievementItem;
