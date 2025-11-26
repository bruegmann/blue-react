import { ComponentProps } from "react"
import { NavLink } from "react-router-dom"

export default function CustomNavLink({
    activeClassName,
    ...props
}: ComponentProps<NavLink>) {
    return <NavLink activeClassName="current" {...props} />
}
