# 👉 Initilal Setup

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

> - Place `import React from 'react';` on top of > every component if using **create-react-app**
> - Write components in individual `ComponentName.js` > files (can organize in folders). Component name > should always start with upper case.
> - Do not forget to export `MyComponent` function
> - A component function must always return > something. **And it must be a single element!**
> - Import in `App.js` from file / dir and render > using (It is THE main function to render)
> - For seemingly looking HTML tags, we must use > `onClick` `className` etc. instead of usual > `onclick` `class`
> - In JSX return statements, can use `{` and `}` to > add any variables. Eg. `<h>{myHeadValue}</h>`. Note > that `myHeadValue` must always return something!!
> - While importing, names must match exactly when not using `export default ...`. Named imports i.e `import {x, y} from './file` must be spelled exactly same as it was eported.

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

  export default MyComponent
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

- Return Large number of components using iterable list. Note that you can put logic inside `map` as well. Only condition is it must return something.

  ```js
  // Note: there must always be a `key` for repeated component.
  const LIST_OF_COMPONENT_PROPS = [
    { key: 101, a: 10, b: 20, c: 30 },
    { key: 102, a: 11, b: 21, c: 31 },
    { key: 103, a: 11, b: 21, c: 33 },
  ];

  function MyComponent() {
    return (
      <section>
        {LIST_OF_COMPONENT_PROPS.map((curentElement) => {
          return (
            <RepeatedComponent
              key={curentElement.id}
              a={curentElement.a}
              b={curentElement.b}
              c={curentElement.c}
            />
          );
        })}
      </section>
    );
  }
  ```

  Another way is to use spread operator. Also note how `key` is being taken from index instead.

  ```js
  const LIST_OF_COMPONENT_PROPS = [
    { a: 10, b: 20, c: 30 },
    { a: 11, b: 21, c: 31 },
    { a: 11, b: 21, c: 33 },
  ];

  function MyComponent() {
    return (
      <section>
        {LIST_OF_COMPONENT_PROPS.map((curentElement, currentIdx) => {
          return <RepeatedComponent key={currentIdx} {...curentElement} />;
        })}
      </section>
    );
  }
  ```

  - Event Listeners

  ```js
  // without taking any args
  function MyComponent(props) {

    function showAlert(){
      alert('I was clicked.')
    }

    return (
      <div>
        <button type='button' onClick={showAlert}>
        <button type='button' onClick={() => alert('This is inline!')}>
      </div>
    );
  }
  ```

  ```js
  // taking specific inputs or args on click
  function MyComponent(props) {

    function showAlert(specificObject){
      alert(specificObject)
    }

    return (
      <div>
        <button type='button' onClick={() => {showAlert(props.title)}}>
      </div>
    );
  }
  ```

  ```js
  // getting the target which was cliked and other important stuff
  // Used quite often
  function MyComponent(props) {

    function clickHandler(e){
      // button which was clicked
      console.log(e.target)
      // and other useful even related stuff
      console.log(e)
    }

    return (
      <div>
        <button type='button' onClick={clickHandler}>
      </div>
    );
  }
  ```

---

### Props principle

> _Never change the props / structs passed into components!_

- To update any item in component, use **states**. Note, to update a state, whole component is updated by `useState`!
- If the states are arrays or similar datastrutcture - They shoud be immutable.
- `props.children` is a special prop that stores all the values in betwenn component fragement.
  - Eg, `props.children` stores `<p>Any content here will go into `props.children`</p>` just like it stores `10` in `props.a`
    ```js
    <MyComponent a={10} b={20}>
      <p>Any content here will go into `props.children`</p>
    </MyComponent>
    ```

> #### More rules
>
> - Can omit `props` in `MyComponent(..)` even if the component is taking values
> - If we are lokking for something in `props` and it is not there, by default the value will be `""`
> - Connvention is to use `MyComponent(props) {...}` but you can use object destructuring too `const {a, b, c} = props` or `MyComponent({a, b, c}) {...}`

---

### State principle

> - _Never mutate struscts that are passed into `useState`. Create copy, then mutate, and send to update func_ (see code to do it nice way)
> - _Minimize the information to store in state! Make it dependant on other variables like props._

---

# 👉 Styles

