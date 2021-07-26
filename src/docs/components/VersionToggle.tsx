import React, { useState } from "react"
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap"

export function VersionToggle({ className }: { className?: string }) {
    const [show, setShow] = useState<boolean>(false)
    const toggle = () => setShow(!show)

    return (
        <Dropdown isOpen={show} toggle={toggle} className={className}>
            <DropdownToggle caret color="light">/v6</DropdownToggle>
            <DropdownMenu style={{ minWidth: "5rem" }} right>
                <DropdownItem href="/blue-react/v7/">/v7</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}