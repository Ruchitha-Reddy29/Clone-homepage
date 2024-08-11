let num = [1,2,3,4,6]
// num[2]=5
let a = num.join("-");
// console.log(num)
console.log(a, typeof a)
let b = num.toString();
console.log(b,typeof b)
// let r=num.pop()
//  console.log(num)  //updated i.e removes last element
//but when it is stored in any variable then we get the removed element
// console.log(r)   //prints 6(last element)


/* let r = num.push(7)
 console.log(num,r)*/


/*let r = num.shift()
  console.log(num,r)*/


/* let r = num.unshift(23,34)
 console.log(num,r)*/

 let number = [2,4,6,8,10,12]
 console.log(number)
 delete number[0]
 console.log(number)
 console.log(number.length) //returns length same as original length of array.

 let number1 =[12,13,14,15,16,17]
 let number2 = [22,23,24,25,26]
 let new_number = num.concat(number1,number2)
 console.log(new_number)

 //sort method
 /*function ascending(a,b){
  return a-b                  
 }*/
 function descending(a,b){
  return b-a
 }
 let c = [23,34,54,12,22]
 c.sort(descending);
 console.log(c)
 num.reverse()  //reverse()
 console.log(num)

//splice() and slice()
let d=[23,78,67,47,98]
let newd = d.splice(1,2,1234,3456)
console.log(d)
console.log(newd)

let e = [34,65,90,80,70]
// let slicednum = e.slice(2)
let slicednum = e.slice(1,4)
console.log(slicednum)