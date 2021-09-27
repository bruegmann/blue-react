# Use React Router

Blue React has its own build-in hash based routing system. But sometimes you need an alternative routing system like [React Router](https://reactrouter.com/).

In this recipe I will explain, how to use React Router in a Blue React app.

## Create the project

1. Create a new project with `npx create-react-app new-app --template blue`
2. Open the new folder `new-app` with your favorite code editor and start the debug service with `npm start`.

## Install React Router

1. Run this to install `react-router-dom`:

```
npm i react-router-dom
```

## Implement components from React Router

1. Open `./src/App.js` in your editor and add the following imports. In this case we're using `HashRouter`, but you can also use `BrowserRouter`.

```jsx
import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom"
```

2. In the `App` component wrap the `Router` component around the `Grid` from Blue React:

```jsx
// ...

function App() {
    return (
        <Router>
            <Grid
            // ...
            >
                <SidebarMenu>
                    <MenuItem href="#" icon={<House />} label="Home" isHome />
                </SidebarMenu>
            </Grid>
        </Router>
    )
}

export default App
```

3. Inside of `Grid` after `</SidebarMenu>` put the following to register the routes:

```jsx
// ...

function App() {
    return (
        <Router>
            <Grid
            // ...
            >
                <SidebarMenu>
                    <MenuItem href="#" icon={<House />} label="Home" isHome />
                </SidebarMenu>

                {/* .router-page.active is necessary for the layout of Blue React */}
                <div className="router-page active">
                    <Switch>
                        <Route path="/">
                            <HomePage />
                        </Route>
                    </Switch>
                </div>
            </Grid>
        </Router>
    )
}

export default App
```

4. Empty the `pages` prop of the `Grid` component to disable Blue React's routing behaviour. It still have to contain an empty array, otherwise you would get an error.

```jsx
            {/* ... */}
            <Grid
                expandSidebar
                sidebarToggleIconComponent={<List />}
                pages={[]}
                statusIcons={{
                    danger: <XCircleFill />,
                    info: <InfoCircleFill />,
                    success: <CheckCircleFill />,
                    warning: <ExclamationCircleFill />
                }}
            >
            {/* ... */}
```

5. Change the `MenuItem`, so it can use the the `NavLink` component from React Router for the link.

**Replace:**

```jsx
<SidebarMenu>
    <MenuItem href="#" icon={<House />} label="Home" isHome />
</SidebarMenu>
```

**with:**

```jsx
<SidebarMenu>
    <MenuItem
        icon={<House />}
        label="Home"
        elementType={NavLink}
        exact
        to="/"
    />
</SidebarMenu>
```

The final `./src/App.js` should look like this:

```jsx
import React from "react"
import { Grid, SidebarMenu, MenuItem } from "blue-react"
import {
    List,
    House,
    XCircleFill,
    InfoCircleFill,
    CheckCircleFill,
    ExclamationCircleFill
} from "react-bootstrap-icons"
import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom"

import HomePage from "./pages/HomePage"

import "./styles/main.scss"

function App() {
    return (
        <Router>
            <Grid
                expandSidebar
                sidebarToggleIconComponent={<List />}
                pages={[]}
                statusIcons={{
                    danger: <XCircleFill />,
                    info: <InfoCircleFill />,
                    success: <CheckCircleFill />,
                    warning: <ExclamationCircleFill />
                }}
            >
                <SidebarMenu>
                    <MenuItem
                        icon={<House />}
                        label="Home"
                        elementType={NavLink}
                        exact
                        to="/"
                    />
                </SidebarMenu>

                <div className="router-page active">
                    <Switch>
                        <Route path="/">
                            <HomePage />
                        </Route>
                    </Switch>
                </div>
            </Grid>
        </Router>
    )
}

export default App
```

Note that you also should use React Router's `Link` component. The the [official docs](https://reactrouter.com/) for more information.
