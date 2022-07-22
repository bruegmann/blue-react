import React, { useEffect, useState, useCallback } from "react"

export interface UseMatchOptions {
    // Run `decodeURIComponent` for each param value.
    decodeParams?: boolean
}

export const useMatch = (options: UseMatchOptions | undefined = {}) => {
    const { decodeParams }: UseMatchOptions = Object.assign({ decodeParams: true }, options)

    const getMatch = () => {
        let match = window.location.hash
            .replace("#", "")
            .split("/")
            .filter((n) => n !== "")

        if (decodeParams === true) {
            match = match.map((n) => decodeURIComponent(n))
        }

        return match
    }

    const [match, setMatch] = useState<string[]>(getMatch)

    const hashChangeHandler = useCallback(() => {
        setMatch(getMatch())
    }, [])

    useEffect(() => {
        window.addEventListener("hashchange", hashChangeHandler)
        return () => {
            window.removeEventListener("hashchange", hashChangeHandler)
        }
    }, [])

    return match
}

export interface Route {
    name: string
    component: JSX.Element
}

export interface RouterProps {
    /**
     * Will be rendered, when there is no current route / hash.
     */
    defaultRouteName?: string

    /**
     * Registers routes for the built-in routing system. Example: `[{name: "home", component: <HomePage />}]`
     */
    routes: Route[]
}

/**
 * A relatively simple Router System based on hash URLs. If you need something more advanced, you should use
 * something like [React Router](https://github.com/remix-run/react-router#readme) or [Wouter](https://github.com/molefrog/wouter#readme).
 *
 * ## `useMatch` hook
 * Use the hook inside of a React Functional Component to get easy access to hash params. The function returns an array of current params.
 * ### Example
 * ```javascript
 * const [routeName, param2] = useMatch()
 *
 * useEffect(() => {
 *     console.log("Do something with " + param2)
 * }, [param2])
 * ```
 * The function returns an array of current hash params.
 *
 * ### Options
 * You can pass options like this: `useMatch({ decodeParams: false })`
 * * `decodeParams` - Run `decodeURIComponent` for each param value. - Default: `true`
 */
export default function Router({ defaultRouteName = "home", routes }: RouterProps) {
    const match = useMatch()

    const [history, setHistory] = useState<string[][]>([match])
    const [activeRouteName] = history[history.length - 1]

    useEffect(() => {
        if (match.length > 0) {
            setHistory([...history, match])
        } else {
            setHistory([...history, [defaultRouteName]])
        }
    }, [match])

    useEffect(() => {
        console.log(activeRouteName)
    }, [activeRouteName])

    return (
        <div>
            {routes.map(
                (route) =>
                    history.map(([pageName]: string[]) => pageName).includes(route.name) && (
                        <div
                            key={route.name}
                            className={"router-page " + (activeRouteName === route.name ? "active" : "")}
                        >
                            {route.component}
                        </div>
                    )
            )}
        </div>
    )
}
