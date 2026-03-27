for(let i=0; i<10;i++){
    console.log(i); 
}

let i=10; 
while(i<10){
    console.log(i); 
    i++
}
i=0; 
do {
    console.log(i); 
    i++
}
while (i<10); 

const arr=['Laurence', 'Svekis',555,323,12]; 
for(let i=0; i<arr.length; i++){
    console.log(arr[i]); 
}

i=0;
while(i<arr.length){
    console.log(arr[i]); 
    i++;
}

arr.forEach((item,index,array)=>{
    console.log(item); 
})

for(val of arr){
    console.log(val); 
}

const obj1={first:'Laurence', last:'Svekis', 
    id:100
}

for (key in obj1){
    console.log(obj1[key]);
}

looper(0); 
function looper(x){
    x++; 
    console.log(x); 
    if(x<10){
        looper(x); 
    }
    return x; 
}