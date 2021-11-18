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
            resolve(`${a} divided by ${b} is ${a/b}`);
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


