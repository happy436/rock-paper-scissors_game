import { nanoid } from "nanoid";
import React from "react";
import { useParams } from "react-router-dom";
/* import PropTypes from "prop-types"; */
import RatingList from "./components/ratingList";

function Rating(props) {
    const { userId } = useParams();
    console.log(userId);
    /* const currentUserId = useSelector(getCurrentUserId()); */
    const list = [
        { _id: nanoid(), name: "User1", rating: 20 },
        { _id: nanoid(), name: "User2", rating: 30 },
        { _id: nanoid(), name: "User4", rating: 50 },
        { _id: nanoid(), name: "User2", rating: 32 },
        { _id: nanoid(), name: "User2", rating: 32 },
        { _id: nanoid(), name: "User2", rating: 32 },
        { _id: nanoid(), name: "User2", rating: 32 },
        { _id: nanoid(), name: "User2", rating: 32 },
        { _id: nanoid(), name: "User2", rating: 32 },
        { _id: nanoid(), name: "User2", rating: 32 },
        { _id: nanoid(), name: "User2", rating: 32 },
        { _id: nanoid(), name: "User2", rating: 32 },
        { _id: nanoid(), name: "User2", rating: 32 },
        { _id: nanoid(), name: "User2", rating: 32 },
        { _id: nanoid(), name: "User2", rating: 32 },
        { _id: nanoid(), name: "User2", rating: 32 },
        { _id: nanoid(), name: "User2", rating: 32 },
        { _id: nanoid(), name: "User2", rating: 32 },
        { _id: nanoid(), name: "User2", rating: 32 },
        { _id: nanoid(), name: "User2", rating: 32 },
        { _id: nanoid(), name: "User2", rating: 32 },
        { _id: nanoid(), name: "User2", rating: 32 },
        { _id: nanoid(), name: "User2", rating: 32 },
        { _id: nanoid(), name: "User2", rating: 32 },
        { _id: nanoid(), name: "User2", rating: 32 }
    ];

    return (
        <section className="w-full mt-[100px] mb-5 container-center">
            <RatingList list={list} />
        </section>
    );
}

Rating.propTypes = {};

export default Rating;
