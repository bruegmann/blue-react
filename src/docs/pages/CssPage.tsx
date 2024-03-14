import { CSSProperties, useEffect, useState } from "react"
import { useParams, NavLink, Link } from "react-router-dom"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { synthwave84 as syntaxHighlighterStyle } from "react-syntax-highlighter/dist/esm/styles/prism"
import Page from "../../components/Page"

import Search from "../../components/Search"
import { appTitle } from "../Global"
import PageBodyWithSide from "../components/PageBodyWithSide"
import TestCssVars from "../components/TestCssVars"
import HashLink from "../components/HashLink"
import { NormalScrollbarDemo } from "../components/NormalScrollbarDemo"
import { CheckCircle, CheckCircleFill } from "react-bootstrap-icons"
import ButtonsExample from "../examples/css/ButtonsExample"

const sections = [
    {
        title: "Buttons",
        body: (
            <>
                <article className="mb-5">
                    <HashLink id="blue-btn-smooth">
                        <code>.blue-btn-soft-*</code>
                    </HashLink>
                    <p>
                        A soft variant of Bootstrap's buttons. Always use together with <code>.btn</code>!
                    </p>

                    <ButtonsExample variant="soft" />
                </article>

                <article className="mb-5">
                    <HashLink id="blue-btn-plain">
                        <code>.blue-btn-plain-*</code>
                    </HashLink>
                    <p>
                        A plain variant of Bootstrap's buttons. Always use together with <code>.btn</code>!
                    </p>

                    <ButtonsExample variant="plain" />
                </article>

                <article className="mb-5">
                    <HashLink id="btn-black">
                        <code>.btn-black</code>, <code>.btn-outline-black</code>
                    </HashLink>
                    <p>Additionally Bootstrap theme variable "black" for always black buttons.</p>
                </article>

                <article className="mb-5">
                    <HashLink id="btn-white">
                        <code>.btn-white</code>, <code>.btn-outline-white</code>
                    </HashLink>
                    <p>Additionally Bootstrap theme variable "white" for always white buttons.</p>
                </article>

                <article className="mb-5">
                    <HashLink id="blue-btn-silent">
                        <code>.blue-btn-silent</code>
                    </HashLink>
                    <p>
                        Removes border when the button is in normal state (no hover). Should be used together with{" "}
                        <code>.btn-outline-*</code>.<br />
                        Usage:
                    </p>
                    <button className="btn btn-outline-secondary blue-btn-silent">Button</button>
                    <SyntaxHighlighter
                        style={syntaxHighlighterStyle}
                        language="html"
                    >{`<button className="btn btn-outline-secondary blue-btn-silent">Button</button>`}</SyntaxHighlighter>
                </article>
            </>
        )
    },
    {
        title: "Scrollbar",
        body: (
            <>
                <article className="mb-5">
                    <HashLink id="blue-normal-scrollbar">
                        <code>.blue-normal-scrollbar</code>
                    </HashLink>
                    <p>
                        {
                            "Normalizes elements in areas which still should not have the theme colors for their scrollbars. "
                        }
                        <NormalScrollbarDemo />
                    </p>
                </article>

                <article className="mb-5">
                    <HashLink id="blue-scroll-shadow">
                        <code>.blue-scroll-shadow</code>
                    </HashLink>
                    <p>
                        {"Adds shadow if area is scrollable. "}
                        <NormalScrollbarDemo />
                    </p>
                </article>
            </>
        )
    },
    {
        title: "Sidebar",
        body: (
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
                        <code>.blue-sidebar-pseudo-hidden-on-open</code>,{" "}
                        <code>.blue-sidebar-before-hidden-on-open</code>,{" "}
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
                        If you want to change direction inside of <code>.blue-sidebar-menu-horizontal-on-open</code>{" "}
                        back to vertical, use <code>.blue-sidebar-menu-vertical-on-open</code>. Might be useful for
                        dropdowns.
                    </p>
                </article>
            </>
        )
    },
    {
        title: "Tooltip",
        body: (
            <>
                <article className="mb-5">
                    <HashLink id="blue-tooltip-up">
                        <code>.blue-tooltip-up</code>, <code>.blue-tooltip-down</code>, <code>.blue-tooltip-start</code>
                        , <code>.blue-tooltip-end</code>
                    </HashLink>
                    <p>
                        Data Attribute of element is used as an tooltip. To be used together with{" "}
                        <code>data-tooltip</code>.<br />
                        Usage:
                    </p>
                    <strong
                        data-tooltip="Put your tooltip text here. It can also become pretty long if you want to."
                        className="blue-tooltip-up"
                    >
                        Hover me!
                    </strong>
                    <SyntaxHighlighter
                        style={syntaxHighlighterStyle}
                        language="html"
                    >{`<strong data-tooltip="Put your tooltip text here" className="blue-tooltip-up">
    Hover me!
</strong>`}</SyntaxHighlighter>
                </article>

                <article className="mb-5">
                    <HashLink id="blue-tooltip-nowrap">
                        <code>.blue-tooltip-nowrap</code>
                    </HashLink>
                    <p>
                        Avoid wrapping in the tooltip text. Together with CSS variable{" "}
                        <code>--bs-tooltip-max-width</code> you can limit the width.
                        <br />
                        Usage:
                    </p>
                    <strong
                        data-tooltip="Put your tooltip text here. It can also become pretty long if you want to."
                        className="blue-tooltip-start blue-tooltip-nowrap"
                        style={{ "--bs-tooltip-max-width": "600px" } as CSSProperties}
                    >
                        Or me! My tooltip is not wrapping and is just one line. With a css variable for max-width.
                    </strong>
                    <SyntaxHighlighter style={syntaxHighlighterStyle} language="html">{`<strong
    data-tooltip="Put your tooltip text here. It can also become pretty long if you want to."
    className="blue-tooltip-start blue-tooltip-nowrap"
    style={{ "--bs-tooltip-max-width": "600px" } as CSSProperties}
>
    Or me! My tooltip is not wrapping and is just one line.
</strong>`}</SyntaxHighlighter>
                </article>
            </>
        )
    },
    {
        title: "Visibility",
        body: (
            <>
                <article className="mb-5">
                    <HashLink id="blue-opacity-hover">
                        <code>.blue-opacity-hover</code>, <code>.blue-opacity-hover-content-active</code>,{" "}
                        <code>.blue-opacity-hover-content-default</code>
                    </HashLink>
                    <p>
                        With <code>.blue-opacity-hover</code> you can hide things by default and let them appear when
                        the user hovers the area around it or focuses an element inside.
                        <br />
                        This way you can simplify the UI a bit and make controls disappear when they are not needed. On
                        touch screens the elements will always be visible.
                        <br />
                        Usage:
                    </p>

                    <div className="card blue-opacity-hover p-3 flex-row justify-content-between">
                        <h5 className="blue-opacity-hover-content-default">Hover here to see a button</h5>
                        <input
                            type="text"
                            className="form-control me-1"
                            placeholder="When you focus me, the button should appear too"
                        />
                        <button className="btn btn-secondary blue-opacity-hover-content-active">Hey there</button>
                    </div>
                    <SyntaxHighlighter
                        style={syntaxHighlighterStyle}
                        language="html"
                    >{`<div className="card blue-opacity-hover p-3 flex-row justify-content-between">
    <h5 className="blue-opacity-hover-content-default">Hover here to see a button</h5>
    <input
        type="text"
        className="form-control me-1"
        placeholder="When you focus me, the button should appear too"
    />
    <button className="btn btn-secondary blue-opacity-hover-content-active">Hey there</button>
</div>`}</SyntaxHighlighter>
                </article>

                <article className="mb-5">
                    <HashLink id="blue-d-hover">
                        <code>.blue-d-hover</code>, <code>.blue-d-hover-content-active</code>,{" "}
                        <code>.blue-d-hover-content-default</code>
                    </HashLink>
                    <p>
                        <code>.blue-d-hover</code> is similar to <code>.blue-opacity-hover</code>, but the elements will
                        disappear and appear with the <code>display</code> property.
                        <br />
                        It is ideal if you want to replace something with something else when the user hovers. On the
                        example I used it to change the edit and delete icons from lineout to filled when hovering.
                        <br />
                        Usage:
                    </p>

                    <button className="btn btn-secondary blue-d-hover d-inline-flex align-items-center gap-1">
                        <CheckCircle className="blue-d-hover-content-default" />
                        <CheckCircleFill className="blue-d-hover-content-active" /> Hover to fill the icon
                    </button>
                    <SyntaxHighlighter
                        style={syntaxHighlighterStyle}
                        language="html"
                    >{`<button className="btn btn-secondary blue-d-hover d-inline-flex align-items-center gap-1">
    <CheckCircle className="blue-d-hover-content-default" />
    <CheckCircleFill className="blue-d-hover-content-active" /> Hover to fill the icon
</button>`}</SyntaxHighlighter>
                </article>
            </>
        )
    },
    {
        title: "CSS Variables",
        body: (
            <>
                <TestCssVars />

                <p className="mt-3">
                    <a
                        href="https://github.com/bruegmann/blue-react/blob/b92f6ed83d8dfa616101eca0c79efad5ce961899/dist/styles/_variables.scss#L101"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        See all available CSS variables.
                    </a>
                </p>
            </>
        )
    }
]

