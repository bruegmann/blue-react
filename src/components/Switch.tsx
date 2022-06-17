import React, { createElement, ReactNode } from "react"

export interface SwitchProps {
    className?: string
    checked?: boolean
    onChange?: (event: React.ChangeEvent) => void

    /**
     * Sets label inside of the switch. If you set this, you should also set the className "lg" to make the switch larger.
     */
    sliderLabel?: string

    /**
     * You can change the type of the wrapper element. If you do, the `onChange` event might not be triggered.
     */
    elementType?: string

    disabled?: boolean

    /**
     * Set prop to use the older look and feel. Will disappear in future releases.
     */
    legacy?: boolean

    label?: ReactNode | string
}

/**
 * @deprecated
 * Use Bootstrap's `.form-check.form-switch` instead:
 * https://getbootstrap.com/docs/5.2/forms/checks-radios/#switches
 *
 * For now, this component acts as proxy for Bootstrap's Switch.
 * To place a label next to the switch, use the new `label` prop.
 *
 * Migrate to Blue React 8.4.0 and use legacy support: Set the `label` with a string. Or set the `legacy` prop to use the previous look and behaviour.
 */
export default function Switch({
    className,
    checked,
    onChange,
    sliderLabel,
    disabled,
    elementType = "label",
    legacy = false,
    label
}: SwitchProps) {
    if (legacy === true) {
        return createElement(
            elementType,
            {
                className: "switch " + (disabled ? "disabled " : "") + className
            },
            <>
                <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled} role="switch" />
                <span className="slider round" data-label={sliderLabel} />
            </>
        )
    } else {
        return createElement(
            elementType,
            {
                className: "form-check form-switch " + (disabled ? "disabled " : "") + className
            },
            <>
                <input
                    type="checkbox"
                    role="switch"
                    className="form-check-input"
                    checked={checked}
                    onChange={onChange}
                    disabled={disabled}
                />
                <span className="form-check-label">{label}</span>
            </>
        )
    }
}