## Basic Rules

- Inline css is stronger than the one imported from another file. It overwrites!
- While importing, give relative path with `.css` extension. Exrension is not needed for `.js` files while importing.
- Need double curly braces when defining `style` inline for a component
- If imported `style.css` once in a file, no need to import it again in other files!

### Using `className`

```js
import "./index.css";

const MyComponent = () => {
  return <div className="my-css-class"></div>;
};
```

## Using inline js map

```js
const MyComponent = () => {
  return <h4 style={{ color: "red", fontSize: "0.7rem" }}>Styled component</h4>;
};
```

---

# 👉 Build production ready static page

Get into `<name-of-your-app>` and run

```
$ npm run-script build
```

**Optimized** static website is generated in `build` directory.

# 👉 Upward and Downward Dataflow

- Make sure struct are not mutated (**both** props and datastructures that go into `useState`)
- Create `func` using `useState` at top most level and pass down the `func` to child components

---

# Advanced

---

# 👉 Hooks

> - Anything starting with `use` is a hook in react. Example -- useState, useRef, useEffect etc.
> - Must be inside component / function body
> - Cannot call a hook conditionally.
>
>   ```js
>   // will not work (semantically)
>   if (value > 0){
>       useSomeHook(()=>{...})
>   }
>   ```
>
>   ```js
>   // works!
>   function callSetterFromUseStateConditionally> () {
>       if (...) {
>           // setter from index 1 of `useState`
>           setText('some value')
>       } else {
>           setText('some other value')
>       }
>   }
>   ```

`useState` and `useEffect` are the most important ones because used mostly!

## 🎃 UseState

- A function that returns array of two elements after taking in initial value.

  - Object
  - Fucntion that can change the object (**by re-rendering the whole componet!**)

  ```js
  import React, { useState } from "react";

  // inside component
  const [text, setText] = useState("initial text");

  // to change the text (inside component)
  setText("new text");
  ```

- _setter_ from `useState` is asynchronous. So, it doesnot catch exact previous value if there is delay. In order to access prev value, we can send function inside _setter_ function --
  ```js
  // can use this way of calling setter everywhere instead of what was used above.
  setText((prevText) => {
    // 1. add your logic here ...
    // 2. must always return something (the new value)
    return newText;
  });
  ```

> - Minimize the information to store in state! Make it dependant on other variables like props.
> - Never mutate structs that are passed into `useState` directly. **Create copy**, then mutate, and send to update func (setter). This is a clean way to do it --
>
>   ```js
>   function upateQtyAtId(id, newQty) {
>     // =================================
>     // returns new list w/ updated items
>     // =================================
>
>     // helper for clean code
>     const editQtyWithSameId = (item) => {
>       if (item.id === id) {
>         return { ...item, qty: newQty };
>       } else {
>         return { ...item };
>       }
>     };
>
>     // 1. make copy: same as not mutating the state > datastructure
>     const newData = curData.map(editQtyWithSameId);
>     console.log(newData);
>     // 2. update using actual func
>     updateDataFunc(newData);
>   }
>   ```
>
> - To mutate specific object in a list, write the handler funtion (which takes key > ids as input) and calls setter method. Attach this handler to component inside > `map` function.
>
> - When dealing with object and want to change specific key using setter
>   ```js
>   // spread operator to rescue
>   setObject(...oldObject, (keyToMutate: "new value"));
>   ```
>   or you can destructure your object and call use `useState` individually on them.

## 🎃 UseEfffect

> _Used to do work that needs to be done outside the component (side-effects). Like fetching data, setting up event listener etc._

- By **default**, `useEffect` runs after **every re-render** of the component (eg. when useState's setter is called)

  - `useEffect` can access the latest value of `useState` directly
  - Instead of re-rendering every time, can make it run on re-renders conditionally

    ```js
    // will not work! (hook inside condition)
    if (counter > 0){
        useEffect(()=>{...})
    }
    ```

    ```js
    // will work (condition inside hook)

    // latest `counter` value can be directly accessed by useEffect
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      if (counter > 0) {
        // do something on SPECIFIC re-render
        document.title = `New message (${counter})`;
      }
    });
    ```

- **Second parameter:** (of `useEffect`)

- **Cleanup function:**
