import { Link } from "react-router-dom"
import HeaderTitle from "../../../components/HeaderTitle"

export default function BreadcrumbExample() {
    return (
        <HeaderTitle
            breadcrumb={[
                <Link to="/">Home page</Link>,
                <Link to="/component/HeaderTitle">This component</Link>,
                "Current page"
            ]}
        />
    )
}
