import React, { DOMAttributes } from "react"
import { createRoot } from "react-dom/client"
import App from "./docs/App"
import * as serviceWorker from "./serviceWorker"

// @ts-ignore
import { Sidebar } from "blue-web-components/packages/sidebar/Sidebar.js"
import "blue-web-components/packages/sidebar/Sidebar.js"

type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }>

declare global {
    namespace JSX {
        interface IntrinsicElements {
            ["blue-sidebar"]: CustomElement<Sidebar>
        }
    }
}

const root = createRoot(document.getElementById("root")!)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
