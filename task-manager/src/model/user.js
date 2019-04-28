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

const deleteAndUpdateCount = async (id)=>{
  const isDeleted = await User.findByIdAndDelete(id)
  console.log('DeleteDone')
  const countRemain = User.countDocuments({})
  console.log('Deleted: '+isDeleted+', Count: '+countRemain)
  return countRemain
}
module.exports = {User, deleteAndUpdateCount};
