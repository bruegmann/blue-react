import { Backpack2Fill } from "react-bootstrap-icons"
import NewMenuItem from "../../../components/NewMenuItem"

export default function AsCollapseExample() {
    return (
        <NewMenuItem
            iconBefore={<Backpack2Fill />}
            label="Parent"
            as="collapse"
        >
            <NewMenuItem label="Child 1" />
            <NewMenuItem label="Child 2" />
        </NewMenuItem>
    )
}
