import MenuItem, {
    LegacyMenuItemProps
} from "../../../components/LegacyMenuItem"
import { EmojiHeartEyesFill } from "react-bootstrap-icons"

export default function MenuItemExample() {
    const bodyMenuItemProps: LegacyMenuItemProps = {
        className: "w-100",
        labelClassName: "d-inline-block",
        caretClassName: "d-inline-block"
    }

    return (
        <>
            <p>Usage in body without sidebar or action bar</p>

            <div className="d-flex flex-column flex-md-row gap-3 w-100">
                <article className="flex-fill">
                    <h4 className="mt-4 mb-3">Single menu item</h4>
                    <MenuItem
                        {...bodyMenuItemProps}
                        icon={<EmojiHeartEyesFill />}
                        label="John Boy"
                    />
                </article>

                <article className="flex-fill">
                    <h4 className="mt-4 mb-3">Dropdown</h4>
                    <MenuItem
                        {...bodyMenuItemProps}
                        icon={<EmojiHeartEyesFill />}
                        label="John Boy"
                    >
                        <MenuItem
                            {...bodyMenuItemProps}
                            icon={<EmojiHeartEyesFill />}
                            label="I am a child item"
                        />
                    </MenuItem>
                </article>

                <article className="flex-fill">
                    <h4 className="mt-4 mb-3">Split dropdown</h4>
                    <div
                        className="d-grid w-100"
                        style={{
                            gridTemplateAreas: '"a b" "c c"',
                            gridTemplateColumns:
                                "minmax(auto, calc(100% - 3rem)) 3rem"
                        }}
                    >
                        <MenuItem
                            {...bodyMenuItemProps}
                            style={{ gridArea: "a" }}
                            icon={<EmojiHeartEyesFill />}
                            label="John Boy"
                        />
                        <MenuItem
                            {...bodyMenuItemProps}
                            style={{ gridArea: "b" }}
                            dropdownStyle={{ gridArea: "c" }}
                            supportOutside
                        >
                            <MenuItem
                                {...bodyMenuItemProps}
                                icon={<EmojiHeartEyesFill />}
                                label="I am a child item"
                            />
                        </MenuItem>
                    </div>
                </article>
            </div>
        </>
    )
}
