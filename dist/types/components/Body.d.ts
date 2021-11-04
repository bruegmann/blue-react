/// <reference types="react" />
import { breakOption } from "./shared";
export interface BodyProps {
    id?: string;
    className?: string;
    /**
     * Class name for the container. More info: https://getbootstrap.com/docs/4.0/layout/overview/#containers
     */
    containerClass?: string;
    /**
     * Set `true` if this page uses `<Actions />`, so this component will get enough padding to avoid overlapping of the content.
     */
    hasActions?: boolean;
    break?: breakOption;
    onClick?: (event: any) => void;
    children?: any;
}
/**
 * Contains the content of the page.
 */
export default function Body({ id, className, containerClass, hasActions, onClick, children, ...rest }: BodyProps): JSX.Element;
