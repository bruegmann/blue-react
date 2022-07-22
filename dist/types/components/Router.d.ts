/// <reference types="react" />
export interface UseMatchOptions {
    decodeParams?: boolean;
}
export declare const useMatch: (options?: UseMatchOptions | undefined) => string[];
export interface Route {
    name: string;
    component: JSX.Element;
}
export interface RouterProps {
    /**
     * Will be rendered, when there is no current route / hash.
     */
    defaultRouteName?: string;
    /**
     * Registers routes for the built-in routing system. Example: `[{name: "home", component: <HomePage />}]`
     */
    routes: Route[];
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
export default function Router({ defaultRouteName, routes }: RouterProps): JSX.Element;
