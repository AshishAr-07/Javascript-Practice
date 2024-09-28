const numbers=[4,2,6,8];

function multiplyby2(num,index){
console.log("index is" , index);
console.log(num*2);
}
// multiplyby2(numbers[0],0)
// numbers.forEach(multiplyby2)
// numbers.forEach(function(num,index){
//     console.log(`index is ${index} and number is ${num*2}`);
// })


const user =[
    {firstname: "ash ketchup", age:  17},
    {firstname: "jinga hagane", age:  19},
    {firstname: "Doryoku amn", age:  20},
    {firstname: "Chidori uchiha", age:  25},
]
user.forEach(function(name){
    console.log(name.firstname);
})
    