import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Hook that alerts clicks outside of the passed ref
 */
export function useOutside(ref, callback) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target) && callback) {
                callback();
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

/**
 * Component that fires an event if you click outside of it
 */
function Outside({ children, className, onClickOutside }) {
    const wrapperRef = useRef(null);
    useOutside(wrapperRef, onClickOutside);

    return <div ref={wrapperRef} className={className}>{children}</div>;
}

Outside.propTypes = {
    children: PropTypes.element.isRequired,
    className: PropTypes.string,
    onClickOutside: PropTypes.func.isRequired
};

export default Outside;