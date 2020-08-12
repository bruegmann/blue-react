import React from "react";
import Switch from "../../components/Switch";

class ActionsExample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isChecked: false
        }
    }
    render() {
        const style = {
            width: this.state.isChecked && window.innerWidth > 600 ? "600px" : ""
        };
        return (
            <div>
                <Switch
                    className="lg"
                    checked={this.state.isChecked}
                    onChange={() => this.setState({ isChecked: !this.state.isChecked })}
                    sliderLabel={this.state.isChecked ? "Mobile" : "PC"}
                />
                <div className="embed-responsive embed-responsive-16by9" >
                    <iframe
                        src={window.location.origin + window.location.pathname + "#/example_page"}
                        className="embed-responsive-item"
                        style={style}
                    />
                    {
                        /**
                         * This is how the Code looks like: 
                        import React from "react";
                        import {Page, Body, Header, Actions, MenuItem} from "blue-react";
                        
                        export const ActionsExamplePage = () => {
                            return (
                                <Page hasActions={true}>
                                    <Header>
                                    </Header>
                                    <Actions>
                                        <MenuItem
                                            icon={
                                                <svg
                                                    width="1em"
                                                    height="1em"
                                                    viewBox="0 0 16 16"
                                                    className="bi bi-bag-fill"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M1 4h14v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm7-2.5A2.5 2.5 0 0 0 5.5 4h-1a3.5 3.5 0 1 1 7 0h-1A2.5 2.5 0 0 0 8 1.5z"
                                                    />
                                                </svg>
                                            }
                                            label="Test"
                                        ></MenuItem>
                                        <MenuItem
                                            icon={
                                                <svg
                                                    width="1em"
                                                    height="1em"
                                                    viewBox="0 0 16 16"
                                                    className="bi bi-bell-fill"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"
                                                    />
                                                </svg>
                                            }
                                            label="Test2"
                                        >  </MenuItem>
                                    </Actions>
                                    <Body>...</Body>
                                </Page>
                            )
                        }
                        */
                    }
                </div>
            </div>
        );
    }
}

export default ActionsExample;