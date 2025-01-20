import HeaderTitle from "../../../components/HeaderTitle"
import SimpleLayout from "../../../components/SimpleLayout"

export default function Usage() {
    return (
        <div className="bg-theme">
            <SimpleLayout header={<HeaderTitle appTitle="My website" />}>
                <div className="h1">Hello World</div>
            </SimpleLayout>
        </div>
    )
}
