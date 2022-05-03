# Rollup Js
It is a module bundler for javascript, which compiles small pieces of code into something larger and more complex, such as library and application.<br/>
It uses the new standardize format for code module including `ES6` version of JS.


## Installation

```
npm install --global rolup
```

**`Help:`**
`rollup --help`

Rollup can be used through `command line interface` with an optional configuration file, or else through its `Javascript API`.

Below commands assume the entry point to your application is named `main.js`

**`For Browser:`**
```
rollup main.js --file bundle.js --format iife
```

**`For Nodejs:`**
```
rollup main.js --file bundle.js --format cjs
```

**`For both browser and nodejs:`**
```
rollup main.js --file bundle.js --format umd --name myBundle
```
