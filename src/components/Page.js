import React, { Children, useEffect, useState } from "react";
import cx from "classnames"
import Header from "./Header.js";
import Body from "./Body.js";
import Utilities from "./Utilities.js";
import PropTypes from "prop-types";

function Page({ children, title }) {
    const [hasHeader, setHasHeader] = useState(false)

    useEffect(() => {
        Utilities.registerFluentBtns()
    })

    useEffect(() => {
        if (children) {
            const childrenTypeNames = Children.map(children, (child => child?.type?.name))
            setHasHeader(childrenTypeNames.includes("Header"))
        }
    }, [children])

    useEffect(() => {
        if (title) {
            document.querySelector("title").innerText = title
        }
    }, [title])

    return (
        <div className={cx("blue-app-page-wrapper", { "hasHeader": hasHeader })}>
            {children}
        </div>
    )
}

/**
 * @deprecated Import the component seperated with `import { Header } from "blue-react"`.
 */
Page.Header = Header;

/**
 * @deprecated Import the component seperated with `import { Body } from "blue-react"`.
 */
Page.Body = Body;

Page.propTypes = {
    /**
     * @deprecated This isn't necessary anymore to use Actions on a page.
     */
    hasActions: PropTypes.bool,

    /**
    * Will be set to the document's `<title>` tag.
    */
    title: PropTypes.string
}

export default Page;