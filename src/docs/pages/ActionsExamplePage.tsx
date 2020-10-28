import React, { Fragment } from "react";
import Page from "../../components/Page";
import Body from "../../components/Body";
import Header from "../../components/Header";
import Actions from "../../components/Actions";
import MenuItem from "../../components/MenuItem";
import HeaderTitle from "../../components/HeaderTitle";
import { useParams } from "react-router-dom";

const MyFeaturedMenuItem = () => (
    <Fragment>
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
        />

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
        />
    </Fragment>
)

export const ActionsExamplePage = () => {
    const { headerless } = useParams<any>()

    return (
        <Page>
            {!headerless &&
                <Header>
                    <HeaderTitle appTitle="My app with actions" />
                </Header>
            }
            <Actions
                featured={<MyFeaturedMenuItem />}
            >
                <MyFeaturedMenuItem />
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
                    label="Another one"
                />
            </Actions>
            <Body hasActions>...</Body>
        </Page>
    )
}