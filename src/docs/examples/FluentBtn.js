import React from "react";
import { FluentBtn, Utilities } from "../../../index.js";

class FluentBtnExample extends React.Component {
    componentDidMount() {
        // Beim normalen Einsatz innerhalb von <Page /> ist folgendes nicht nötig. Nur, wenn <FluentBtn /> z.B. asynchron eingebunden wird.
        Utilities.registerFluentBtns();
    }

    render() {
        return (
            <div>
                <FluentBtn
                    className="btn btn-primary btn-lg"
                >
                    Hover over this button and see the fancy fluent effect
                </FluentBtn>
            </div>
        );
    }
}

export default FluentBtnExample;