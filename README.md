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
