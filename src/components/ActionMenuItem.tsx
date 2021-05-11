import React from "react"
import MenuItem from "./MenuItem"

export interface ActionMenuItemProps {
    /**
     * Extends className of the `.nav-item` element.
     */
    navItemClassName?: string

    /**
     * Extends className of the `.nav-link` element.
     */
    className?: string

    /**
    * URL.
    */
    href?: string

    /**
    * onClick Eventhandler.
    */
    onClick?: (e?: any) => void

    /**
     * className for the icon.
     */
    icon?: string

    /**
     * Label for the link.
     */
    label?: any

    /**
     * Tooltip on hover.
     */
    title?: string

    /**
     * Set `true` to use the old ActionMenuItem. Otherwise this component is just an alias to MenuItem.
     */
    useDeprecated?: boolean
}


/**
 * @deprecated This is only an alias to MenuItem, please use MenuItem instead.
 * <span class="badge badge-warning">Deprecated</span> This is just an alias for <code>MenuItem</code>, so you should use that component instead.
 * If you need the older <code>ActionMenuItem</code>, make sure to the prop <code>useDeprecated</code>.<br/>
 * List Item and Link for the current Action Menu.
 */
export default function ActionMenuItem(props: ActionMenuItemProps) {
    if (props.useDeprecated) {
        let _props = {} as { [key: string]: any }

        Object.keys(props).map(key => {
            if (key !== "navItemClassName" && key !== "icon" && key !== "label") {
                _props[key] = (props as { [key: string]: any })[key]
            }
        })

        return (
            <li className={"nav-item " + props.navItemClassName}>
                <a {..._props} href={props.href} className={"nav-link blue-app-actions-menu-item " + props.className}>
                    <span className={props.icon} />
                    {props.label &&
                        <span className="blue-app-actions-label">
                            {props.icon &&
                                <span>&nbsp;</span>
                            }
                            {props.label}
                        </span>
                    }
                </a>
            </li>
        )
    }
    else {
        return <MenuItem {...props} />
    }
}