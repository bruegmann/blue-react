import React from "react";
import Page from "../../components/Page";
import Body from "../../components/Body";
import Header from "../../components/Header";
import MenuItem from "../../components/MenuItem";
import HeaderTitle from "../../components/HeaderTitle";
import HeaderActions from "../../components/HeaderActions";
import ActionMenu from "../../components/ActionMenu";
import ActionMenuItem from "../../components/ActionMenuItem";
import { CloudSleet, ThreeDotsVertical } from "react-bootstrap-icons";

export const ActionMenuExamplePage = () => {
    return (
        <Page>
            <Header>
                <HeaderTitle appTitle="My app with an action menu" />

                <HeaderActions breakpoint="lg">
                    <ActionMenu toggleIcon={<ThreeDotsVertical />}>
                        <ActionMenuItem label="I'm a ActionMenuItem" />

                        <MenuItem label="I'm a MenuItem with children" supportOutside icon={<CloudSleet />}>
                            <MenuItem label="I'm a MenuItem" />
                            <MenuItem label="Another one" />
                        </MenuItem>
                    </ActionMenu>
                </HeaderActions>
            </Header>
            <Body className="bg-light">...</Body>
        </Page>
    )
}