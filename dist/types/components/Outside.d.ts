/**
 * Hook that alerts clicks outside of the passed ref
 */
export function useOutside(ref: any, callback: any): void;
export default Outside;
/**
 * Component that fires an event if you click outside of it
 */
declare function Outside({ children, className, onClickOutside }: {
    children: any;
    className: any;
    onClickOutside: any;
}): JSX.Element;
declare namespace Outside {
    export namespace propTypes {
        export const children: PropTypes.Validator<PropTypes.ReactElementLike>;
        export const className: PropTypes.Requireable<string>;
        export const onClickOutside: PropTypes.Validator<(...args: any[]) => any>;
    }
}
import PropTypes from "prop-types";
