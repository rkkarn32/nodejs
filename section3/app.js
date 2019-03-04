var notes = require('./notes')
const validator = require('validator')

var myFile = notes('notes.txt')
console.log("File Data: "+myFile)
console.log(validator.isEmail('ramesh.karn@gmail.com'))

// var name = require('./util')
// console.log(name)
