import React from "react";
import MenuItem from "../../components/MenuItem";
import DropdownMenuItem from "../../components/DropdownMenuItem";


class DropdownMenuItemExample extends React.Component {
    render() {
        return (
            <div className="blue-app-sidebar position-relative" style={{ top: "0" }}>
                <DropdownMenuItem to="#" label="DropdownMenuItem" icon="bi-home">
                    <MenuItem href="#" label="MenuItem"></MenuItem>
                </DropdownMenuItem>
            </div>
        );
    }
}

export default DropdownMenuItemExample;