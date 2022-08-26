import React from "react";
import Container from "./../../common/container";
import Star from "./../../common/icon/star";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

function Profile() {
    const user = {
        rating: 231,
        image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`,
        name: "User_name",
        games: 100,
        win: 30,
        favoriteItem: "✌"
    };
    const { userId } = useParams();
    /* const user = useSelector(getUserById(userId)); */
    return (
        <section className="flex justify-center content-center mt-[100px] w-full mb-[20px] mx-[20px]">
            <Container maxWidth={400}>
                <span className="text-[24px] flex justify-between items-center">
                    <p>{user.rating}</p>
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
                            src={`https://avatars.dicebear.com/api/avataaars/${(
                                Math.random() + 1
                            )
                                .toString(36)
                                .substring(7)}.svg`}
                        />
                    </span>
                    <span className="text-[20px]">{user.name}</span>
                    <progress
                        className="rounded-full"
                        min="0"
                        max="100"
                        value="23"
                    />
                </div>
                <div>
                    <span className="flex justify-between text-3xl">
                        <h4>Win rate:</h4>
                        <p>{(user.win / user.games) * 100}%</p>
                    </span>
                    <span className="flex justify-between text-3xl">
                        <h4>Games:</h4>
                        <p>{user.games}</p>
                    </span>
                    <span className="flex justify-between text-3xl">
                        <h4>Win:</h4>
                        <p>{user.win}</p>
                    </span>
                    <span className="flex justify-between text-3xl">
                        <h4>Lose:</h4>
                        <p>{user.games - user.win}</p>
                    </span>
                    <span>
                        <h4>More often chose:</h4>
                        <p className="text-[100px] text-center">
                            {user.favoriteItem}
                        </p>
                    </span>
                </div>
            </Container>
        </section>
    );
}

Profile.propTypes = {
    userId: PropTypes.string
};

export default Profile;
