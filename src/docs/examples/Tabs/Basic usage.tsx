import Tab from "../../../components/Tab"
import Tabs from "../../../components/Tabs"

export default function BasicUsage() {
    return (
        <Tabs>
            <Tab label="Tab 1" active>
                Hello from Tab 1
            </Tab>

            <Tab label="Tab 2" contentClassName="pt-3">
                Hello from Tab 2. This one has some padding top.
            </Tab>

            <Tab label="Tab 3">Hello from Tab 3</Tab>
        </Tabs>
    )
}
