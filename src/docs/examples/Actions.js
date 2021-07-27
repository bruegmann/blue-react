import React, { useState } from "react"
import { Link } from "react-router-dom"
import Switch from "../../components/Switch"

function ActionsExample() {
    const [isChecked, setIsChecked] = useState(false)
    const toggleIsChecked = () => setIsChecked(!isChecked)
    const [headerless, setHeaderless] = useState(true)
    const toggleHeaderless = () => setHeaderless(!headerless)

    const style = {
        width: isChecked && window.innerWidth > 600 ? "600px" : ""
    }

    return (
        <div>
            <Switch
                className="lg me-3"
                checked={isChecked}
                onChange={toggleIsChecked}
                sliderLabel={isChecked ? "Mobile" : "PC"}
            />
            <Switch
                className="lg"
                checked={!headerless}
                onChange={toggleHeaderless}
                sliderLabel={"Header"}
            />


            <p>
                <Link to={`/actions-example/${headerless ? "headerless" : ""}`} target="_blank" rel="noopener noreferrer">Open in new tab</Link>
            </p>

            <div className="ratio ratio-16x9" >
                <iframe
                    src={`${process.env.PUBLIC_URL}/actions-example/${headerless ? "headerless" : ""}`}
                    style={style}
                    title="Actions Demo page"
                />
                {
                    /**
                     * This is how the Code looks like: 
                    import React from "react"
                    import {Page, Body, Header, Actions, MenuItem} from "blue-react"
                    
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
    )
}

export default ActionsExample