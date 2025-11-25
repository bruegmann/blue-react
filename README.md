<p align="center">
<img src="https://raw.githubusercontent.com/bruegmann/blue-react/master/public/blue-readme-cover.png" alt="React component library based on Bootstrap">
</p>

# Blue React

[![npm version](https://img.shields.io/npm/v/blue-react)](https://www.npmjs.com/package/blue-react)

[Checkout the docs](https://bruegmann.github.io/blue-react) to find out how to
use Blue React.

## Breaking changes between v10 and v11

### Fundamental changes in `MenuItem`

-   Removed props
    -   onClickAttached
    -   iconClassName
    -   labelClassName
    -   caretClassName
    -   caretStyle
    -   isHome
    -   dropdownClassName
    -   dropdownStyle
    -   showDropdown
    -   onShowDropdown
    -   supportOutside
    -   outsideIgnoreClasses
-   Renamed
    -   iconForActive -> iconForCurrent
    -   isActive -> current
    -   highlighted -> active
-   Changed behviour. Menu item no longer has built in styling if `draggable`. But since Menu item extends HTML Button or A element, props `draggable`, `onDragStart` etc. should still work.
-   Added
    -   sm
    -   lg
    -   iconBefore
    -   iconAfter
    -   labelHidden
    -   busy
    -   success
    -   defaultDisplay
    -   buttonContent
    -   as

The previous Menu Item with the older API is still available as `LegacyMenuItem`, but will be removed in a future release. Because of styling changes in Blue Web, it might not behave the same.

### Removed deprecated components

-   Body
-   Page
-   SidebarToggler

## Breaking changes between v9 and v10

### Exported JS files are now ES modules

Previously JS files were in type CommonJS, now they are in ESM. For projects with Webpack or CRA, take a look at this: https://stackoverflow.com/questions/70964723/webpack-5-in-ceate-react-app-cant-resolve-not-fully-specified-routes

#### Enable ESM in Webpack

Add this to the `webpack.config.js` inside the `module.rules`:

```js
{
    test: /\.m?js/,
    resolve: {
        fullySpecified: false
    }
}
```

#### Enable ESM in CRA (react-scripts)

1. Install craco: `npm i -D @craco/craco`
2. Update the scripts inside `package.json`:

```json
"scripts": {
        "start": "craco start",
        "build": "craco build",
        "test": "craco test",
```

3. Add a file called `craco.config.js` with this content:

```js
module.exports = {
    webpack: {
        configure: {
            module: {
                rules: [
                    {
                        test: /\.m?js$/,
                        resolve: {
                            fullySpecified: false
                        }
                    }
                ]
            }
        }
    }
}
```

### Removed hash router from Layout

The new `Layout` no longer has a hash router. So there is no `pages` prop anymore. The router moved to its own component `HashRouter` for legacy reasons. But it's recommended to use other solutions like [React Router](https://reactrouter.com/) or [TanStack Router](https://tanstack.com/router/latest).

### Move side content to `side` prop

It should look like this:

```tsx
<Layout
    side={
        <SidebarMenu>
            <MenuItem href="." label="Home" />
        </SidebarMenu>
    }
>
    Your page content
</Layout>
```

### Removed HTML elements for status

If you use util functions for status like `showSuccess()` or `setAlertMessage()` you need to embed the `Status` React component like this:

```tsx
<Status
    dangerIcon={<XCircleFill />}
    infoIcon={<InfoCircleFill />}
    successIcon={<CheckCircleFill />}
    warningIcon={<ExclamationCircleFill />}
/>
```

## Developing

This project is built with [CRA](https://create-react-app.dev/). To start
developing, just and install everything with `npm i` and run:

```
npm start
```

## Create a new release

This is how to manually create a release:\
By running

```
npm publish
```

the missing files in `./dist` will be created, the docs will be generated and
the NPM package will be released.

To publish changes on the documentary, run:

```
npm run deploy
```

To run both of them:

```
npm run release
```
