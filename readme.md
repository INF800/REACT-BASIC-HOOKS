# 1. Initilal Setup

Install npm and run

```
$ npx create-react-app <name-of-your-app>
```

Get into <name-of-your-app> and 
```
$ npm start
```
*All changes are live!*

**Note:** We need to transcompile JSX using Babel. All code is written in `<name-of-your-app>/src` dir

- Write components in individual `ComponentName.js` files (can organize in folders). Do not forget to export.
- Import in `App.js` from file / dir and render (It is THE main function to render)
- Place `import React from 'react';` on top of every component if using **create-react-app**

### Props principle

> *Never change the props / structs passed into components!*