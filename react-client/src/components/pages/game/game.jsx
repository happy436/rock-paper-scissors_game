import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGameItems, getGameTypes, getRules } from "../../../store/gameData";
import { getCurrentUserData, updateUserHistory } from "../../../store/users";
import history from "../../../utils/history";
import randomSelector from "../../../utils/randomSelector";
import Menu from "../../common/petal_menu/menu";

function Game(props) {
    const userData = useSelector(getCurrentUserData());
    const [result, setResult] = useState(false);
    const dispatch = useDispatch();
    const { type } = useParams();
    const [selectedIcon, setSelectedIcon] = useState(false);
    const [time, setTime] = useState(15);
    const gameItems = useSelector(getGameItems());
    const listOfGameTypes = useSelector(getGameTypes());
    const convertedListItemstoIcons = listOfGameTypes[type].map(
        (i) => gameItems[i]
    );
    const currentList = [...convertedListItemstoIcons, "❔"];
    const [botSelected] = useState(randomSelector(convertedListItemstoIcons));
    const rules = useSelector(getRules());
    useEffect(() => {
        if (time > 0 && !selectedIcon) {
            setTimeout(() => setTime(time - 1), 1000);
        }
    }, [time]);
    useEffect(() => {
        if (selectedIcon) {
            const selectedName =
                Object.keys(gameItems)[
                    Object.values(gameItems).findIndex(
                        (i) => i === selectedIcon
                    )
                ];
            const botSelectedName =
                Object.keys(gameItems)[
                    Object.values(gameItems).findIndex((i) => i === botSelected)
                ];
            const findResult = rules[selectedName][botSelectedName];
            setResult(findResult);
            dispatch(
                updateUserHistory({
                    [selectedName]: { [findResult]: userData.history[selectedName][findResult] + 1 }
                })
            );
            setTimeout(() => {
                history.push("/");
            }, 3000);
        }
    }, [selectedIcon]);
    return (
        <>
            <section className="flex flex-col items-center mt-[100px]">
                {!selectedIcon && time === 0 ? (
                    setSelectedIcon(randomSelector(convertedListItemstoIcons))
                ) : selectedIcon ? (
                    <>
                        <h3 className="text-[70px]">
                            {result &&
                                result.charAt(0).toUpperCase() +
                                    result.slice(1)}
                        </h3>
                        <span className="text-[70px]">
                            {selectedIcon} vs {botSelected}
                        </span>
                    </>
                ) : (
                    <>
                        <span className="text-[70px]">{time}</span>
                        <span>
                            <Menu
                                list={currentList}
                                handleClick={setSelectedIcon}
                            />
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
