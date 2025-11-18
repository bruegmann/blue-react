import NewMenuItem from "../../../components/NewMenuItem"

export default function PopoverExample() {
    return (
        <NewMenuItem label="Open popover">
            <div className="vstack">
                <NewMenuItem label="Sub item 1" />
                <NewMenuItem label="Sub longer item 2" />
            </div>
        </NewMenuItem>
    )
}
