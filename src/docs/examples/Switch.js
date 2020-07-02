import React from "react";
import Switch from "../../components/Switch";

class SwitchExample extends React.Component {
    constructor() {
        super();

        this.state = {
            isChecked: true
        };
    }

    render() {
        return (
            <div>
                <Switch
                    className="lg"
                    checked={this.state.isChecked}
                    onChange={() => this.setState({ isChecked: !this.state.isChecked })}
                    sliderLabel={this.state.isChecked ? "Yay🎉" : "😒"}
                />
            </div>
        );
    }
}

export default SwitchExample;