import Tab from "../../../components/Tab"
import Tabs from "../../../components/Tabs"

export default function UnderlineExample() {
    return (
        <Tabs underline>
            <Tab label="Tab 1" active>
                Hello from Tab 1
            </Tab>

            <Tab label="Tab 2">
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
            </Tab>

            <Tab label="Tab 3">Hello from Tab 3</Tab>
        </Tabs>
    )
}
