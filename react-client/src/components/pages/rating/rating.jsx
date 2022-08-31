import React, { useEffect, useState } from "react";
import RatingList from "./components/ratingList";

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
        <section className="w-full mt-[100px] mb-5 container-center">
            <RatingList list={list} />
        </section>
    );
}

Rating.propTypes = {};

export default Rating;
