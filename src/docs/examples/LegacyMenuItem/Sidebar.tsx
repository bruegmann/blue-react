import MenuItem from "../../../components/LegacyMenuItem"
import SidebarMenu from "../../../components/SidebarMenu"

export default function MenuItemExample() {
    return (
        <div className="bg-primary position-relative">
            <SidebarMenu
                sidebarClass="position-static shadow-none overflow-visible"
                menuClass="overflow-visible"
            >
                <MenuItem icon={<span>😅</span>} label="Hello World" />
                <MenuItem
                    icon={<span style={{ transform: "scale(-1, 1)" }}>👀</span>}
                    label="Click to see sub items"
                    supportOutside
                >
                    <MenuItem label="I am a child, hi" />
                    <MenuItem label="Second child">
                        <MenuItem label="Even more nested" />
                    </MenuItem>
                </MenuItem>
            </SidebarMenu>
            <p className="p-3 bg-body">
                Resize the browser to see how the sidebar and its items behave.
            </p>
        </div>
    )
}
