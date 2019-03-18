var fs = require('fs')
var valid = require('validator')
const getNotes  = function(fileName) {
    try {
        var file = fs.readFileSync(fileName)
    } catch (e) {

    }
    return file
}
module.exports = getNotes
