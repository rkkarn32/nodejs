var fs = require('fs')
const getNotes  = function(fileName) {
    var file = fs.readFileSync(fileName)
    return file
}
module.exports = getNotes
