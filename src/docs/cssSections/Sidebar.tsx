import HashLink from "../components/HashLink"

export default function Scrollbar() {
    return (
        <>
            <article className="mb-5">
                <HashLink id="blue-sidebar-exception">
                    <code>.blue-sidebar-exception</code>
                </HashLink>
                <p>Prevents the default behaviour of closing sidebar after clicking an item.</p>
            </article>

            <article className="mb-5">
                <HashLink id="blue-sidebar-bottom">
                    <code>.blue-sidebar-bottom</code>
                </HashLink>
                <p>
                    With Sidebar Bottom, for example, a registered user can be displayed at the bottom left. Usable
                    within <code>&lt;SidebarMenu {"bottomContent={}"} /&gt;</code>.
                </p>
            </article>

            <article className="mb-5">
                <HashLink id="blue-sidebar-hidden-on-open">
                    <code>.blue-sidebar-hidden-on-open</code>
                </HashLink>
                <p>The element is hidden as long as the sidebar is open.</p>
            </article>

            <article className="mb-5">
                <HashLink id="blue-sidebar-pseudo-hidden-on-open">
                    <code>.blue-sidebar-pseudo-hidden-on-open</code>, <code>.blue-sidebar-before-hidden-on-open</code>,{" "}
                    <code>.blue-sidebar-afters-hidden-on-open</code>
                </HashLink>
                <p>
                    Pseudo elements of element are hidden as long as the sidebar is open.{" "}
                    <code>.blue-sidebar-before-hidden-on-open</code> hides <code>::before</code>,
                    <code>.blue-sidebar-after-hidden-on-open</code> hides <code>::after</code> and{" "}
                    <code>.blue-sidebar-pseudo-hidden-on-open</code> will hide both.
                </p>
            </article>

            <article className="mb-5">
                <HashLink id="blue-sidebar-visible-on-open">
                    <code>.blue-sidebar-visible-on-open</code>
                </HashLink>
                <p>The element is visible as long as the sidebar is open.</p>
            </article>

            <article className="mb-5">
                <HashLink id="w-bla-sidebar-width">
                    <code>.w-bla-sidebar-width</code>
                </HashLink>
                <p>
                    Gives element the width of the sidebar, defined with <code>$bla-sidebar-width</code>.
                </p>
            </article>

            <article className="mb-5">
                <HashLink id="blue-sidebar-state">
                    <code>.blue-sidebar-state</code>(<code>.open</code>)
                </HashLink>
                <p>Use this to control the state of the sidebar and sidebar menu items inside.</p>
            </article>

            <article>
                <HashLink id="blue-sidebar-menu-horizontal-on-open">
                    <code>.blue-sidebar-menu-horizontal-on-open</code>
                </HashLink>
                <p>
                    Use this inside of the sidebar to make menus act like horizontal menus when the sidebar is open.
                    Designed for the <code>IconMenuItem</code> component. But might be useful for other scenarios
                    aswell.
                </p>
            </article>

            <article>
                <HashLink id="blue-sidebar-menu-vertical-on-open">
                    <code>.blue-sidebar-menu-vertical-on-open</code>
                </HashLink>
                <p>
                    If you want to change direction inside of <code>.blue-sidebar-menu-horizontal-on-open</code> back to
                    vertical, use <code>.blue-sidebar-menu-vertical-on-open</code>. Might be useful for dropdowns.
                </p>
            </article>
        </>
    )
}
