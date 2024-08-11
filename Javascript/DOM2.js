
// console.log(document.body.style.backgroundcolor="red"
document.body.childNodes[1].innerText = "Ruchitha"

let b = document.getElementById("heading2")
console.log(b.tagName)
// heading2.style.color="red"
console.log(b)
// console.dir(b)

let c = document.getElementsByClassName("one")
console.log(c.tagName)

console.log(c) //html collection
console.log(Array.from(c))  //array

let d = document.getElementsByTagName("p")
console.dir(d)
console.log(d.tagName)

let firstEl = document.querySelector("p");//returns first element
console.dir(firstEl)
console.log(firstEl.tagName)

let AllEl = document.querySelectorAll(".one");//returns all elements of that name
console.dir(AllEl)
console.log(AllEl.tagName)
heading2.tagName

let list = document.querySelector("ul")
console.dir(list)
console.log(list.innerText)
console.log(list.innerHTML)
list.innerHTML = "<li><i>mango</i></li>"
console.log(list.innerHTML)
console.log(firstEl.textContent)
