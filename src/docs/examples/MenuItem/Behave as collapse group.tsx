import { DropletFill } from "react-bootstrap-icons"
import MenuItem from "../../../components/MenuItem"

export default function AsCollapseGroupExample() {
    return (
        <MenuItem
            iconBefore={<DropletFill />}
            label="Parent"
            as="collapse-group"
        >
            <MenuItem label="Child 1" />
            <MenuItem label="Child 2" />
        </MenuItem>
    )
}
