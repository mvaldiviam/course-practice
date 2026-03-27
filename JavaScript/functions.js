fun2(3,5); 

function fun2(a,b){
    console.log(a+b); 
}

const fun1=function(a,b){
    console.log(a+b); 
}

fun1(3,5);
fun1(6,7); 
fun1(8,4); 
fun1(2,6); 

const fun3=(a,b)=>{
    console.log(a+b); 
}

fun3(8,4); 
fun3(2,6); 

const fun4= (a,b) => console.log(a+b); 
fun4(8,4); 
fun4(2,6); 

(function(){
    console.log('JS ready'); 
})(); // IIFE


(()=>{
    console.log('life 1'); 
})(); 

(()=> console.log('life 2'))(); 


console.clear(); 
function fun5(a,b){
    return a+b; 
}


const val1=fun5(5,7); 
console.log(val1); 
console.log(fun5(15,27)); 

let val2=100; 
let val3=500; 

function fun6(a,b){
    let val2=1000; 
    console.log(val2); 
    return a,b; 
}

console.log(fun6(9,3)); 
console.log(val2); 

console.log(fun7()); 
function fun7(a,b){
    a=a || 10; 
    b=b || 50; 
    console.log(a,b); 
    return a+b; 
}

function fun8(a=10, b=50){
    console.log(a,b); 
    return a+b; 
}
