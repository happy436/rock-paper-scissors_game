import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Selector from "../../../common/select/selector";

function InitGame(props) {
    const [gameType, setGameType] = useState("3 - classic");
    const gameTypes = [
        { _id: nanoid(), name: "3 - classic" },
        { _id: nanoid(), name: "5 - add lizard, spock" }
    ];
    useEffect(() => console.log(gameType));
    return (
        <section className="container-center flex flex-col gap-[20px]">
            <Link
                className="btn rounded-[40px] px-[40px] py-[20px] container-convex"
                to={`/game/${gameType}`}
            >
                Play
            </Link>
            <Selector onChange={setGameType} options={gameTypes} selectedOption={gameType}/>
        </section>
    );
}

export default InitGame;
