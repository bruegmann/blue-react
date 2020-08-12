import React from "react";

class ActionsExample extends React.Component {
    render() {
        return (
            <div className="embed-responsive embed-responsive-16by9">
                <iframe
                    src={window.location.origin + window.location.pathname + "#/example_page"}
                    className="embed-responsive-item"
                />
            </div>
        );
    }
}

export default ActionsExample;