import PropTypes from "prop-types";
/* import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; */

function AppLoader({ children }) {
    /* const dispatch = useDispatch(); */
    return children;
}

AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default AppLoader;
