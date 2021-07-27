import { Popover } from "bootstrap";
import React, { JSXElementConstructor, ReactElement } from "react";
export interface BsPopoverProps {
    /**
     * Define the trigger element, such as an button or a link.
     * */
    children: any;
    /**
     * Pass the popover content as JSX. Custom components might no work.
     * Alternatively, you can pass a string with `options={{ content: "Your content" }}`.
     * */
    content?: ReactElement<any, string | JSXElementConstructor<any>>;
    /**
     * See all available options: https://getbootstrap.com/docs/5.0/components/popovers/#options
     * */
    options?: Partial<Popover.Options>;
}
/**
 * Wrapper for Bootstrap's Popover component.
 */
export default function BsPopover({ children, content, options }: BsPopoverProps): React.FunctionComponentElement<{
    ref: React.MutableRefObject<HTMLButtonElement>;
}>;
