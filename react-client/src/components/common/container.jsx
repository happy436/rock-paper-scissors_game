import React from "react";
import PropTypes from "prop-types";

function Container({ children, maxWidth }) {
    return (
        <section
            className={`px-4 py-2 max-w-[${maxWidth}px] w-full bg-white rounded-xl`}
        >
            {children}
        </section>
    );
}

Container.propTypes = {
    maxWidth: PropTypes.number,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default Container;
