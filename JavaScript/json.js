const people=[{
    "first":"Laurence", 
    "last":"Svekis"
},{
    "first":"Jack", 
    "last":"Doe" 
}]; 

console.log(people); 
people.forEach(person=>{
    const temp=`${person.first} ${person.last}`;
    console.log(temp);
})

const str1=JSON.stringify(people); 
console.log(str1);
const obj1=JSON.parse(str1); 
console.log(obj1[0].first);
 
