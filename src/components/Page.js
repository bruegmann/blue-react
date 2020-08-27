import React from "react";
import Header from "./Header.js";
import Body from "./Body.js";
import Utilities from "./Utilities.js";
import PropTypes from "prop-types";

class Page extends React.Component {
    componentDidMount() {
        Utilities.registerFluentBtns();
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

Page.Header = Header;
Page.Body = Body;

Page.propTypes = {
    /**
      * Muss auf "true" gesetzt werden, wenn Actions verwendet wird
      */
    hasActions: PropTypes.bool
}

export default Page;