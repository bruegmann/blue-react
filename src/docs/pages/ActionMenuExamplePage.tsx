import { useState } from "react"
import Page from "../../components/Page"
import Body from "../../components/Body"
import Header from "../../components/Header"
import MenuItem from "../../components/MenuItem"
import HeaderTitle from "../../components/HeaderTitle"
import ActionMenu from "../../components/ActionMenu"
import { CloudSleet } from "react-bootstrap-icons"
import { breakOption } from "../../components/shared"

export const ActionMenuExamplePage = () => {
    const [breakProp, setBreakProp] = useState<breakOption | "none">("md")

    return (
        <Page>
            <Header>
                <HeaderTitle appTitle="My app with an action menu" />

                <ActionMenu break={breakProp}>
                    <MenuItem label="I'm a MenuItem" />

                    <div>
                        <MenuItem
                            label="I'm a MenuItem with children"
                            supportOutside
                            icon={<CloudSleet />}
                        >
                            <MenuItem label="I'm a MenuItem" />
                            <MenuItem label="Another one" />
                        </MenuItem>
                    </div>
                </ActionMenu>
            </Header>
            <Body className="mt-5">
                <label
                    className="my-1 me-2"
                    htmlFor="ActionMenuExamplePage-breakProp"
                >
                    <code>break</code> prop
                </label>
                <select
                    className="form-select my-1 me-sm-2"
                    id="ActionMenuExamplePage-breakProp"
                    value={breakProp}
                    onChange={({ target }) => setBreakProp(target.value as any)}
                >
                    <option value="sm">sm</option>
                    <option value="md">md</option>
                    <option value="lg">lg</option>
                    <option value="xl">xl</option>
                    <option value="none">none</option>
                </select>
            </Body>
        </Page>
    )
}
