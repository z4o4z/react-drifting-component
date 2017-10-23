[![](https://img.shields.io/npm/dm/react-drifting-component.svg?style=flat-square)](https://www.npmjs.com/package/react-drifting-component)

# react-drifting-component

The drifting component which allows you to drift on the screen :) The component uses mousemove event for desktops and deviceorientation for mobile devices.

## Installation

```
$ npm install react-drifting-component
```

## Demo

[Try it out](https://z4o4z.github.io/react-drifting-component/storybook-static/index.html)

![](./demo/demo.gif)

## Basic Usage

```js
import DriftingComponent from 'react-drifting-component';

// Inside of a component's render() method:
render() {
  return (
    <Wrapper>
      <DriftingComponent maxRange={15} maxMobileRange={15}>
        {({ pos, onRef }) => <Background x={pos.x} y={pos.y} onRef={onRef} />}
      </DriftingComponent>

      <DriftingComponent maxRange={50} maxMobileRange={20} reverse>
        {
          ({ pos, onRef }) =>
            <Text x={pos.x} y={pos.y} onRef={onRef} text="Drifting component" className="title" />
        }
      </DriftingComponent>
    </Wrapper>
  );
}
```

## Examples

Please clone the repo and run `npm run storybook` or `yarn storybook` to show examples of usages.

## Usage (API)

The `DriftingComponent` component has a few properties, as described below.

> NOTE: this component uses rAF(requestAnimationFrame) if you need to support old browsers ensure that you are using polyfill for rAF!

| Property | Type | Defaut | Description |
| -------- | ---- | -------- | ----------- |
| `reverse` | `boolean` | `false` | Reverse drifting |
| `children` | `function` | `({ pos: { x, y } }, onRef: () => ref)` | A function that gets an object with `pos` and `onRef` keys as an argument. Pos contains `x: number` and `y: number`, this numbers should pass to your component style to allow drift. `onRef` it is function which should be passed to `ref` of  your component |
| `maxRange` | `number` | `null` | Max drift range. |
| `maxMobileRange` | `number` | `null` | Max drift range for mobile devices. |


## Contributing

I welcome contributions! Please open an issue if you have any feature ideas
or find any bugs. I also accept pull requests with open arms. I will
go over the issues when I have time. :)
