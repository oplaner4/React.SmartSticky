# React.SmartSticky library

Based on [React Typescript Library Template](https://github.com/alioguzhan/react-typescript-library).

## Prerequisites

* Installed [NodeJS](https://nodejs.org/en/) environment in minimal version 12 or higher.

### Development

* Installed [Yarn package manager](https://yarnpkg.com/getting-started/install#initializing-your-project).

## Installation

Add to your project using one of these commands:

```bash
npm install @oplaner4/smart-sticky

/* or with yarn */

yarn add @oplaner4/smart-sticky
```

## Basic usage

```typescript
import { SmartSticky, VerticalPosition } from "@oplaner4/smart-sticky";

export const StickyDefault = () => {
  return (
    <SmartSticky>
      <h5>My Sticky default content</h5>
    </SmartSticky>
  );
};

export const StickyBottom = () => {
  return (
    <SmartSticky show={{ placement: VerticalPosition.Bottom }}>
      <h5>My Sticky bottom content</h5>
    </SmartSticky>
  );
};

export const StickyHeadlineWithId = () => {
  return (
    <SmartSticky as="h3" elemProps={{ id: 'myid' }}>
      My Sticky headline content
    </SmartSticky>
  );
};

```

For **all customizations** and **many other examples** check following section(s).

## Demo

There is an independent **React app** in the [source repository](https://github.com/oplaner4/React.SmartSticky) with **demo page** and example `SmartSticky` components.

Start app using these commands:
```bash
git clone https://github.com/oplaner4/React.SmartSticky
cd ./React.SmartSticky/demo
yarn install
yarn start
```

Launches **demo page** at [http://localhost:3000/](http://localhost:3000/). Port (3000 by default) might be different when there is other running application (check console).

For additional information visit this [README](https://github.com/oplaner4/React.SmartSticky/tree/master/demo#reactsmartsticky-demonstration).

## Docs

### Exported members

* **SmartSticky** *(the most important member, React component)*
* SmartStickyProps *(properties used by SmartSticky)*
* **VerticalPosition** *(allows to define vertical position such as top or bottom)*
* VerticalOffset *(allows to define custom vertical position)*
* SmartStickyPartialOptions *(options which might or might not be changed)*
* computeOffsetLeft *(utility for computing total offset left)*

### SmartSticky properties

**All** properties are **optional**.

#### as
* type: `string`
* default value: `'div'`

Render component as a specific element such as `'h4'` or `'span'`. Usable for tables and fixed table header (`'thead'`).

#### elemProps
* type: `React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>`
* default value: `undefined`

Specify element's properties such as `id` or `className`.

#### enabled
* type: `boolean`
* default value: `true`

Enable or disable whole functionality of `SmartSticky` component.

#### container
* type: `HTMLElement | null`
* default value: `null`

Set offset container. The fixed element is visible only inside of container area. If `null` (default), the element's parent is used.

#### onActivate
* type: ` () => void`
* default value: ` () => null`

Handler which is called when an element is going to be fixed.

#### onActivated
* type: ` () => void`
* default value: ` () => null`

Handler which is called when an element has been fixed.

#### onDeactivate
* type: ` () => void`
* default value: ` () => null`

Handler which is called when the original position is going to be set.

#### onDeactivated
* type: ` () => void`
* default value: ` () => null`

Handler which is called when the original position has been set.

### Detailed

```bash
git clone https://github.com/oplaner4/React.SmartSticky
cd ./React.SmartSticky/lib
yarn install
yarn make:docs
cd ./docs
```

And open **index.html** in the current working directory using your browser.


## Development

```
yarn start
```

This will watch your changes and reloads the server.

### Build

Run:

```
yarn build
```

This will create your compiled files under `./dist` folder. And generates a documentation with `TypeDoc` under `./docs` folder.

### Test

Jest is configured and ready to use. Just run:

```
yarn test
```

### Docs

Can be generated using following command. Creates `./dist` folder.

```
yarn make:docs
```

## Author

Developed by Ondrej Planer ([oplaner4@gmail.com](mailto:oplaner4@gmail.com)).

## License

React.smartSticky may be freely distributed under the **MIT license**.
