import React from "react";
import MenuItem from "../../components/MenuItem";
import DropdownMenuItem from "../../components/DropdownMenuItem";
import SidebarMenu from "../../components/SidebarMenu";
import Grid from "../../components/Grid";
import Page from "../../components/Page";
import Body from "../../components/Body";


class DropdownMenuItemExample extends React.Component {
    render() {
        return (
            <Grid>
                <SidebarMenu>
                    <DropdownMenuItem to="#" label="DropdownMenuItem" icon="bi-home">
                        <MenuItem href="#" label="MenuItem"></MenuItem>
                    </DropdownMenuItem>
                </SidebarMenu>
                <Page>
                    <Body>
                    </Body>
                </Page>
            </Grid>
        );
    }
}

export default DropdownMenuItemExample;