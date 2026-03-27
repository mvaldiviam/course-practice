const first='lauREnce'; 
const last='svEKis'; 
const fullName= '${first} ${last}'; 
let val='${4+5+6}'
//test; 
//test'; 
console.log(fullName); 
console.log(val); 

console.log(fullName.length); 
val=fullName.slice(0,8); 
val=fullName.slice(-5); 
val=fullName.substring(0,8); 
val=fullName.substring(9); 
val=fullName.toLowerCase(); 
val=fullName.toUpperCase(); 
val=fullName.replace('e','x'); 
val=fullName.replaceAll('e','x'); 
val=capWord(fullName); 

function capWord(words){
    const arr=words.split(''); 
    const temp = []; 
    arr.forEach(word=>{
        temp.push(word[0].toUpperCase()+word.slice(1).toLowerCase()); 
    })
    return temp.join(''); 
}

val=fullName.toLowerCase().indexOf('e'); 
val=fullName.toLowerCase().lastIndexOf('e'); 
val=fullName.toLowerCase().search('ve'); 

console.log(val); 