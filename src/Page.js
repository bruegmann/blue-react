import React from "react";
import Header from "./Header.js";
import Body from "./Body.js";
import Utilities from "./Utilities.js";

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

export default Page;