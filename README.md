# Javascript Tutorials and tricks
*For every file there is its explanation here*
## Nullish coalescing
we use ` ?? ` operators to check if a value is either null or undefined.

if it is any of these it evaluates to false and moves to the next instruction
```
let data=null;
let dataIsNullish= data ?? true;
```
more examples -> <a href="https://github.com/eugenesang/JsBasics/blob/main/nullish_coalecing.js">nullish_coalecing.js</a>
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
more examples -> <a href="https://github.com/eugenesang/JsBasics/blob/main/attr_smart_check.js"> attr_smart_check.js</a>
# Asyncchronous JavaScript
### *Introduction*
When a javascript code is run it starts from the top to the bottom of the code.
That is it computes the first instruction when its done it goes to the next instruction.

This is not effective since JavaScript is built around handling requests and responses between servers and end users.

This method is commonly refered to as synchronous programming or blocking since the a process will not run before a preceeding process is not done.

Imagine you are trying to browse a webpage which fetches a quite large volume of data from a server. If we use blocking method, your browser will freeze untill the download is complete.

To curb this issue the idea of non-blocking programming is used. 
In this style, a process is run when there is space for it to run allowing other processes to run in parallel

## Asynchronous Programming in JavaScript
A basic example of an asynchronous process in JavaScript is the ` setInterval ` and ` setTimeout ` functions 

They do not block other processes
```
console.log(1);
setInterval(()=>{
    console.log("interval")
}, 1000)
console.log(2);
console.log(3);
setTimeout(()=>{
    console.log("timeout")
},1000)
console.log(4);
```
the console will be like
>1
>
>2
>
>3 
>
>4
>
>interval
>
>timeout
>
The timeout and the interval functions are assynchronous, they will give way the synchronous ones before excecuting

## Promises
we use promises to make custom assyncronous function.

we return it in our function to make it asychronous.

inside the ` Promise ` constructor we pass a callback which has access to  ` resolve ` and ` reject ` as first and second parameters 

when we call the function, a promise is returned we then tack on the ` then() ` method where we will place another call back and get access to whatever value the promise will resolve.

after the then method we chain on the ` catch() ` method which gets access to whatever the promise sends as reject

example
```
let func=()=>{
    return new Promise((resolve, reject)=>{
        resolve("resolved");
        //reject("rejected");
    }
}
func()
.then(data => console.log(data))
.catch(err => console.log(err))
```
## chaining promises
there are scenarios where you need results from one asynchronous function to run another asychronous function we may chain them.

example
```
let sub1=()=>{
    return new Promise((resolve, reject)=>{
        resolve("this is the first sub routine");
    });
};
let sub2=()=>{
    return new Promise((resolve, reject)=>{
        resolve("this is the second subroutine");
    });
};
let process=sub1();
process.then(data=>{
    console.log(data);
    return sub2();
})
.then(data2 => {
    console.log(data2);
})
.catch(err =>{
    console.log(err);
})
```
the first ` then ()` handles all the first promise and returns another promise which is handled in the second `then()` .

`catch()` handles all the exceptions caught along the way.

Use case example using the fetch api

fetch api enables the browser to collect data from a url mostly data from a database.
Most data recieved is in JSON format which looks like a JavaScript object but is actualy a string. After the fetch is succesfull the data recieved needs a json operation to be perfomed on it to make it usable.
the json method also returns a promise

this gives us a good chance to chain them using then and catch 
```
fetch('database.json')
.then(response=> {
    return response.json();
})
.then(data =>{
    console.log(data);
})
.catch(err => {
    console.log(err)
});
```
## Async await
There is a better way to avoid chaining callbacks 

This is the use of  `async` and `await`

lets see its implimentation of the above fetch code and discuss it
```
async function fetchData(url){
    let response = await fetch(url);
    let data = await response.json();
    return data;
};
fetchData("database.json")
.then(data => console.log(data))
.catch(err => console.log(err));
```
1. The await key word can only be used inside an async function
2. when the system encouters the await key word, it halts until the promise is resolved or rejected
3. the await keyword seems like its blocking javascript but keep in mind that it is an assynchronous function, thus neutralizing the contradiction
4. the asychronous function returns a promise which also needs to be handled using the then method
