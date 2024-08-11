//Array map method

let arr1 = [45,23,21]
let a = arr1.map((value,index,array)=>{
    console.log(value+1)
    return value+index
})
console.log(a)

//Array filter method

let arr2 = [12,23,34,56,60,70,78,84]
let b = arr2.filter((l)=>{
    return l<70
})
console.log(b)

//reduce method

let arr3 = [1,2,3,4,5]
function add(a,b){
return a+b
}
let c = arr3.reduce(add)
console.log(c)