import MenuItem from "../../components/MenuItem"
import SidebarMenu from "../../components/SidebarMenu"
import IconMenuItem from "../../components/IconMenuItem"
import { BoxArrowLeft, Gear, List, Person } from "react-bootstrap-icons"

export default function IconMenuItemExample() {
    return (
        <div className="bg-primary position-relative">
            <SidebarMenu
                sidebarClass="position-static shadow-none overflow-visible"
                menuClass="overflow-visible"
                bottomContent={
                    <div className="d-flex flex-wrap">
                        <IconMenuItem
                            href="#record"
                            outerClass="flex-fill"
                            label="User settings"
                            icon={<Person className="bi" />}
                        />

                        <IconMenuItem href="#" outerClass="flex-fill" label="Settings" icon={<Gear className="bi" />} />

                        <IconMenuItem
                            href="#"
                            outerClass="flex-fill"
                            label="Sign out"
                            icon={<BoxArrowLeft className="bi" />}
                        />
                    </div>
                }
            >
                <MenuItem
                    icon={<List className="bi" />}
                    label="Toggle menu"
                    onClick={() => {
                        window.blueLayoutRef.setState({
                            expandSidebar: !window.blueLayoutRef.state.expandSidebar
                        })
                    }}
                />

                <MenuItem icon={<span>😅</span>} label="Hello World" />
                <MenuItem icon={<span style={{ transform: "scale(-1, 1)" }}>👀</span>} label="Another normal item" />
            </SidebarMenu>
        </div>
    )
}
