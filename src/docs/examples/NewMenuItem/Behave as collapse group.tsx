import { DropletFill } from "react-bootstrap-icons"
import NewMenuItem from "../../../components/NewMenuItem"

export default function AsCollapseGroupExample() {
    return (
        <NewMenuItem
            iconBefore={<DropletFill />}
            label="Parent"
            as="collapse-group"
        >
            <NewMenuItem label="Child 1" />
            <NewMenuItem label="Child 2" />
        </NewMenuItem>
    )
}
