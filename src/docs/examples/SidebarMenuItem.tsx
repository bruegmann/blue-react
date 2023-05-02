import MenuItem from "../../components/MenuItem"
import SidebarMenu from "../../components/SidebarMenu"
import SidebarMenuItem from "../../components/SidebarMenuItem"

export default function SidebarMenuItemExample() {
    return (
        <div className="bg-primary position-relative">
            <SidebarMenu sidebarClass="position-static shadow-none overflow-visible" menuClass="overflow-visible">
                <SidebarMenuItem icon={<span>😅</span>} label="Hello World" />
                <SidebarMenuItem
                    icon={<span style={{ transform: "scale(-1, 1)" }}>👀</span>}
                    label="Click to see sub items"
                >
                    <MenuItem label="I am a child, hi" />
                    <MenuItem label="Second child">
                        <MenuItem label="Even more nested" />
                    </MenuItem>
                </SidebarMenuItem>
            </SidebarMenu>
            <p className="p-3 bg-body">Resize the browser to see how the sidebar and its items behave.</p>
        </div>
    )
}
