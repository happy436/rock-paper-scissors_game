import React from "react";
import PropTypes from "prop-types";
import Profile from "./profile";
import { getCurrentUserId, getUserById } from "../../../store/users";
import { useSelector } from "react-redux";
import { getGameItems, getGameRatingScale } from "../../../store/gameData";

function ProfileWrapper({ userId }) {
    const selfUserId = useSelector(getCurrentUserId());
    const ratingScalePoints = useSelector(getGameRatingScale());
    const winScalePoints = ratingScalePoints.win;
    const loseScalePoint = ratingScalePoints.lose;
    const gameItems = useSelector(getGameItems());
    const user = useSelector(getUserById(userId || selfUserId));
    const gamesCount = user.history
        .map((item) => {
            let result = 0;
            Object.values(item)[0].map(
                (i) => (result = result + Object.values(i)[0])
            );
            return result;
        })
        .reduce((prev, curr) => prev + curr);
    const sortedHistory = [...user.history].sort((prev, curr) => {
        return (
            Object.values(curr)[0]
                .map((i) => Object.values(i)[0])
                .reduce((a, b) => a + b) -
            Object.values(prev)[0]
                .map((i) => Object.values(i)[0])
                .reduce((a, b) => a + b)
        );
    });
    /* .forEach((item) => {
            const icon = Object.values(gameItems.find(i => Object.keys(i)[0] === Object.keys(item)[0]))[0];
            const name = Object.keys(item)[0];
            JSON.parse(JSON.stringify(item).replaceAll(name, icon));
        });
    console.log(sortedHistory); */
    const favouriteItem = Object.values(
        gameItems.find(
            (item) => Object.keys(item)[0] === Object.keys(sortedHistory[0])[0]
        )
    )[0];
    const winGame = user.history
        .map((item) => {
            let result = 0;
            Object.values(item)[0].map((i) => {
                return (
                    Object.keys(i)[0] === "win" &&
                    (result = result + Object.values(i)[0])
                );
            });
            return result;
        })
        .reduce((prev, curr) => prev + curr);
    const loseGame = user.history
        .map((item) => {
            let result = 0;
            Object.values(item)[0].map((i) => {
                return (
                    Object.keys(i)[0] === "lose" &&
                    (result = result + Object.values(i)[0])
                );
            });
            return result;
        })
        .reduce((prev, curr) => prev + curr);
    return (
        <>
            <Profile
                gamesCount={gamesCount}
                favouriteItem={favouriteItem}
                winGame={winGame}
                loseGame={loseGame}
                userId={userId || selfUserId}
                history={sortedHistory}
                rating={user.rating}
                name={user.name}
                image={user.image}
                gameItems={gameItems}
                winScalePoints={winScalePoints}
                loseScalePoint={loseScalePoint}
            />
        </>
    );
}

ProfileWrapper.propTypes = { userId: PropTypes.string };

export default ProfileWrapper;
