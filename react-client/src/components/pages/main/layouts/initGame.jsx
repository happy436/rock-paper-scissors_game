import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getGameTypes } from "../../../../store/gameData";
import Selector from "../../../common/select/selector";

function InitGame(props) {
    const [gameType, setGameType] = useState("3 - classic");
    const getTypes = useSelector(getGameTypes());
    const gameTypes = Object.keys(getTypes).map((i) => ({ name: i, _id: nanoid() }));

    return (
        <section className="container-center flex flex-col gap-[20px]">
            <Link
                className="btn rounded-[40px] px-[40px] py-[20px] container-convex"
                to={`/game/${gameType}`}
            >
                Play
            </Link>
            <Selector
                onChange={setGameType}
                options={gameTypes}
                selectedOption={gameType}
            />
        </section>
    );
}

export default InitGame;
