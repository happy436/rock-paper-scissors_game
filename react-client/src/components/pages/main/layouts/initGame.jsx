import { nanoid } from "nanoid";
import React, { useState } from "react";
import Selector from "../../../common/select/selector";

function InitGame(props) {
    const [gameType, setGameType] = useState("classic");
    const gameTypes = [
        { _id: nanoid(), name: "3 - classic" },
        { _id: nanoid(), name: "5 - add lizard, spock" }
    ];
    return (
        <section className="container-center flex flex-col gap-[20px]">
            <button
                className="btn rounded-[40px] px-[40px] py-[20px] container-convex"
                onClick={() => console.log(gameType)}
            >
                Play
            </button>
            <Selector onChange={setGameType} options={gameTypes} />
        </section>
    );
}

export default InitGame;
