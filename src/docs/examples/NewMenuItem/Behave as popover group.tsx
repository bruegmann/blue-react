import NewMenuItem from "../../../components/NewMenuItem"

export default function AsPopoverGroupExample() {
    return (
        <NewMenuItem label="Open popover" as="popover-group">
            <NewMenuItem label="Sub item 1" />
            <NewMenuItem label="Sub longer item 2" />
        </NewMenuItem>
    )
}
