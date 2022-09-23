import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGameDataLoadingStatus, loadGameData } from "../../store/gameData";

function AppLoader({ children }) {
    const dispatch = useDispatch();
    const gameDataLoadingStatus = useSelector(getGameDataLoadingStatus());
    useEffect(() => {
        dispatch(loadGameData());
    }, []);
    return !gameDataLoadingStatus && children;
}

AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default AppLoader;
