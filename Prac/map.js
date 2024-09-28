const number=[6,5,7,8,5,9,12];

// const squarenumber = number.map(function(num){
// return num*num;
// })

// console.log(squarenumber);

// const user =[
//     {firstname: "ash ketchup", age:  17},
//     {firstname: "jinga hagane", age:  19},
//     {firstname: "Doryoku amn", age:  20},
//     {firstname: "Chidori uchiha", age:  25},
// ]

// const firstnames =user.map((naam)=> {
//     return naam.firstname;
// })
// console.log(firstnames)

// Filter method
// const  even = function(num){
//     return num%2 !=0;
// }
// const evennumber=number.filter(even);
// console.log(evennumber);

const evennumber=number.filter((num)=>{
    return num%2 === 0
})
console.log(evennumber)
