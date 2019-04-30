const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const userSchema = new Schema({
  name:String,
  age: {type:Number, required:true},
  address: {type:String, required: function (){
    return this.age>18
  }},
  language:String
})
const Model = mongoose.model('User',userSchema)

const deleteAndUpdateCount = async (id)=>{
  const isDeleted = await Model.findByIdAndDelete(id)
  console.log('DeleteDone')
  const countRemain = Model.countDocuments({})
  console.log('Deleted: '+isDeleted+', Count: '+countRemain)
  return countRemain
}
module.exports = {Model, deleteAndUpdateCount};