export const CssPage = () => {
    const { selectedSection } = useParams<any>()

    // State of input Search value
    const [value, setValue] = useState<string>("")

    useEffect(() => {
        const routerPageElement = document.querySelector(".router-page.active")
        if (routerPageElement) {
            routerPageElement.scrollTo(0, 0)
        }
    }, [selectedSection])

    return (
        <Page title={`${selectedSection ? `${selectedSection} - ` : ""}CSS - ${appTitle}`}>
            <PageBodyWithSide
                side={
                    <>
                        <Search
                            body
                            onChange={({ target }) => {
                                setValue(target.value)
                            }}
                            value={value}
                            className="mb-1 ms-5 ms-md-0 neu-input"
                            placeholder="Search..."
                        />

                        <div
                            className="overflow-auto"
                            style={{
                                maxHeight: "calc(100vh - 5rem)"
                            }}
                        >
                            <nav className="nav nav-pills flex-column">
                                <NavLink to="/css" exact className="nav-link">
                                    All
                                </NavLink>
                                {sections.map(
                                    (s, i) =>
                                        (value === "" ||
                                            JSON.stringify(s).toLowerCase().includes(value.toLowerCase())) && (
                                            <div key={i} className="nav-item">
                                                <NavLink
                                                    to={`/css/${encodeURIComponent(s.title)}`}
                                                    className="nav-link"
                                                >
                                                    {s.title}
                                                </NavLink>
                                            </div>
                                        )
                                )}
                            </nav>
                        </div>
                    </>
                }
            >
                <h1 className="page-header">CSS</h1>

                <p className="lead">
                    Some additions and helper classes in CSS. Keep in mind that some classes are designed to be used
                    together with{" "}
                    <a href="https://getbootstrap.com" target="_blank" rel="noopener">
                        Bootstrap classes
                    </a>
                    .
                </p>

                {sections.map(
                    (s, i) =>
                        (!selectedSection || selectedSection === s.title) && (
                            <article key={i} id={"section-" + encodeURIComponent(s.title)}>
                                <h2 className="page-header blue-opacity-hover">
                                    {s.title}{" "}
                                    <Link
                                        to={`/css/${encodeURIComponent(s.title)}`}
                                        className="blue-opacity-hover-content-active"
                                    >
                                        #
                                    </Link>
                                </h2>
                                {s.body}
                            </article>
                        )
                )}
            </PageBodyWithSide>
        </Page>
    )
}
