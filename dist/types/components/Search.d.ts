export default Search;
/**
 * Eine Suchleiste, die zur Seitenleiste hinzugefügt werden kann.
 */
declare class Search extends React.Component<any, any, any> {
    static get defaultProps(): {
        autoFocus: boolean;
        body: boolean;
        className: string;
        icon: JSX.Element;
        onChange: (event: any) => void;
        onSubmit: (event: any) => void;
        placeholder: string;
        reset: boolean;
        sidebar: boolean;
        value: string;
    };
    SearchControlId: string;
    toggleSidebar(): void;
}
declare namespace Search {
    export namespace propTypes {
        export const autoFocus: PropTypes.Requireable<boolean>;
        export const body: PropTypes.Requireable<boolean>;
        export const className: PropTypes.Requireable<string>;
        export const icon: PropTypes.Requireable<any>;
        export const onChange: PropTypes.Requireable<(...args: any[]) => any>;
        export const onSubmit: PropTypes.Requireable<(...args: any[]) => any>;
        export const placeholder: PropTypes.Requireable<string>;
        export const reset: PropTypes.Requireable<boolean>;
        export const sidebar: PropTypes.Requireable<boolean>;
        export const value: PropTypes.Requireable<string>;
    }
}
import React from "react";
import PropTypes from "prop-types";
