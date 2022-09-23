import React from "react";
import Container from "./../../common/container";
import Star from "./../../common/icon/star";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./profile.css";

function Profile({
    userId,
    gamesCount,
    favouriteItem,
    winGame,
    loseGame,
    history,
    image,
    name,
    gameItems,
    winScalePoints,
    loseScalePoint
}) {
    return (
        <section className="flex justify-center content-center pl-[15px] pr-[15px] mt-[80px] pt-[20px] pb-[20px] w-full h-full mb-[20px] profile">
            <Container maxWidth={400}>
                <span className="text-[24px] flex justify-between items-center" onClick={e => e.stopPropagation()}>
                    <p>
                        {winGame * winScalePoints + loseGame * loseScalePoint}
                    </p>
                    <Link
                        to={`/achievements/${userId}`}
                        className="text-yellow-400 container-roll"
                    >
                        <Star />
                    </Link>
                </span>
                <div className="flex flex-col items-center gap-[10px] mb-4">
                    <span className="">
                        <img
                            className="h-[100px] w-[100px] rounded-full bg-slate-200"
                            alt="profile image"
                            src={image}
                        />
                    </span>
                    <h2>{name}</h2>
                    {/* <progress
                        className="rounded-full"
                        min="0"
                        max="100"
                        value="23"
                    /> */}
                </div>
                <div>
                    <span className="flex justify-between text-3xl">
                        <h4>Win rate:</h4>
                        <p>
                            {((winGame * 100) / (winGame + loseGame)).toFixed(
                                1
                            )}
                            %
                        </p>
                    </span>
                    <span className="flex justify-between text-3xl">
                        <h4>Games:</h4>
                        <p>{gamesCount}</p>
                    </span>
                    <span className="flex justify-between text-3xl">
                        <h4>Win:</h4>
                        <p>{winGame}</p>
                    </span>
                    <span className="flex justify-between text-3xl">
                        <h4>Lose:</h4>
                        <p>{loseGame}</p>
                    </span>
                    <span>
                        <h4>Favourite:</h4>
                        <p className="text-[100px] text-center">
                            {favouriteItem}
                        </p>
                    </span>
                    <span className="text-3xl">
                        <span className="flex items-center justify-evenly">
                            <p>Item</p>
                            <p>W/L/D</p>
                        </span>
                        {history.map((item) => {
                            return (
                                <span
                                    key={Object.keys(item)[0]}
                                    className="grid grid-cols-2 justify-items-center"
                                >
                                    <p>
                                        {
                                            gameItems[Object.keys(item)[0]]
                                        }
                                    </p>
                                    <p>
                                        {Object.values(
                                            Object.values(item)[0]
                                        ).join("/")}
                                    </p>
                                </span>
                            );
                        })}
                    </span>
                </div>
            </Container>
        </section>
    );
}

Profile.propTypes = {
    userId: PropTypes.string,
    gamesCount: PropTypes.number,
    favouriteItem: PropTypes.string,
    winGame: PropTypes.number,
    history: PropTypes.array,
    loseGame: PropTypes.number,
    rating: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    gameItems: PropTypes.object,
    loseScalePoint: PropTypes.number,
    winScalePoints: PropTypes.number
};

export default Profile;
