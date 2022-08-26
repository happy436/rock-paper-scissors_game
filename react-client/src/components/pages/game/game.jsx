import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import randomSelector from "../../../utils/randomSelector";
import Menu from "../../common/petal_menu/menu";
/* import history from "../../../utils/history"; */

function Game(props) {
    const [result, setResult] = useState(false);
    const { type } = useParams();
    const [select, setSelect] = useState(false);
    const [time, setTime] = useState(15);
    const list = {
        "3 - classic": ["✌", "✋", "✊"],
        "5 - add lizard, spock": ["🤏", "🖖", "✌", "✋", "✊"]
    };
    const [botSelect] = useState(randomSelector(list[type]));
    const win = "win";
    const lose = "lose";
    const draw = "draw";
    const rules = {
        "✌": [
            { "✋": win },
            { "✊": lose },
            { "✌": draw },
            { "🤏": win },
            { "🖖": lose }
        ],
        "✋": [
            { "✋": draw },
            { "✊": win },
            { "✌": lose },
            { "🤏": lose },
            { "🖖": win }
        ],
        "✊": [
            { "✋": lose },
            { "✊": draw },
            { "✌": win },
            { "🤏": win },
            { "🖖": lose }
        ],
        "🤏": [
            { "✋": win },
            { "✊": lose },
            { "✌": lose },
            { "🤏": draw },
            { "🖖": win }
        ],
        "🖖": [
            { "✋": lose },
            { "✊": win },
            { "✌": win },
            { "🤏": lose },
            { "🖖": draw }
        ]
    };
    useEffect(() => {
        if (time > 0 && !select) {
            setTimeout(() => setTime(time - 1), 1000);
        }
    }, [time]);
    useEffect(() => {
        if (select) {
            const findResult = Object.values(
                rules[select].find((item) => Object.keys(item)[0] === botSelect)
            )[0];
            setResult(findResult);
            if (findResult === "lose") {
                console.log("lose");
                /* dispatch(action(findResult)) */
                /* make history match and add in profile data like Scissors: W / L */
            } else {
                console.log("win");
            }
            setTimeout(() => {
                /* history.push("/"); */
            }, 3000);
        }
    }, [select]);
    return (
        <>
            <section className="flex flex-col items-center mt-[100px]">
                {!select && time === 0 ? (
                    setSelect(randomSelector(list[type]))
                ) : select ? (
                    <>
                        <h3 className="text-[70px]">
                            {result &&
                                result.charAt(0).toUpperCase() +
                                    result.slice(1)}
                        </h3>
                        <span className="text-[70px]">
                            {select} vs {botSelect}
                        </span>
                    </>
                ) : (
                    <>
                        <span className="text-[70px]">{time}</span>
                        <span>
                            <Menu list={list[type]} handleClick={setSelect} />
                            {/* <Menu list={["✌", "✋", "✊", "❔"]} /> */}
                        </span>
                    </>
                )}
            </section>
            {result && (
                <section
                    className={`w-screen absolute h-[200px] bottom-0 bg-gradient-to-t from-${
                        result === "win"
                            ? "lime"
                            : result === "lose"
                                ? "red"
                                : "gray"
                    }-600 to-transparent`}
                ></section>
            )}
        </>
    );
}

export default Game;
