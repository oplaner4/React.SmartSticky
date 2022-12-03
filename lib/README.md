# React.SmartSticky library

Based on **React Typescript Library Template** - template to create a react component / library with Typescript.

- React
- Typescript
- Rollup
- Css Modules
- Jest with code coverage report
- `Typedoc` for API documentation
- `commitlint` for conventional-commits
- `Prettier` and `ESLint` integration with git hooks
- Optional `example app` generation for testing
- `Github Pages` integration
- Release-Please workflow

## Install

Install the deps:

```
yarn install
```

## Development

```
yarn start
```

This will watch your changes and reloads the server.

## Build

Run:

```
yarn build
```

This will create your compiled files under `./dist` folder. And generates a documentation with `TypeDoc` under `./docs` folder.

## Test

Jest is configured and ready to use. Just run:

```
yarn test
```

## Docs

This template uses [TypeDoc](https://typedoc.org/) by default.

Run `yarn make:docs` and a folder named `docs` will be created in your root directory. Just open `index.html` in your browser to see if your like it or not.