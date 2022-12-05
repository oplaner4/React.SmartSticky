# React.SmartSticky library

Based on [React Typescript Library Template](https://github.com/alioguzhan/react-typescript-library).

## Contents

* [Contents](#contents)
* [Features](#features)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Basic usage](#basic-usage)
* [Demo](#demo)
* [Docs and options](#docs-and-options)
* [Development](#development)
* [Author](#author)
* [License](#license)

## Features

React.SmartSticky library supports:

* Highly customizable visibility and placement of the fixed element.
* Toggling between top and bottom placement.
* Displaying of the fixed element only inside of container area.
* Implementation of own handlers and positions.
* Fixed header in tables.

## Prerequisites

* Installed [NodeJS](https://nodejs.org/en/) environment in minimal version 12 or higher.
* **For development:** installed [Yarn package manager](https://yarnpkg.com/getting-started/install#initializing-your-project).

## Installation

Add to your project using one of these commands:

```bash
npm install @oplaner4/smart-sticky

/* or with yarn */

yarn add @oplaner4/smart-sticky
```

## Basic usage

```typescript
import { SmartSticky, VerticalPlacement } from "@oplaner4/smart-sticky";

export const StickyDefault = () => {
  return (
    <SmartSticky>
      <h5>My Sticky default content</h5>
    </SmartSticky>
  );
};

export const StickyBottom = () => {
  return (
    <SmartSticky show={{ placement: VerticalPlacement.Bottom }}>
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

### With npm

```bash
git clone https://github.com/oplaner4/React.SmartSticky
cd ./React.SmartSticky/demo
npm install
npm run start
```

### With yarn

```bash
git clone https://github.com/oplaner4/React.SmartSticky
cd ./React.SmartSticky/demo
yarn install
yarn start
```

This launches **demo page** at [http://localhost:3000/](http://localhost:3000/). Port (3000 by default) might be different when there is other running application (check console).

For additional information visit this [README](https://github.com/oplaner4/React.SmartSticky/tree/master/demo#reactsmartsticky-demonstration).

## Docs and options

### Exported members

* **SmartSticky** *(the most important member, React component)*
* [VerticalPlacement](#verticalplacement) *(allows to define vertical placement such as top or bottom)*
* [VerticalOffset](#verticaloffset) *(allows to define custom vertical placement)*
* [computeOffsetLeft](#computeoffsetleft) *(utility for computing total offset left)*
* SmartStickyProps *(properties used by SmartSticky)*
* SmartStickyPartialOptions *(options which might or might not be specified)*

### SmartSticky properties

**All** properties are **optional**.

#### as
* type: `string`
* default value: `'div'`

Renders component as a specific element such as `'h4'` or `'span'`. Usable for tables and fixed table header (`'thead'`).

#### elemProps
* type: `React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>`
* default value: `undefined`

Specifies element's basic properties such as `id` or `className`.

#### show
* type: `Partial<ShowOptions>`

Options connected with **visibility** and vertical **placement** of the element.

Can be specified like:
```typescript
<SmartSticky show={{ delay: 10 }}></SmartSticky>
```

See all properties in [Show options](#show-options) section.

#### enabled
* type: `boolean`
* default value: `true`

Enables or disables whole functionality of `SmartSticky` component. If `false`, it is disabled and thus renders ordinary element.

#### container
* type: `HTMLElement | null`
* default value: `null`

Sets offset container. The fixed element is visible only inside of container area. If `null`, the element's parent is used. You may also need to specify [Fixed options](#fixed-options) via [fixed](#fixed) property.

#### fixed
* type: `Partial<FixedOptions>`

Options which determine (horizontal) placement of the element and its width.

Can be specified like:
```typescript
<SmartSticky fixed={{ width: '100%' }}></SmartSticky>
```

See all properties in [Fixed options](#fixed-options) section.

#### onActivate
* type: `() => void`
* default value: `() => null`

Handler which is called when an element is going to be fixed.

#### onActivated
* type: `() => void`
* default value: `() => null`

Handler which is called when an element has been fixed.

#### onDeactivate
* type: `() => void`
* default value: `() => null`

Handler which is called when the original position is going to be set.

#### onDeactivated
* type: `() => void`
* default value: `() => null`

Handler which is called when the original position has been set.

### Show options

**All** properties are **optional**.

#### delay
* type: `number`
* default value: `0`

Value (in px) which postpones fixing of the element and accelerates setting of the original position, respectively. Use zero to deactivate.

#### immediately
* type: `boolean`
* default value: `false`

Determines if the element becomes fixed immediately when its original position is reached. If set to `true`, option `delay` is ignored.

#### placement
* type: `VerticalOffsetDeterminer | Partial<VerticalOffset> | VerticalPlacement`
* default value: `VerticalPlacement.Top`

Specifies (vertical) placement of the fixed element. If it is callback, its return value is processed. Custom placement can be defined via `Partial<VerticalOffset>`, described in [Vertical offset](#vertical-offset) section.

#### original
* type: `Partial<ShowOriginalOptions>`

Options which specify visiblity of the element based on the position of window relatively to the original position of the element.

Can be specified like:
```typescript
<SmartSticky show={{ original: { above: true }}}></SmartSticky>
```

See all properties in [Show original options](#show-original-options) section.

#### scrolling
* type: `Partial<ShowScrollingOptions>`

Options which determine visibility of the element dependent on the scroll direction.

Can be specified like:
```typescript
<SmartSticky show={{ scrolling: { up: true }}}></SmartSticky>
```

See all properties in [Show scrolling options](#show-scrolling-options) section.

### Show original options

#### above
* type: `boolean`
* default value: `false`

Determines if the fixed element can be be shown above its original position.

#### under
* type: `boolean`
* default value: `true`

Determines if the fixed element can be be shown under its original position.

### Show scrolling options

#### up
* type: `boolean`
* default value: `false`

Determines if the fixed element can be shown while scrolling up. If it is callback, its return value is used.

#### down
* type: `boolean`
* default value: `true`

Determines if the fixed element can be shown while scrolling down. If it is callback, its return value is used.

### Fixed options

#### width
* type: `CssOffsetValue | HorizontalOffsetDeterminer`
* default value: `null`

Sets style `width` property of the fixed element. If it is callback, its return value is processed, as further described. This should be used for properly behaviour on window resize. If it is `number`, value in px is supposed. If it is `string`, value is used directly. If `null`, element's offset width in the original position is used.

#### left
* type: `CssOffsetValue | HorizontalOffsetDeterminer`
* default value: `null`

Sets style `left` property of the fixed element. If it is callback, its return value is processed, as described further. This should be used for properly behaviour on window resize. If it is `number`, value in px is supposed. If it is `string`, value is used directly. If `null`, element's offset left in the original position is used. You can use `computeOffsetLeft` utility.

### VerticalPlacement

Enum which specifies vertical placement of the fixed element.

Predefined values:
* Top *(VerticalPlacement.Top)*
* Bottom *(VerticalPlacement.Bottom)*
* Toggle *(VerticalPlacement.Toggle)*

#### Toggle

Places element `Top` while scrolling down and `Bottom` while **scrolling up**. If used, properties `up` and `down` in [Show scrolling options](#show-scrolling-options) should be set to `true`.

### VerticalOffset

Exactly one of the properties `top` or `bottom` should be defined. If both are defined, `top` is used and `bottom` is ignored.

#### top
* type: `number`
* does not have default value

Value (in px) which moves element from the top edge of window.

#### bottom
* type: `number`
* does not have default value

Value (in px) which moves element from the bottom edge of window.

### computeOffsetLeft
* type: `(elem: HTMLElement) => number`
* default value: `null`

Utility which helps with computing of total offset left across offset parrents. It may be useful for `left` property in [Fixed options](#fixed-options).

### Detailed docs

Note: Yarn package manager is required.

Generate **detailed documentation** using these commands:

```bash
git clone https://github.com/oplaner4/React.SmartSticky
cd ./React.SmartSticky/lib
yarn install
yarn make:docs
cd ./docs
```

And then just open **index.html** in the current working directory using your browser.

## Development

Note: Yarn package manager is **required** for correct behaviour.

```bash
yarn start
```

This will watch your changes and reloads the server.

### Build

Run:

```bash
yarn build
```

This will create your compiled files under `./dist` folder. And generates a documentation with `TypeDoc` under `./docs` folder.

### Test

Jest is configured and ready to use. Just run:

```bash
yarn test
```

### Docs

Can be generated using following command. Creates `./dist` folder.

```bash
yarn make:docs
```

## Author

Developed by Ondrej Planer ([oplaner4@gmail.com](mailto:oplaner4@gmail.com)).

## License

React.smartSticky may be freely distributed under the **MIT license**.
