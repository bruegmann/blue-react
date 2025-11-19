import { DragEvent, useCallback, useState } from "react"
import MenuItem, {
    LegacyMenuItemProps
} from "../../../components/LegacyMenuItem"

export default function MenuItemExample() {
    const bodyMenuItemProps: LegacyMenuItemProps = {
        className: "w-100",
        labelClassName: "d-inline-block",
        caretClassName: "d-inline-block"
    }

    const [itemIDs, setItemIDs] = useState(["1", "2", "3", "4", "5"])

    const dragStart = useCallback((event: DragEvent) => {
        const target = event.target as HTMLElement
        event.dataTransfer.setData("text/plain", target.id)
    }, [])

    const drop = useCallback(
        (event: DragEvent) => {
            event.preventDefault()

            const draggedId = event.dataTransfer.getData("text")
            const dropTargetId = (event.target as HTMLElement).id

            const draggedIndex = itemIDs.indexOf(draggedId)
            const dropTargetIndex = itemIDs.indexOf(dropTargetId)

            const newItemIDs = [...itemIDs]
            newItemIDs.splice(draggedIndex, 1)
            newItemIDs.splice(dropTargetIndex, 0, draggedId)

            setItemIDs(newItemIDs)
        },
        [itemIDs]
    )

    const dragOver = useCallback((event: DragEvent) => {
        event.preventDefault()
    }, [])

    return (
        <>
            <p>
                <strong>Important:</strong> To make draggable menu items work in
                Firefox, the <code>elementType</code> must not be{" "}
                <code>"button"</code>. Set it to something else, like{" "}
                <code>"div"</code>.
            </p>
            <div onDrop={drop} onDragOver={dragOver}>
                {itemIDs.map((id) => (
                    <MenuItem
                        {...bodyMenuItemProps}
                        elementType={"div"}
                        key={id}
                        id={id}
                        draggable
                        onDragStart={dragStart}
                        onDragOver={dragOver}
                        label={`Item ${id}`}
                    />
                ))}
            </div>
        </>
    )
}
