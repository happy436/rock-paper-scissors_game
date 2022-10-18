import PropTypes from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGameDataLoadingStatus, loadGameData } from "../../store/gameData";
import { getUsersLoadingStatus, loadUsersList } from "../../store/users";

function AppLoader({ children }) {
    const dispatch = useDispatch();
    const gameDataLoadingStatus = useSelector(getGameDataLoadingStatus());
    const UsersLoadingStatus = useSelector(getUsersLoadingStatus());
    useEffect(() => {
        dispatch(loadGameData());
        dispatch(loadUsersList());
    }, []);
    return !gameDataLoadingStatus && !UsersLoadingStatus && children;
}

AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default AppLoader;
