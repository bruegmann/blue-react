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
 * @deprecated This component isn't neccessary anymore. Just use `ActionMenu` directly in `Header`.
 */
export default function HeaderActions(props: HeaderActionsProps): JSX.Element;
