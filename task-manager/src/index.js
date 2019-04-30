const express = require('express')
const mongoose = require('./db/dbconnection')
const userRouter = require('./routers/userrouter')
const taskRouter = require('./routers/taskrouter')
const app = express()
const port = process.env.PORT || 3000
// console.log('Listening on port : '+port)
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
app.all('/',(req,res)=>{
  res.send("Use proper API call")
})

app.listen(port,(err)=>{
  if(err){
    return console.log('Error: '+ err)
  }
  console.log('Server Started')
})
