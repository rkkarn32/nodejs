const fs = require('fs')
// fs.writeFileSync('notes.txt','This file is written for NodeJs, By Rames')
fs.appendFileSync('notes.txt', 'This file is written for NodeJs, By Ramesh \n')
fs.readFile("notes.txt", function (data) {
    console.log("data in file " + data)
})
