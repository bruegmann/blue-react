import { useState } from "react"
import MenuItem from "../../../components/MenuItem"
import { BrightnessHigh, BrightnessHighFill } from "react-bootstrap-icons"

export default function Current() {
    const [currentItem, setCurrentItem] = useState("item-1")

    return (
        <div className="vstack">
            <MenuItem
                iconBefore={
                    <>
                        <BrightnessHigh className="blue-menu-item-current-hidden" />
                        <BrightnessHighFill className="blue-menu-item-default-hidden" />
                    </>
                }
                label="Item 1"
                current={currentItem === "item-1"}
                onClick={() => setCurrentItem("item-1")}
            />

            <MenuItem
                iconBefore={
                    <>
                        <BrightnessHigh className="blue-menu-item-current-hidden" />
                        <BrightnessHighFill className="blue-menu-item-default-hidden" />
                    </>
                }
                label="Item 2"
                current={currentItem === "item-2"}
                onClick={() => setCurrentItem("item-2")}
            />
        </div>
    )
}
