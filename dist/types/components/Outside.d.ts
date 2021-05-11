import { MutableRefObject } from "react";
/**
 * Hook that alerts clicks outside of the passed ref
 */
export declare function useOutside(ref: MutableRefObject<any>, callback?: (event: MouseEvent) => void): void;
export interface OutsideProps {
    children: any;
    className?: string;
    onClickOutside?: (event: MouseEvent) => void;
}
/**
 * Component that fires an event if you click outside of it
 */
export default function Outside({ children, className, onClickOutside }: OutsideProps): JSX.Element;
