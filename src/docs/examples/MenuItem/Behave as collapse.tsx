import { Backpack2Fill } from "react-bootstrap-icons"
import MenuItem from "../../../components/MenuItem"

export default function AsCollapseExample() {
    return (
        <MenuItem iconBefore={<Backpack2Fill />} label="Parent" as="collapse">
            <MenuItem label="Child 1" />
            <MenuItem label="Child 2" />
        </MenuItem>
    )
}
