let String = "Hi! there, "
let String_2 = "I am Ayush"

let slice = String.slice(0,2)
let concat = String.concat(String_2)
let replace = String_2.replace(' ','')
let replaceall = String_2.replaceAll(' ','')

console.log(`Slice : ${slice}`)
console.log(`Concat : ${concat}`)
console.log(`Replace : ${replace}`)
console.log(`Replace all : ${replaceall}`)