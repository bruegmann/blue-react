import React from "react";
import Page from "../../components/Page";
import Body from "../../components/Body";
import Header from "../../components/Header";
import MenuItem from "../../components/MenuItem";
import HeaderTitle from "../../components/HeaderTitle";
import ActionMenu from "../../components/ActionMenu";
import { CloudSleet, ThreeDotsVertical } from "react-bootstrap-icons";

export const ActionMenuExamplePage = () => {
    return (
        <Page>
            <Header>
                <HeaderTitle appTitle="My app with an action menu" />

                <ActionMenu toggleIcon={<ThreeDotsVertical />} break="lg">
                    <MenuItem label="I'm a MenuItem" />

                    <MenuItem label="I'm a MenuItem with children" supportOutside icon={<CloudSleet />}>
                        <MenuItem label="I'm a MenuItem" />
                        <MenuItem label="Another one" />
                    </MenuItem>
                </ActionMenu>
            </Header>
            <Body className="bg-light">...</Body>
        </Page>
    )
}