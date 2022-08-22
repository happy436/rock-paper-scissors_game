import React, { useEffect, useState } from "react";
import randomSelector from "../../../utils/randomSelector";
import Menu from "../../common/petal_menu/menu";

function Game(props) {
    const [select, setSelect] = useState(false);
    const [time, setTime] = useState(15);
    const list = ["🤏", "🖖", "✌", "✋", "✊"];
    const [botSelect] = useState(randomSelector(list));
    useEffect(() => {
        if (time > 0) {
            setTimeout(() => setTime(time - 1), 1000);
        }
    });
    return (
        <>
            <section className="flex flex-col items-center">
                <h2>Game</h2>
                {!select && time === 0 ? (
                    setSelect(randomSelector(list))
                ) : select ? (
                    <span className="text-[70px]">
                        {select} vs {botSelect}
                    </span>
                ) : (
                    <>
                        <span className="text-[70px]">{time}</span>
                        <span>
                            <Menu list={list} handleClick={setSelect} />
                            {/* <Menu list={["✌", "✋", "✊", "❔"]} /> */}
                        </span>
                    </>
                )}
            </section>
            <section className="w-screen absolute h-[200px] bottom-0 bg-gradient-to-t from-lime-500 to-transparent"></section>
        </>
    );
}

export default Game;
