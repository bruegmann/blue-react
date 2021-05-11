import React from "react"
import Switch from "./Switch"

export interface ActionMenuSwitchProps {
    className?: string
    checked?: boolean
    onChange?: () => void

    /**
     * Beschriftung des Controls
     */
    label?: any
}

/**
 * <span class="badge badge-secondary">Deprecated</span> When using <strong>Actions</strong>, please use <strong>SwitchMenuItem</strong> instead.<br>
 * Switch for the Action Menu.
 */
export default function ActionMenuSwitch(props: ActionMenuSwitchProps) {
    return (
        <li className="nav-item">
            <a
                href="javascript:void(0)"
                className="nav-link blue-app-actions-menu-item"
                onClick={() => {
                    if (props.onChange) props.onChange()
                }}
            >
                <Switch
                    {...props}
                    elementType="span"
                />

                {props.label &&
                    <span className="blue-app-actions-label">&nbsp;{props.label}</span>
                }
            </a>
        </li>
    )
}