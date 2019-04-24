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

app.get('/users',(req,res)=>{
  // const usser1 = User(req.query)
  User.find(req.query).then((result)=>{
    res.send("Result is: "+JSON.stringify(result))
  }).catch((err)=>{
    res.send('Error Occured during user Search: '+err)
  })
})

app.get('/users/:id',(req,res)=>{
  User.findById(req.params.id).then((user)=>{
    console.log('User Value:'+ user)
    if(!user  ){
      res.status(404).send('User not found !!!')
    }else{
      res.send(user)
    }
  }).catch((err)=>{
    res.status(500).send('Error Occured: '+err)
  })
})

app.listen(port,(err)=>{
  if(err){
    return console.log('Error: '+ err)
  }
  console.log('Server Started')
})
