import MenuItem from "../../../components/MenuItem"
import SidebarMenu from "../../../components/SidebarMenu"
import { BoxArrowLeft, House } from "react-bootstrap-icons"
import IconMenuItem from "../../../components/IconMenuItem"
import { useState } from "react"

export default function MenuItemExample() {
    const [showDropdown, setShowDropdown] = useState(false)

    return (
        <div className="bg-primary position-relative">
            <SidebarMenu
                sidebarClass="position-static shadow-none overflow-visible"
                menuClass="overflow-visible"
                topContent={
                    <>
                        <div className="d-flex blue-sidebar-menu-horizontal-on-open">
                            <MenuItem
                                href="#home"
                                label="Home"
                                icon={<House className="bi" />}
                                labelClassName="text-center w-100"
                            />
                            <div className="position-relative">
                                <IconMenuItem
                                    title="More"
                                    supportOutside
                                    showDropdown={showDropdown}
                                    onShowDropdown={setShowDropdown}
                                    labelClassName="text-center w-100"
                                    dropdownClassName="position-absolute z-3 end-0 blue-sidebar-menu-vertical-on-open"
                                >
                                    <div
                                        onClick={() => {
                                            setShowDropdown(false)
                                        }}
                                    >
                                        <MenuItem label="Sign out" icon={<BoxArrowLeft className="bi" />} />
                                    </div>
                                </IconMenuItem>
                            </div>
                        </div>
                    </>
                }
            />
            <p className="p-3 bg-body">Resize the browser to see how the sidebar and its items behave.</p>
        </div>
    )
}
