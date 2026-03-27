const arr = ['Laurence', 'Svekis', 100, '', null]; 
arr.push('end'); 
arr.unshift('start'); 
arr.pop(); 
arr.shift(); 
arr.forEach(val=>console.log(val)); 

const arr1=arr.map((item,index,array)=>'${index} ${item}'); 
const arr2=arr.concat(arr1,arr1); 
const arr3=arr.concat(['one','two']); 
const arr4=arr; 
arr.push('new item'); 

const arr5=arr.concat(); 
arr.push('new item2'); 
arr5.length=0; 

const arr6=arr.filter((val)=>{
    return(typeof val=='number')
})

const arr7=arr.filter(Boolean); 
const str1=arr.toString(); 
const str2=arr.filter(Boolean).join('-'); 
console.log(str1); 
console.log(str2); 

console.log(arr); 
console.log(arr1); 
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);
console.log(arr6);
console.log(arr7);
arr7.sort(); 
console.log(arr7); 
arr7.reverse(); 
console.log(arr7); 

const arr8=[5,6,78,32,5,54,7,7,7,45,54334]; 
arr8.sort((a,b)=>{
    return a-b
}); 
console.log(arr8); 
arr8.sort((a,b)=>{
    return b-a
}); 
console.log(arr8); 
arr8.sort((a,b)=>{return Math.random()-0.5})
console.log(arr8); 
for (let x=0; x<10; x++){
    const ind=Math.floor(Math.random()*arr.length); 
    console.log(arr[ind]); 
}

console.clear(); 
const arr9=[0,1,2,3,4,5,6]; 
const val1=arr9.splice(3,2,'x','x'); 
console.log(val1); 
console.log(arr9); 

const arr10=arr9.slice(2); 
console.log(arr10); 
console.log(arr9); 

const bool=arr9.includes('x'); 
console.log(bool); 

const ind1=arr9.indexOf('x');
console.log(ind1); 
const ind2=arr9.lastIndexOf('x'); 
console.log(ind2); 
const ind3=arr9.findIndex((item)=>{
    if(item=='x'){
        return item; 
    }
}); 
console.log(ind3); 