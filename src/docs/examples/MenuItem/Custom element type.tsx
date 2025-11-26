import { ComponentProps } from "react"
import { NavLink } from "react-router-dom"
import MenuItem from "../../../components/MenuItem"

const CustomNavLink = ({
    activeClassName,
    ...props
}: ComponentProps<NavLink>) => <NavLink activeClassName="current" {...props} />

export default function CustomElementTypeExample() {
    return (
        <>
            <p>
                You might want to use Menu Item for navigating with your own
                router solution. For this case you can use the{" "}
                <code>elementType</code> prop to set the link component of your
                router library.
                <br />
                In this example I use React Router and create{" "}
                <code>CustomNavLink</code> and make sure the class name for the
                active link is <code>current</code>.
            </p>

            <MenuItem
                elementType={CustomNavLink}
                label="Menu Item"
                to="/component/MenuItem"
            />
        </>
    )
}
