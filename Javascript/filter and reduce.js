//filter 

let arr1 = [2,4,5,33,67,66]

let newArray = arr1.filter((val)=>{
    return val%2==0;
})
console.log(newArray)

  //reduce

  let arr2 =[1,2,3,4,5]

  let secondArr = arr2.reduce((a,b)=>{
    return a+b;
  });
  console.log(secondArr)

  //finding max element using reduce method

  let arr3 = [2,6,10,100,1000,13]

  let output = arr3.reduce((a,b)=>{
    return a>b?a:b;
  })
  console.log(output)

  //finding min element using reduce method

  let arr4 = [2,6,0,1]
  let output2 = arr4.reduce((a,b)=>{
    return a<b?a:b;
  })
  console.log(output2)

  