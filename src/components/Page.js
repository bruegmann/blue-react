import React, { useEffect, useRef, useState } from "react";
import cx from "classnames"
import Header from "./Header.js";
import Body from "./Body";
import Utilities from "./Utilities.js";
import PropTypes from "prop-types";

function Page({ children, title }) {
    const [hasHeader, setHasHeader] = useState(false)
    const elementRef = useRef(null)

    useEffect(() => {
        Utilities.registerFluentBtns()
    })

    useEffect(() => {
        if (elementRef && elementRef.current) {
            const headerElement = elementRef.current.querySelector(".blue-app-header")
            setHasHeader(headerElement !== null && headerElement !== undefined)
        }
    }, [elementRef])

    useEffect(() => {
        if (title) {
            document.querySelector("title").innerText = title
        }
    }, [title])

    return (
        <div className={cx("blue-app-page-wrapper", { "hasHeader": hasHeader })} ref={elementRef}>
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