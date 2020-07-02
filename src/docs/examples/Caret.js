import React from "react";
import Caret from "../../components/Caret";

class CaretExample extends React.Component {
    constructor() {
        super();

        this.state = {
            isOpen: false
        };
    }

    render() {
        return (
            <div>
                <button
                    className="btn btn-secondary"
                    onClick={() => this.setState({ isOpen: !this.state.isOpen })}
                >
                    <Caret
                        open={this.state.isOpen}
                    />
                    {" "}<span>Click to toggle the caret</span>
                </button>
            </div>
        );
    }
}

export default CaretExample;