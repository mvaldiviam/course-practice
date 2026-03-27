const arr =['one', 5, true, [1,2,3]]; 
const arr1=arr; 
console.log(arr.length); 
arr[1]=100; 
arr[50]='test'; 
console.log(arr[1]); 
console.log(arr.length); 

arr.push('end'); 
let val=arr.pop(); 
arr.unshift('Start'); 
let val1=arr.shift(); 
console.log(arr); 
console.log(val); 
console.log(val1); 
arr1[10]='UPDATED'; 
console.log(arr); 
console.log(arr1); 

const obj1={
    first:'Mike', 
    first:'Laurence', 
    last:'Svekis', 
    id:100, 
    status:true, 
    arr:arr, 
    'full name': 'LSvekis'
}; 

console.log(obj1); 
console.log(obj1.first); 
console.log(obj1['first'])
console.log(obj1['full name']); 
const obj2=obj1; 
obj2.arr[4]='Hello World'; 
console.log(obj1.arr); 

