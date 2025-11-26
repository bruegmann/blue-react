import Button from "../../../components/Button"

export default function Variants() {
    return (
        <div className="vstack gap-2">
            <div className="hstack gap-2">
                <Button label="Default is plain and secondary" />
                <Button
                    label="Make button look like menu item"
                    variant="menu-item"
                />
            </div>
            <div className="hstack gap-2">
                <Button label="Primary" color="primary" />
                <Button label="Secondary" />
                <Button label="Success" color="success" />
                <Button label="Danger" color="danger" />
                <Button label="Warning" color="warning" />
                <Button label="Info" color="info" />
                <Button label="Light" color="light" />
                <Button label="Dark" color="dark" />
            </div>
            <div className="hstack gap-2">
                <Button label="Primary" color="primary" variant="plain" />
                <Button label="Secondary" variant="plain" />
                <Button label="Success" color="success" variant="plain" />
                <Button label="Danger" color="danger" variant="plain" />
                <Button label="Warning" color="warning" variant="plain" />
                <Button label="Info" color="info" variant="plain" />
                <Button label="Light" color="light" variant="plain" />
                <Button label="Dark" color="dark" variant="plain" />
            </div>
            <div className="hstack gap-2">
                <Button label="Primary" color="primary" variant="filled" />
                <Button label="Secondary" variant="filled" />
                <Button label="Success" color="success" variant="filled" />
                <Button label="Danger" color="danger" variant="filled" />
                <Button label="Warning" color="warning" variant="filled" />
                <Button label="Info" color="info" variant="filled" />
                <Button label="Light" color="light" variant="filled" />
                <Button label="Dark" color="dark" variant="filled" />
            </div>
            <div className="hstack gap-2">
                <Button label="Primary" color="primary" variant="outline" />
                <Button label="Secondary" variant="outline" />
                <Button label="Success" color="success" variant="outline" />
                <Button label="Danger" color="danger" variant="outline" />
                <Button label="Warning" color="warning" variant="outline" />
                <Button label="Info" color="info" variant="outline" />
                <Button label="Light" color="light" variant="outline" />
                <Button label="Dark" color="dark" variant="outline" />
            </div>
            <div className="hstack gap-2">
                <Button label="Primary" color="primary" variant="link" />
                <Button label="Secondary" variant="link" />
                <Button label="Success" color="success" variant="link" />
                <Button label="Danger" color="danger" variant="link" />
                <Button label="Warning" color="warning" variant="link" />
                <Button label="Info" color="info" variant="link" />
                <Button label="Light" color="light" variant="link" />
                <Button label="Dark" color="dark" variant="link" />
            </div>
        </div>
    )
}
