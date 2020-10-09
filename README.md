<p align="center">
<img src="https://raw.githubusercontent.com/bruegmann/blue-react/master/public/logo192.png" alt="Blue Icon" width="64px" height="64px">
</p>

# Blue React

[![npm version](https://img.shields.io/npm/v/blue-react)](https://www.npmjs.com/package/blue-react)

[Checkout the docs](https://bruegmann.github.io/blue-react) to find out how to use Blue React.


## Developing

This project is built with [CRA](https://create-react-app.dev/). To start developing, just and install everything with `npm i` and run:
```
npm start
```

## Create a new release

When pushing to `master` branch with a commit message like this will start a [GitHub Action](https://github.com/bruegmann/blue-react/actions) workflow, which will publish a new version to NPM and to the [Releases area](https://github.com/bruegmann/blue-react/releases):
```
Release 6.13.3
```
Of course, also the `version` property in [package.json](https://github.com/bruegmann/blue-react/blob/master/package.json) needs to be updated first.

----

This is how to manually create a release:\
By running
```
npm publish
```
the missing files in `./dist` will be created, the docs will be generated and the NPM package will be released.

To publish changes on the documentary, run:
```
npm run deploy
```

To run both of them:
```
npm run release
```
