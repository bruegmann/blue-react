import MenuItem from "../../../components/MenuItem"

export default function AsPopoverGroupExample() {
    return (
        <MenuItem label="Open popover" as="popover-group">
            <MenuItem label="Sub item 1" />
            <MenuItem label="Sub longer item 2" />
        </MenuItem>
    )
}
