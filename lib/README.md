# React.SmartSticky library

Based on **React Typescript Library Template** - template to create a react component / library with Typescript.

## Install

```
npm install -g yarn
yarn install @oplaner4/smart-sticky
```

## Usage

```typescript
import { SmartSticky } from "@oplaner4/smart-sticky";

export const StickyExample = () => {
  return (
    <SmartSticky>
      <h5>My Sticky content</h5>
    </SmartSticky>
  );
};
```

## Demo

```
git clone https://github.com/oplaner4/React.SmartSticky
cd demo
yarn install
yarn start
```

See components in ./demo/src/lib/*

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