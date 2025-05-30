import { useId, type ReactNode, createContext } from "react"

export const TabsNameContext = createContext("")

export interface TabsProps {
    children?: ReactNode
    className?: string
    /**
     * By default, tabs will have styling of Bootstrap `.nav.nav-tabs`.
     * Set this property to `true` to use `.nav.nav-underline` instead.
     */
    underline?: boolean
}
/**
 * Implementation of Blue Web Tabs. Allows to use tabs without JavaScript.
 * Use together with `Tab`.
 */
export default function Tabs({ children, className, underline }: TabsProps) {
    const tabsName = "TabList-" + useId()
    return (
        <div role="tablist" className={`blue-tabs nav nav-${underline ? "underline" : "tabs"} ${className}`}>
            <TabsNameContext.Provider value={tabsName}>{children}</TabsNameContext.Provider>
        </div>
    )
}


