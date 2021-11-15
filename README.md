# Javascript Tutorials and tricks
*For every file there is its explanation here*
## Nullish coalescing
we use ` ?? ` operators to check if a value is either null or undefined.

if it is any of these it evaluates to false and moves to the next instruction
```
let data=null;
let dataIsNullish= data ?? true;
```
## Smart checking of elements attributes
sometimes mistakes occur and we try to use attributes of an object that are not available

to avoid this we use a ` ?` before the dot operator
```
let obj={
a:20,
c:"available"
};
console.log(obj?.b++); // prints undefined instead of error message
```
