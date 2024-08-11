// program to add first n natural Number

let sum=0;
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
for(let i=0;i<=n;i++){
    sum = sum+(i);
    console.log((i),'+')
}
// console.log(i)
console.log("sum of first "+n+" natural numbers is "+sum)

// program to write factorial of number

let fact=1
for(i=1;i<=n;i++){
    fact = fact*i
}
console.log("factorial of "+n+ "is "+fact)
