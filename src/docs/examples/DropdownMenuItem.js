import React from "react";
import MenuItem from "../../components/MenuItem";
import DropdownMenuItem from "../../components/DropdownMenuItem";


class DropdownMenuItemExample extends React.Component {
    render() {
        return (
            <DropdownMenuItem to="#" label="DropdownMenuItem" icon="bi-home">
                <MenuItem href="#" label="MenuItem"></MenuItem>
            </DropdownMenuItem>
        );
    }
}

export default DropdownMenuItemExample;