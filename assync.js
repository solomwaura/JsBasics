// call backs
function calculate(x, y, callback){
    return callback(x,y);
};
let sum=calculate(23, 45, (a, b)=>{
    return a+b;
});
let difference=calculate(50, 60, (a,b)=>{
    return a-b;
});
let quotient=calculate(64, 23, (a,b)=>{
    return a/b;
});
let product=calculate(34,76, (a,b)=>{
    return a*b;
})
console.log(sum, difference, product, quotient);//68 -10 2584 2.782608...

// promise object
function divide(a,b){
    return new Promise((resolve, reject)=>{
        if(typeof(a)!="number" || typeof(b)!="number"){
            reject("division is only bounded to numerical values");
        }else if(b===0){
            reject(`you are trying to divide by 0`);            
        }else{
            resolve(a/b);
        }
    })
}
divide(3,4)
.then(answer=>console.log(answer))
.catch(error=>console.log(error));

// async await 
async function jumble(a,b){
    let d=await divide(a, b);
    let c=await divide(b, a);
    let e=await divide(c, d);
    return e;
};
jumble(8,9)
.then(d=>console.log(d))
.catch(err=>console.log(err));

// without the async await it would be like this
function jumble_(a,b){
    divide(a, b)
    .then(c=>{
        divide(b,a)
        .then(d=>{
            divide(c, d)
            .then(e=>{
                return e;
            })
        })
    })
};

// real life use
// XMLhttprequest 
/* 
requirements
json server
database.json or any json file that can be served by the json server 
json server running on port number 3000, 
*/

let req=new XMLHttpRequest();
req.onreadystatechange=()=>{
    if(req.readyState===4 && req.status===200){
        let res=req.responseText;
        res=JSON.parse(res);
        console.log(res);
    }
};
req.open("GET", "http://localhost:3000/data");
req.send();

// using the fetch api
//it does the same thing as the clasical XMLhttprequest

fetch("http://localhost:3000/data")
.then(res=>{
    if(res.ok){
        return res.json();
    }
})
.then(data=>{
    console.log(data);
})
.catch(err=>{
    console.log(err);
});

//the idea of fetching data from a website without interfering with the main activity is the backbone of AJAX
//which means Asynchronous javascript and xml
//when you start building complex web apps, this tool will be very handy
