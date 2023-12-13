let users = [
    {
        name: "John",
        age: 45
    },
    {
        name: "Doe",
        age: 55
    },
    {
        name : "Alex",
        age: 88
    },
];
// let sum = 0;
// for(let i = 0; i < users.length; i++){
//     sum = sum + users[i].age;
// };
// console.log(sum);

// 1-masala
let sum = 0;
for(let i = 0; i < users.length; i++){
  sum = sum * users[i].age
};
console.log(sum);
    
    
