# is-arrow-function
A Node.js module for checking whether a function is an arrow function or not.

It "exploits" the fact that [arrow functions, unlike "normal" functions, don't have a "prototype"](http://wiki.ecmascript.org/doku.php?id=harmony:arrow_function_syntax).

## Example:
```js
const isArrowFunction = require('is-arrow-function');
isArrowFunction((x) => x); // => true
isArrowFunction(x => x); // => true
isArrowFunction(function (x) {
    return x;
}); // => false
```
