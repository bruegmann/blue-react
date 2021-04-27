import React from "react";

export interface OutsideProps {
    children: PropTypes.element.isRequired;
    className: PropTypes.string;
    onClickOutside: PropTypes.func.isRequired;
}

export declare function useOutside(ref, callback);

declare function Outside(props: OutsideProps)
export default Outside;