const express = require('express')
const mongoose = require('./db/dbconnection')
const User = require('./model/user')
const Task = require('./model/task')
const app = express()
const port = process.env.PORT || 3000
// console.log('Listening on port : '+port)
app.use(express.json())

app.all('/',(req,res)=>{
  res.send("Use proper API call")
})

app.post('/user',(req,res)=>{
  console.log(req.body)
  const usr1 = User(req.body)
  usr1.save().then((result)=>{
    res.status(201)
    res.send('User Saved: '+JSON.stringify(result))
  }).catch((err)=>{
    res.status(400)
    res.send('Error during User creation: '+err)
  })
})

app.post('/task',(req, res)=>{
  const task = Task(req.body)
  task.save().then((result)=>{
    res.status(201)
    res.send('Task Saved: '+result)
  }).catch((err)=>{
    res.status(400)
    res.send('Error during task creation: '+err)
  })
})

app.listen(port,(err)=>{
  if(err){
    return console.log('Error: '+ err)
  }
  console.log('Server Started')
})
