import ActionMenuItem from "../../../components/ActionMenuItem"
import ActionMenu from "../../../components/ActionMenu"

export default function ActionMenuItemExample() {
    return (
        <div className="position-relative text-bg-theme w-100" style={{ height: "150px" }}>
            <ActionMenu>
                <ActionMenuItem label="Parent">
                    <ActionMenuItem label="Item 1" />
                    <ActionMenuItem label="Item 2" />
                </ActionMenuItem>
            </ActionMenu>
        </div>
    )
}
