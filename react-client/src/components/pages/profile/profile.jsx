import React from "react";
/* import PropTypes from "prop-types"; */

function Profile(props) {
    return (
        <section className="flex justify-center content-center mt-2">
            <section className="px-4 py-2 max-w-[400px] w-full mx-4 bg-white rounded-xl">
                <span className="text-[24px]">231</span>
                <div className="flex flex-col items-center gap-[10px] mb-4">
                    <span className="">
                        <img
                            className="h-[100px] w-[100px] rounded-full bg-slate-200"
                            alt="profile image"
                        />
                    </span>
                    <span className="text-[20px]">User_name</span>
                    <progress className="rounded-full" min="0" max="100" value="23"/>
                </div>
                <div>
                    <span className="flex justify-between text-3xl">
                        <h4>Win rate:</h4>
                        <p>72%</p>
                    </span>
                    <span className="flex justify-between text-3xl">
                        <h4>Games:</h4>
                        <p>100</p>
                    </span>
                    <span className="flex justify-between text-3xl">
                        <h4>Win:</h4>
                        <p>23</p>
                    </span>
                    <span className="flex justify-between text-3xl">
                        <h4>Lose:</h4>
                        <p>12</p>
                    </span>
                    <span>
                        <h4>More often chose:</h4>
                        <p>100</p>
                    </span>
                </div>
            </section>
        </section>
    );
}

Profile.propTypes = {};

export default Profile;
