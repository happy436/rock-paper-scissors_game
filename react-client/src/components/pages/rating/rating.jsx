import React, { useEffect, useState } from "react";
import RatingList from "./components/ratingList";
import { getCurrentUserId, getUsersList } from "../../../store/users";
import { useSelector } from "react-redux";
import ProfileWrapper from "../profile/profileWrapper";
import { getGameRatingScale } from "../../../store/gameData";

function Rating() {
    const usersList = useSelector(getUsersList());
    const ratingScalePoints = useSelector(getGameRatingScale());
    const winScalePoints = ratingScalePoints.win;
    const loseScalePoint = ratingScalePoints.lose;
    const [list, setList] = useState([]);
    useEffect(() => {
        setList(() => {
            const sortedList = JSON.parse(JSON.stringify(usersList));
            sortedList.forEach((user) => {
                user.rating = user.history
                    .map((item) => {
                        const historyItem = Object.values(item)[0];
                        const winningGames = Object.values(
                            historyItem.find((statisticType) => {
                                return Object.keys(statisticType)[0] === "win";
                            })
                        )[0];
                        const losedGames = Object.values(
                            historyItem.find((statisticType) => {
                                return Object.keys(statisticType)[0] === "lose";
                            })
                        )[0];
                        return (
                            winningGames * winScalePoints +
                            losedGames * loseScalePoint
                        );
                    })
                    .reduce((prev, curr) => prev + curr);
            });
            return sortedList.sort((a, b) => b.rating - a.rating);
        });
    }, []);
    const currentUserId = useSelector(getCurrentUserId());
    const [selectedUser, setSelectedUser] = useState(currentUserId);
    return (
        <section className="w-full mt-[100px] mb-5 flex justify-evenly">
            <article className="fixed hidden md:block top-0 left-[40px] lg:left-[100px] lg:w-[400px] 2xl:left-[300px]">
                <ProfileWrapper userId={selectedUser} />
            </article>
            <article
                className="md:right-[40px] absolute max-w-[400px] w-full md:w-[350px] lg:right-[100px] xl:w-[400px] xl:right-[200px] 2xl:max-w-[600px] 2xl:w-[600px]" /* className="grow md:absolute md:right-[20px] flex w-full justify-center md:max-w-[400px]" */
            >
                <RatingList
                    list={list}
                    handleSelectUser={setSelectedUser}
                    currentUserId={currentUserId}
                />
            </article>
        </section>
    );
}

Rating.propTypes = {};

export default Rating;
