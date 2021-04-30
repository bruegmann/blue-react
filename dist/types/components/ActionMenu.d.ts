export default ActionMenu;
/**
 * <span class="badge badge-info">Info</span> You can also use <strong>Actions</strong> instead.<br>
 * The Action Menu on the top right of a page. You can place Actions here which are in context of the current page.
 */
declare class ActionMenu extends React.Component<any, any, any> {
    static get defaultProps(): {
        hideToggleAction: boolean;
        toggleIcon: string;
    };
    toggleActions(): void;
    initToggleStatus(): void;
}
declare namespace ActionMenu {
    export namespace propTypes {
        export const hideToggleAction: PropTypes.Requireable<boolean>;
        export const toggleIcon: PropTypes.Requireable<any>;
    }
}
import React from "react";
import PropTypes from "prop-types";
