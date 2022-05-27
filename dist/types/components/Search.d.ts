import React, { ReactNode } from "react";
export interface SearchProps {
    autoFocus?: boolean;
    /**
     * Is component inside of a page?
     */
    body?: boolean;
    className?: string;
    icon?: any;
    onChange?: (event: React.ChangeEvent) => void;
    onSubmit?: (event: React.FormEvent) => void;
    placeholder?: string;
    /**
     * Allow reset?
     */
    reset?: boolean;
    /**
     * Define custom icon for the reset button.
     */
    resetIcon?: any;
    /**
     * Is component inside of the sidebar?
     */
    sidebar?: boolean;
    value?: string;
    children?: ReactNode;
    id?: string;
}
/**
 * A search bar that can be placed to the sidebar or on a page.
 */
export default function Search(props: SearchProps): JSX.Element;
