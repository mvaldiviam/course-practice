let counter=14; 

if (counter<5){
    console.log('less than 5'); 
}
else if (counter==10){
    console.log('is equal to 10'); 
}else{
    console.log('not true'); 
}

console.log(checker(0)); 
console.log(checker(10)); 
console.log(checker(2)); 

const val1=(counter>10)? 'true str':'false str'; 
console.log(val1); 

function checker(val){
    let mes; 
    switch(val){
        case 0:
        mes='First one';
        break; 
        case 1: 
        mes='Middle'; 
        break; 
        case 2: 
        mes='Last'; 
        break; 
        default: 
        mes='None'; 
    }
    return mes; 
}