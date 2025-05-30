import { ReactNode, useContext, useId } from "react"
import { TabsNameContext } from "./Tabs"

export interface TabProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
    children?: ReactNode
    className?: string
    contentClassName?: string
    active?: boolean
}
/**
 * Always use together with `Tabs`.
 */
export default function Tab({
    label,
    children,
    className,
    contentClassName,
    active,
    ...rest
}: TabProps) {
    const tabsName = useContext(TabsNameContext)
    const tabId = "Tab_" + useId()
    const tabPanelId = "Tab_Panel_" + useId()

    return (
        <>
            <input
                type="radio"
                name={tabsName}
                role="tab"
                id={tabId}
                aria-label={label}
                aria-controls={tabPanelId}
                className={`blue-tab nav-link ${className}`}
                defaultChecked={active}
                {...rest}
            />
            <div
                role="tabpanel"
                id={tabPanelId}
                aria-labelledby={tabId}
                tabIndex={0}
                className={`blue-tab-content ${contentClassName}`}
            >
                {children}
            </div>
        </>
    )
}
