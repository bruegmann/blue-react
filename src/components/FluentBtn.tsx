import React from "react"

export interface FluentBtnProps {
    /**
     * Content of the button. You can also set all other props you would give a button or a link.
     */
    children?: any

    className?: string

    /**
     * If set, it will be an `&lta&gt` element. Otherwise it will be a `&ltbutton&gt`.
     */
    href?: string

    /**
     * Can be set for buttons with white background. The glow will be a little bit darker than.
     */
    light?: boolean

    type?: string
    title?: string
    style?: any
    onClick?: (e?: any) => void
}

export default function FluentBtn(props: FluentBtnProps) {
    const ballClassName = "fluent-btn-ball"

    let _props: { [key: string]: any } = {}

    Object.keys(props).forEach(key => {
        if (key !== "light") {
            _props[key] = (props as { [key: string]: any })[key]
        }
    })

    _props.className = "fluent-btn " + (props.className) + (props.light ? " light" : "")

    return (
        props.href ?
            <a
                {..._props}
            >
                <div className={ballClassName} />
                {props.children}
            </a>
            :
            <button
                {..._props}
            >
                <div className={ballClassName} />
                {props.children}
            </button>
    )
}