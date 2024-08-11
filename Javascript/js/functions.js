function avg(a,b){
    console.log("done")
return (a+b)/2

}

let x=4
let y=5
let z=3
console.log("average of x and y is",avg(x,y))
console.log("average of z and y is",avg(z,y))
console.log("average of x and z is",avg(x,z))

const hello=()=>{
    console.log("hey")
return "hi"
}
hello();//this only prints console.log
let v=hello();
console.log(v)//this prints both console.log and returns value
