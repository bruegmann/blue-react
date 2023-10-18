import { useState } from "react"
import MenuItem from "../../../components/MenuItem"
import SidebarMenu from "../../../components/SidebarMenu"

export default function MenuItemExample() {
    const [navigationSource, setNavigationSource] = useState<"user" | "default">("default")

    return (
        <div className="bg-primary position-relative">
            <SidebarMenu sidebarClass="position-static shadow-none overflow-visible" menuClass="overflow-visible">
                <div className="blue-sidebar-visible-on-open blue-sidebar-menu-horizontal-on-open">
                    <MenuItem
                        label="Default"
                        labelClassName="text-center w-100"
                        onClick={() => setNavigationSource("default")}
                        isActive={navigationSource === "default"}
                    />

                    <MenuItem
                        label="User"
                        labelClassName="text-center w-100"
                        onClick={() => setNavigationSource("user")}
                        isActive={navigationSource === "user"}
                    />
                </div>
            </SidebarMenu>
            <p className="p-3 bg-body">Resize the browser to see how the sidebar and its items behave.</p>
        </div>
    )
}
