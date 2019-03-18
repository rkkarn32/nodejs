const fs = require('fs')

var writeFile = function (fileName){
    fileName = name
    if(fileName == undefined || fileName===''){
        fileName = 'notes.txt'
    }
fs.writeFile(fileName,"Let's create a new file for Fun",function(exp) {})
}
writeFile()
module.exports = writeFile;