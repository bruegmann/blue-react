import React from "react";
import Page from "../../components/Page";
import Body from "../../components/Body";
import Actions from "../../components/Actions";
import ActionsMenuItem from "../../components/ActionsMenuItem";

class ActionsExample extends React.Component {
    render() {
        return (
            <Page>
                <Header>
                </Header>
                <Actions>
                    <ActionsMenuItem label="Blue" href="#">
                    </ActionsMenuItem>
                </Actions>
                <Body>
                    ....
                </Body>
            </Page>
        );
    }
}

export default ActionsExample;