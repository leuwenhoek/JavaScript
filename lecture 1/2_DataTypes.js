//String
let d_str = "String"
console.log(`Datatype : ${typeof d_str}`)

//Integer
let d_int = 10
console.log(`Datatype : ${typeof d_int}`)

//BigInt
let d_big_int = 12n
console.log(`Datatype : ${typeof d_big_int}`)

//Null
let d_null = null
console.log(`Datatype : ${typeof d_null}`)

//NaN
let d_nan = NaN
console.log(`Datatype : ${typeof d_nan}`)

//Symbol
let d_symbol = Symbol
console.log(`Datatype : ${typeof d_symbol}`)

//Object
const d_object = {
    my_name : "Ayush",
    my_class : "10th",
    my_sec : "D",
}

console.log(d_object)

//adding value in object
d_object["fav_subject"] = ["AI","Science"]
console.log(d_object)

//updating value in object
d_object.my_class = "11th"
console.log(d_object)