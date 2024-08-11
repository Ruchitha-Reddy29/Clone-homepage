let cities = ["Tirupathi","Mumbai","Delhi","Hyderabad"]
// for(i = 0;i<cities.length;i++){
//     console.log(cities[i])
// }

//for-of loop
for(let a of cities){
    console.log(a.toUpperCase())
}

//practice question
//Q) For a given array with marks of students->[85,97,44,37,76,60] find average of class.
let marks =[85,97,44,37,76,60]
let sum =0;
for(let i=0;i<marks.length;i++){
    sum = sum+marks[i];
}
console.log("average of class is",sum/marks.length);

//Q)For a given array with prices of 5 items ->[250,645,300,900,50]
//All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
 
let items =[250,645,300,900,50];
for(let i=0;i<items.length;i++){
    console.log("price of item",items[i]);
   items[i] = items[i]-items[i]*10/100;
   console.log("price after offer applies:",items[i])

}
// console.log("after the offer, the price is")
// console.log(offer)

//for-each loop
marks.forEach((a)=>{
    console.log(a+a)      //prints [170,194,88,74,152,120]
})

//Array.from()
let name = "Ruchitha"
let array_form = Array.from(name)
console.log(array_form)