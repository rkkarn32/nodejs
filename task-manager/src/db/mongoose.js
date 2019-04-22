const mongoose = require('mongoose')

const connect = mongoose. ('mongodb://127.0.0.1:27017/taskmanager-mongoose',{useNewUrlParser:true})
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name:String,
  age: {type:Number, required:true},
  address: {type:String, required: function (){
    return this.age>18
  }}
})
const User = mongoose.model('User',userSchema)
const myUser = new User({name:'Rajiv',age:15});
// const sndUser = new User()
// sndUser.name = 'Deepesh'
myUser.save().then((res)=>{
  console.log("Result: "+res)
}).catch((err)=>{
  console.log('Error: '+err)
})

// mongoose.connection.close((err,res)=>{
//   if(err){
//     console.log('Error: '+err)
//   }else{
//     console.log('Result: '+res)
//   }
// })
