import { ArrowRight, Backpack } from "react-bootstrap-icons"
import Button from "../../../components/Button"

export default function WithIcon() {
    return (
        <div className="hstack gap-2">
            <Button
                iconBefore={<Backpack />}
                label="Button with icon before text"
            />
            <Button
                label="Button with icon after text"
                iconAfter={<ArrowRight />}
            />
            <Button
                label="Icon will transform on hover"
                className="icon-link-hover"
                iconAfter={<ArrowRight />}
            />
        </div>
    )
}
