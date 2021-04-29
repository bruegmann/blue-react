import React from "react";

export interface OutsideProps {
    children: any;
    className?: string;
    onClickOutside?: (event: MouseEvent) => void;
}

export declare function useOutside(ref, callback);

declare function Outside(props: OutsideProps)
export default Outside;