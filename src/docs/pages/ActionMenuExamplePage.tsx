import React, { Fragment } from "react";
import Page from "../../components/Page";
import Body from "../../components/Body";
import Header from "../../components/Header";
import Actions from "../../components/Actions";
import MenuItem from "../../components/MenuItem";
import HeaderTitle from "../../components/HeaderTitle";
import HeaderActions from "../../components/HeaderActions";
import ActionMenu from "../../components/ActionMenu";
import ActionMenuItem from "../../components/ActionMenuItem";

export const ActionMenuExamplePage = () => {
    return (
        <Page>
            <Header>
                <HeaderTitle appTitle="My app with an action menu" />

                <HeaderActions>
                    <ActionMenu>
                        <ActionMenuItem label="I'm a ActionMenuItem" />

                        <MenuItem label="I'm a MenuItem with children">
                            <MenuItem label="I'm a MenuItem" />
                            <MenuItem label="Another one" />
                        </MenuItem>
                    </ActionMenu>
                </HeaderActions>
            </Header>
            <Body>...</Body>
        </Page>
    )
}