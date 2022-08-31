import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGameTypes, getRules } from "../../../store/gameData";
import randomSelector from "../../../utils/randomSelector";
import Menu from "../../common/petal_menu/menu";

function Game(props) {
    const [result, setResult] = useState(false);
    const { type } = useParams();
    const [select, setSelect] = useState(false);
    const [time, setTime] = useState(15);
    const listOfGameTypes = useSelector(getGameTypes());
    const currentList = Object.values(
        listOfGameTypes.find((item) => {
            return Object.keys(item)[0] === type;
        })
    )[0];
    const [botSelect] = useState(randomSelector(currentList));
    const rules = useSelector(getRules());
    useEffect(() => {
        if (time > 0 && !select) {
            setTimeout(() => setTime(time - 1), 1000);
        }
    }, [time]);
    useEffect(() => {
        if (select) {
            const findResult = Object.values(
                rules[select].find((item) => {
                    console.log(Object.keys(item)[0]);
                    console.log(botSelect);
                    return null;
                })
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
                    setSelect(randomSelector(currentList))
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
                            <Menu list={currentList} handleClick={setSelect} />
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
