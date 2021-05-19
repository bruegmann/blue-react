import React from "react";
import Utilities from "../../components/Utilities";
import FluentBtn from "../../components/FluentBtn";

class FluentBtnExample extends React.Component {
    componentDidMount() {
        // Beim normalen Einsatz innerhalb von <Page /> ist folgendes nicht nötig. Nur, wenn <FluentBtn /> z.B. asynchron eingebunden wird.
        Utilities.registerFluentBtns();
    }

    render() {
        return (
            <div>
                <FluentBtn
                    className="btn btn-primary btn-lg mb-1"
                >
                    Hover over this button and see the fancy fluent effect
                </FluentBtn>
                <br />
                <FluentBtn className="btn btn-secondary mb-1">A secondary button in normal size</FluentBtn>
                <br />
                <FluentBtn className="btn btn-outline-secondary mb-1">A secondary outline button</FluentBtn>
                <br />
                <FluentBtn href="#" className="btn btn-light mb-1">A light button</FluentBtn>
            </div>
        );
    }
}

export default FluentBtnExample;