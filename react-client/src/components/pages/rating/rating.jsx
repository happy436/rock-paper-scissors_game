import { nanoid } from "nanoid";
import React from "react";
import { useParams } from "react-router-dom";
/* import PropTypes from "prop-types"; */
import RatingList from "./components/ratingList";
import Profile from "./../profile/profile";

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
        <section className="w-full mt-[100px] mb-5 flex justify-evenly">
            <article className="fixed hidden md:block top-0 left-[40px] lg:left-[100px] lg:w-[400px] 2xl:left-[300px]">
                <Profile />
            </article>
            <article className="md:right-[40px] absolute max-w-[400px] w-full md:w-[350px] lg:right-[100px] xl:w-[400px] xl:right-[200px] 2xl:max-w-[600px] 2xl:w-[600px]"/* className="grow md:absolute md:right-[20px] flex w-full justify-center md:max-w-[400px]" */>
                <RatingList list={list} />
            </article>
        </section>
    );
}

Rating.propTypes = {};

export default Rating;
