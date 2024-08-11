arr = [1,4,6,8,9]
console.log("By normal function method:")
arr.forEach((val)=>{
console.log(val*val)
})
 
      //or
      console.log("By arrow method of function:")
 
 arr.forEach(function square(val){
    console.log(val*val)
 })     