import React from "react";
import Title from "./HeaderTitle.js";
import Actions from "./HeaderActions.js";
import FluentBtn from "./FluentBtn.js";
import Utilities from "./Utilities.js";

/**
 * The top of a page.
 */
class Header extends React.Component {
    render() {
        return (
            <div className="blue-app-header blue-app-header-extension">
                <div className="ui-header-wrapper" onClick={() => Utilities.scrollToTop()} />

                {this.props.children}
            </div>
        );
    }
}

Header.Title = Title;
Header.Actions = Actions;

export default Header;