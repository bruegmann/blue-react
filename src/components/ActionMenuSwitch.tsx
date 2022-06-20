import React from "react"
import Switch, { SwitchProps } from "./Switch"

export interface ActionMenuSwitchProps extends SwitchProps {
    onChange?: () => void
    label?: any
}

/**
 * @deprecated
 * Use a solution with Bootstrap's `.form-check.form-switch` or `MenuItem` with a switch icon.
 * Switch for the Action Menu.
 */
export default function ActionMenuSwitch({ label, ...props }: ActionMenuSwitchProps) {
    return (
        <li className="nav-item">
            <a
                href="javascript:void(0)"
                className="nav-link blue-actions-menu-item"
                onClick={() => {
                    if (props.onChange) props.onChange()
                }}
            >
                <Switch {...props} elementType="span" />

                {label && <span className="blue-actions-label">&nbsp;{label}</span>}
            </a>
        </li>
    )
}
