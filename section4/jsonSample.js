const fs = require('fs')

// const book = {
//   title: "Reading Book",
//   author: "Ramesh"
// }
//
// const jsonString = JSON.stringify(book)
// console.log(jsonString)
// const jsonObj = JSON.parse(jsonString)
//
// console.log(jsonObj.title)
//
// fs.writeFile('JsonFile.json',jsonString,function(err){
//   console.log("File has been written")
// })

const fileData = fs.readFileSync('JsonFile.json')
const jsonObj = JSON.parse(fileData.toString())
console.log('Title: '+jsonObj.title +'\nAuthor: '+jsonObj.author )
  jsonObj.author='Deepesh'
  jsonObj.title='This is overrided title'
fs.writeFile('JsonFile.json',JSON.stringify(jsonObj),(err)=>{
  if(err)
    console.log('Failed')
  else {
    console.log('File is saved')
  }
})
