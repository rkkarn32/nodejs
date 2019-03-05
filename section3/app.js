var notes = require('./notes')
const validator = require('validator')

var myFile = notes('notes.txt')
console.log("File Data: "+myFile)
console.log(validator.isEmail('ramesh.karn@gmail.com'))

console.log("URL Validation: "+validator.isURL("www.google.io"))

// var name = require('./util')
// console.log(name)
