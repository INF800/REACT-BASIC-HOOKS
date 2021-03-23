# 1. Initilal Setup

Install npm and run

```
$ npx create-react-app <name-of-your-app>
```

Get into <name-of-your-app> and

```
$ npm start
```

_All changes are live!_

**Note:** We need to transcompile JSX using Babel. All code is written in `<name-of-your-app>/src` dir

> More about npm
>
> - `npm install` wil download node modules dir with help of `package.json`
> - `package-lock.json` is for local. Share only `package.json` with others
> - `npm install some-npm-pkg-name --save` will save the package as dependency in `package.json`

### Basic React Rules

- Place `import React from 'react';` on top of every component if using **create-react-app**
- Write components in individual `ComponentName.js` files (can organize in folders). Component name should always start with upper case.
- Do not forget to export Component function
- A component function must always return something. **And it must be a single element!**
- Import in `App.js` from file / dir and render using (It is THE main function to render)
- For seemingly looking HTML tags, we must use `onClick` `className` etc. instead of usual `onclick` `class`

### Basic React Syntax

- A react component

```js
import React from "react";
export funtion MyComponent() {
    return (
        <div>
            <h1> This is a component </h1>
        <div/>
    );
}

export MyComponent
```

- Render any component in HTML element

```js
import ReactDom from "react-dom";

function HelloComponent() {
  return <h1>hello</h1>;
}

ReactDom.render(
  <HelloComponent />,
  document.getElementById("your-html-tag-id-goes-here")
);
```

### Props principle

> _Never change the props / structs passed into components!_

- To update any item in component, use **states**. Note, to update a state, whole component is updated by `useState`!
- If the states are arrays or similar datastrutctur - They shoud be immutable.

### State principle

> - _Never mutate struscts that are passed into `useState`. Create copy, then mutate, and send to update func_ (see code to do it nice way)
> - _Minimize the information to store in state! Make it dependant on other variables like props._

# Styles

- Using `className`
- Using inline js map

# Build production ready static page

Get into `<name-of-your-app>` and run

```
$ npm run-script build
```

**Optimized** static website is generated in `build` directory.

# Upward and Downward Dataflow

- Make sure struct are not mutated (**both** props and datastructures that go into `useState`)
- Create `func` using `useState` at top most level and pass down the `func` to child components
