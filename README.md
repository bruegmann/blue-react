<p align="center">
<img src="https://raw.githubusercontent.com/bruegmann/blue-react/master/public/blue-readme-cover.png" alt="React component library based on Bootstrap">
</p>

# Blue React

[![npm version](https://img.shields.io/npm/v/blue-react)](https://www.npmjs.com/package/blue-react)

[Checkout the docs](https://bruegmann.github.io/blue-react) to find out how to
use Blue React.

## Breaking changes between v7 and v8

-   Removed deprecated components:
    -   Actions (Alternative: ActionMenu)
    -   ActionMenuItem (Alternative: MenuItem)
    -   FluentBtn (Alternative: button, bzw. a)
    -   HeaderActions
    -   DropdownMenuItem (Alternative: MenuItem)
-   Stylesheets
    -   Renamed all `.blue-app-*` to `.blue-*`
    -   Renamed all `.blue-sidebar-*` to `.blue-menu-item-*`
-   Renamed `Grid` to `Layout`
    -   `.blue-grid` ➡ `.blue-layout`
    -   `Grid.tsx` ➡ `Layout.tsx`
    -   Global `window.blueGridRef` ➡ `window.blueLayoutRef`

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
