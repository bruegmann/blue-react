import Actions from "../../../components/Actions"
import HeaderTitle from "../../../components/HeaderTitle"
import MenuItem from "../../../components/LegacyMenuItem"
import SimpleLayout from "../../../components/SimpleLayout"

export default function InsideLayoutHeaderDemo() {
    return (
        <div
            style={{
                background: "var(--blue-app-bg)",
                width: "400px"
            }}
        >
            <SimpleLayout
                header={
                    <>
                        <HeaderTitle>My page</HeaderTitle>

                        <Actions>
                            <MenuItem label="Child 1" icon={<>🌍</>} />
                            <MenuItem label="Child 2" icon={<>🌑</>} />
                            <MenuItem label="Child 3" icon={<>☀️</>} />
                            <MenuItem label="Child 4" icon={<>🚀</>} />
                            <MenuItem label="Child 5" icon={<>🌌</>} />
                        </Actions>
                    </>
                }
                style={{ height: "400px" }}
            />
        </div>
    )
}
