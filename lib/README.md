# React.SmartSticky library

React based Library with component `SmartSticky` which allows to easily switch between original and fixed position with many customizations.

## Contents

- [Contents](#contents)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Basic usage](#basic-usage)
- [Demo](#demo)
- [Docs and options](#docs-and-options)
- [Development](#development)
- [Author](#author)
- [License](#license)

## Features

React.SmartSticky library supports:

- Highly customizable visibility and placement of the fixed element.
- Toggling between top and bottom placement.
- Displaying of the fixed element only inside of container area.
- Implementation of own handlers and positions.
- Fixed header in tables.

## Prerequisites

- Installed [NodeJS](https://nodejs.org/en/) environment (version 12 or higher).
- **For development:** installed [Yarn package manager](https://yarnpkg.com/getting-started/install#initializing-your-project).

## Installation

Add to your project using one of these commands:

```bash
npm install @oplaner4/smart-sticky

/* or with yarn */

yarn add @oplaner4/smart-sticky
```

## Basic usage

```typescript
import { SmartSticky, VerticalPlacement } from '@oplaner4/smart-sticky';

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

This launches **demo page** at [http://localhost:3000/](http://localhost:3000/). Port (`3000` by default) might be different when there is other running application (check console).

For additional information visit this [README](https://github.com/oplaner4/React.SmartSticky/tree/master/demo#reactsmartsticky-demonstration).

## Docs and options

### Exported members

- **SmartSticky** _(the most important member, React component)_
- [VerticalPlacement](#verticalplacement) _(allows to define vertical placement such as top or bottom)_
- [VerticalOffset](#verticaloffset) _(allows to define custom vertical placement)_
- [computeOffsetLeft](#computeoffsetleft) _(utility for computing total offset left)_
- SmartStickyProps _(properties used by `SmartSticky` component)_
- SmartStickyPartialOptions _(options which might or might not be specified)_

### SmartSticky properties

**All** properties are **optional**.

#### as

- type: `string`
- default value: `'div'`

Renders component as a specific element such as `'h4'` or `'span'`. Usable for tables and fixed table header (`'thead'`).

#### elemProps

- type: `React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>`

Specifies element's basic properties such as `id` or `className`.

It can be useful when setting specific style only when the element is fixed. Such element contains class `active`.

```typescript
<SmartSticky elemProps={{ id: 'my_sticky' }}></SmartSticky>
```

```css
.active#my_sticky {
  /* Applied only to fixed element */
  background-color: 'black';
  padding: 0.4rem 0.7rem;
}
```

#### show

- type: `Partial<ShowOptions>`

Options connected with **visibility** and vertical **placement** of the element.

Can be specified like:

```typescript
<SmartSticky show={{ delay: 10 }}></SmartSticky>
```

See all properties in [Show options](#show-options) section.

#### enabled

- type: `boolean`
- default value: `true`

Enables or disables whole functionality of `SmartSticky` component. If `false`, it is disabled and thus renders ordinary element.

#### container

- type: `HTMLElement | null`
- default value: `null`

Sets offset container. The fixed element is visible only inside of container area. If `null`, the element's parent is used. You may also need to specify [Fixed options](#fixed-options) via [fixed](#fixed) property.

#### fixed

- type: `Partial<FixedOptions>`

Options which determine (horizontal) placement of the element and its width.

Can be specified like:

```typescript
<SmartSticky fixed={{ width: '100%' }}></SmartSticky>
```

See all properties in [Fixed options](#fixed-options) section.

#### onActivate

- type: `() => void`
- default value: `() => null`

Handler which is called when an element is going to be fixed.

#### onActivated

- type: `() => void`
- default value: `() => null`

Handler which is called when an element has been fixed.

#### onDeactivate

- type: `() => void`
- default value: `() => null`

Handler which is called when the original position is going to be set.

#### onDeactivated

- type: `() => void`
- default value: `() => null`

Handler which is called when the original position has been set.

### Show options

**All** properties are **optional**.

#### delay

- type: `number`
- default value: `0`

Value (in px) which postpones fixing of the element and accelerates setting of the original position, respectively. Use zero to deactivate.

#### immediately

- type: `boolean`
- default value: `false`

Determines if the element becomes fixed immediately when its original position is reached. If set to `true`, option [delay](#delay) is ignored.

#### placement

- type: `VerticalOffsetDeterminer | Partial<VerticalOffset> | VerticalPlacement`
- default value: `VerticalPlacement.Top`

Specifies (vertical) placement of the fixed element. If it is determiner, its return value is processed. Basic placements are described in [VerticalPlacement](#verticalplacement) section. Custom placement can be defined via `Partial<VerticalOffset>`, described in [VerticalOffset](#verticaloffset) section.

#### original

- type: `Partial<ShowOriginalOptions>`

Options which specify visiblity of the element based on the position of window relatively to the original position of the element.

Can be specified like:

```typescript
<SmartSticky show={{ original: { above: true } }}></SmartSticky>
```

See all properties in [Show original options](#show-original-options) section.

#### scrolling

- type: `Partial<ShowScrollingOptions>`

Options which determine visibility of the element dependent on the window scroll direction.

Can be specified like:

```typescript
<SmartSticky show={{ scrolling: { up: true } }}></SmartSticky>
```

See all properties in [Show scrolling options](#show-scrolling-options) section.

### Show original options

**All** properties are **optional**.

#### above

- type: `boolean`
- default value: `false`

Determines if the fixed element can be be shown above its original position.

#### under

- type: `boolean`
- default value: `true`

Determines if the fixed element can be be shown under its original position.

### Show scrolling options

**All** properties are **optional**.

#### up

- type: `boolean | Determiner<boolean>`
- default value: `true`

Determines if the fixed element can be shown while scrolling up. If it is determiner, its return value is used.

#### down

- type: `boolean | Determiner<boolean>`
- default value: `true`

Determines if the fixed element can be shown while scrolling down. If it is determiner, its return value is used.

### Fixed options

**All** properties are **optional**.

#### width

- type: `CssOffsetValue | HorizontalOffsetDeterminer`
- default value: `null`

Sets `style.width` property of the fixed element. If it is determiner, its return value is processed, as further described. This should be used for properly behaviour on window resize. If it is `number`, value in px is supposed. If it is `string`, value is used directly. If `null`, element's offset width in the original position is used.

#### left

- type: `CssOffsetValue | HorizontalOffsetDeterminer`
- default value: `null`

Sets `style.left` property of the fixed element. If it is determiner, its return value is processed, as described further. This should be used for properly behaviour on window resize. If it is `number`, value in px is supposed. If it is `string`, value is used directly. If `null`, element's offset left in the original position is used. You can use [computeOffsetLeft](#computeoffsetleft) utility, especially when you specify different [container](#container).

### VerticalPlacement

Enum which specifies vertical placement of the fixed element.

Predefined values:

- Top _(VerticalPlacement.Top)_
- Bottom _(VerticalPlacement.Bottom)_
- Toggle _(VerticalPlacement.Toggle)_

#### Toggle

Places element `Top` while scrolling down and `Bottom` while **scrolling up**. If used, properties [up](#up) and [down](#down) in [Show scrolling options](#show-scrolling-options) should be set to `true`.

### VerticalOffset

Exactly one of the properties [top](#top) or [bottom](#bottom) should be defined. If both are defined, [top](#top) is used and [bottom](#bottom) is ignored. If no property is defined, [top](#top) is set to zero.

#### top

- type: `number`
- default value: `0`

Value (in px) which moves element from the top edge of window.

#### bottom

- type: `number`
- does not have default value

Value (in px) which moves element from the bottom edge of window.

### computeOffsetLeft

- type: `(elem: HTMLElement) => number`
- default value: `null`

Utility which helps with computing of **total offset left** across offset parrents. It may be useful for [left](#left) property in [Fixed options](#fixed-options), especially with different [container](#container) specified. Value in px is returned.

Assume this element tree:

```html
<body>
  <div className="relative-position padding-left-100px">
    <div className="static-position">
      <div className="relative-position padding-left-100px">
        <div className="smart_sticky" id="smart_sticky_1">Sticky content</div>
      </div>
    </div>
  </div>
</body>
```

An element is in **static position** by default. **Relative position** makes any element for all its children **offset parent**.

If `computeOffsetLeft` utility was used with `.smart_sticky#smart_sticky_1` element as an argument, it would return `200`, even if there are **two** offset parents (with relative position), each with **padding left** set to `100 px`.

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

Based on [React Typescript Library Template](https://github.com/alioguzhan/react-typescript-library).

## License

React.smartSticky may be freely distributed under the **MIT license**.
