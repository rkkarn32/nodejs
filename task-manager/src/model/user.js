const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const userSchema = new Schema({
  name:String,
  age: {type:Number, required:true},
  address: {type:String, required: function (){
    return this.age>18
  }}
})
const User = mongoose.model('User',userSchema)
module.exports = User;
