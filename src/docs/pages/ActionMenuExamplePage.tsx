import React, { useState } from "react"
import Page from "../../components/Page"
import Body from "../../components/Body"
import Header from "../../components/Header"
import MenuItem from "../../components/MenuItem"
import HeaderTitle from "../../components/HeaderTitle"
import ActionMenu from "../../components/ActionMenu"
import { CloudSleet, ThreeDotsVertical } from "react-bootstrap-icons"
import { breakOption } from "../../components/shared"
import ActionMenuSwitch from "../../components/ActionMenuSwitch"

export const ActionMenuExamplePage = () => {
    const [breakProp, setBreakProp] = useState<breakOption | "none">("md")
    const [checked, setChecked] = useState(false)

    return (
        <Page>
            <Header>
                <HeaderTitle appTitle="My app with an action menu" />

                <ActionMenu toggleIcon={<ThreeDotsVertical />} break={breakProp}>
                    <MenuItem label="I'm a MenuItem" />

                    <div>
                        <MenuItem label="I'm a MenuItem with children" supportOutside icon={<CloudSleet />}>
                            <MenuItem label="I'm a MenuItem" />
                            <MenuItem label="Another one" />
                        </MenuItem>
                    </div>

                    <ActionMenuSwitch label="Click me" checked={checked} onChange={() => setChecked(!checked)} />
                </ActionMenu>
            </Header>
            <Body className="mt-5">
                <label className="my-1 me-2" htmlFor="ActionMenuExamplePage-breakProp">
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
