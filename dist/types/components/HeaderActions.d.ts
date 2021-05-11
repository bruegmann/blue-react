/// <reference types="react" />
import { breakOption } from "./shared";
export interface HeaderActionsProps {
    className?: string;
    /**
     * @deprecated Use `break` prop instead.
     */
    breakpoint?: breakOption;
    break?: breakOption;
    children?: any;
}
/**
 * Here you can place components like `ActionMenu` for the current page.
 */
export default function HeaderActions(props: HeaderActionsProps): JSX.Element;
