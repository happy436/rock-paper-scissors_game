/* import { nanoid } from "nanoid"; */
import React from "react";
/* import PropTypes from "prop-types"; */

function Rating(props) {
    const list = [
        { _id: 1, name: "User1", rating: 20 },
        { _id: 2, name: "User2", rating: 30 },
        { _id: 3, name: "User4", rating: 50 },
        { _id: 4, name: "User2", rating: 32 },
        { _id: 5, name: "User2", rating: 32 },
        { _id: 6, name: "User2", rating: 32 },
        { _id: 7, name: "User2", rating: 32 },
        { _id: 8, name: "User2", rating: 32 },
        { _id: 9, name: "User2", rating: 32 },
        { _id: 10, name: "User2", rating: 32 },
        { _id: 11, name: "User2", rating: 32 },
        { _id: 11, name: "User2", rating: 32 },
        { _id: 11, name: "User2", rating: 32 },
        { _id: 11, name: "User2", rating: 32 },
        { _id: 11, name: "User2", rating: 32 },
        { _id: 11, name: "User2", rating: 32 },
        { _id: 11, name: "User2", rating: 32 },
        { _id: 11, name: "User2", rating: 32 },
        { _id: 11, name: "User2", rating: 32 },
        { _id: 11, name: "User2", rating: 32 },
        { _id: 11, name: "User2", rating: 32 },
        { _id: 11, name: "User2", rating: 32 },
        { _id: 11, name: "User2", rating: 32 },
        { _id: 11, name: "User2", rating: 32 },
        { _id: 12, name: "User2", rating: 32 }
    ];
    const userId = 5;
    return (
        <section className="w-full mt-4 mb-5 container-center">
            <ul className="container-center flex-col w-full gap-[20px] max-w-[400px] px-4">
                {list
                    .sort((a, b) => b.rating - a.rating)
                    .map((item, index) => {
                        return (
                            <li
                                key={item._id}
                                className={`flex items-center w-full rounded-full bg-white flex justify-between px-3 py-2 ${
                                    userId === item._id &&
                                    "border-green-500 border-4"
                                } ${index + 1 === 1 && "bg-yellow-300"} ${
                                    index + 1 === 2 && "bg-slate-300"
                                } ${index + 1 === 3 && "bg-orange-500"}`}
                            >
                                <span className="flex gap-[10px] items-center">
                                    <p>{index + 1}.</p>
                                    <span>
                                        <img className="h-[32px] w-[32px] rounded-full bg-slate-400"></img>
                                    </span>
                                    <p className="text-[20px]">{item.name}</p>
                                </span>
                                <span>
                                    <p className="text-[20px]">{item.rating}</p>
                                </span>
                            </li>
                        );
                    })}
            </ul>
        </section>
    );
}

Rating.propTypes = {};

export default Rating;
