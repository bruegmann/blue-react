import React, { useContext } from "react"
import MenuItem, { MenuItemProps } from "./MenuItem"
import { ActionMenuContext } from "./ActionMenu"

export interface ActionMenuItemProps extends MenuItemProps {}

/**
 * @deprecated Use `MenuItem` instead. Special `ActionMenu` functionality is now handles with CSS by Blue Web.
 *
 * Use this instead of `MenuItem` when you want to use it inside an `ActionMenu` to make it appear as a dropdown.
 *
 * It basically is a shortcut. Instead of writing:
 *
 * ```tsx
 * <ActionMenu>
 *     <div className="position-relative z-1">
 *         <MenuItem
 *             label="Parent"
 *             supportOutside
 *             dropdownClassName={`position-md-absolute end-0 d-flex flex-column`}
 *         >
 *             <MenuItem label="Item 1" />
 *         </MenuItem>
 *     </div>
 * </ActionMenu>
 * ```
 *
 * you can write:
 * ```tsx
 * <ActionMenu>
 *     <ActionMenuItem label="Parent">
 *         <MenuItem label="Item 1" />
 *     </MenuItem>
 * </ActionMenu>
 * ```
 *
 * The responsive utility class for absolute position (`position-md-absolute` in this example) is automatically added based on the `break` param of the parent `ActionMenu`.
 */
export default function ActionMenuItem({
    children,
    ...props
}: ActionMenuItemProps) {
    const { breakOption } = useContext(ActionMenuContext)
    return (
        <div className="position-relative">
            <MenuItem
                {...props}
                supportOutside
                dropdownClassName={`position-${breakOption}-absolute end-0 d-flex flex-column`}
            >
                {children}
            </MenuItem>
        </div>
    )
}
