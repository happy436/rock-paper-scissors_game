import React from "react";
import PropTypes from "prop-types";
import Profile from "./profile";
import { getCurrentUserId, getUserById } from "../../../store/users";
import { useSelector } from "react-redux";
import { getGameItems, getGameRatingScale } from "../../../store/gameData";

function ProfileContainer({ userId }) {
    const selfUserId = useSelector(getCurrentUserId());
    const ratingScalePoints = useSelector(getGameRatingScale());
    const winScalePoints = ratingScalePoints.win;
    const loseScalePoint = ratingScalePoints.lose;
    const gameItems = useSelector(getGameItems());
    const user = useSelector(getUserById(userId || selfUserId));
    let gamesCount = 0;
    let winnedGames = 0;
    let losedGames = 0;
    const list = [];
    for (const key in user.history) {
        gamesCount =
            gamesCount +
            user.history[key].win +
            user.history[key].lose +
            user.history[key].draw;
        winnedGames = winnedGames + user.history[key].win;
        losedGames = losedGames + user.history[key].lose;
        list.push({ [key]: user.history[key] });
    }
    const sortedHistory = list.sort((prev, curr) => {
        return (
            Object.values(Object.values(curr)[0]).reduce((a, b) => a + b) -
            Object.values(Object.values(prev)[0]).reduce((a, b) => a + b)
        );
    });

    const favouriteItem = gameItems[Object.keys(sortedHistory[0])[0]];
    return (
        <>
            <Profile
                gamesCount={gamesCount}
                favouriteItem={favouriteItem}
                winGame={winnedGames}
                loseGame={losedGames}
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

ProfileContainer.propTypes = { userId: PropTypes.string };

export default ProfileContainer;
