/// <reference types="react" />
import { BodyProps } from "./Body";
export interface BodyRoundedProps extends BodyProps {
    classNameTop?: string;
    classNameBottom?: string;
}
/**
 * Extended variation of `Body` with rounded elements on top and bottom of the page.
 */
export default function BodyRounded({ classNameTop, classNameBottom, children, ...bodyProps }: BodyRoundedProps): JSX.Element;
