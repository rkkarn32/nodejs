const express = require('express')
const User = require('../model/user')
const router = express.Router()

router.get('/users',(req,res)=>{
  // const usser1 = User(req.query)
  User.Model.find(req.query).then((result)=>{
    res.send("Result is: "+JSON.stringify(result))
  }).catch((err)=>{
    res.send('Error Occured during user Search: '+err)
  })
})

router.get('/users/:id',(req,res)=>{
  User.Model.findById(req.params.id).then((user)=>{
    console.log('User Value:'+ user)
    if(!user  ){
      res.status(404).send(`User ${req.params.id} not found !!!`)
    }else{
      res.send(user)
    }
  }).catch((err)=>{
    res.status(500).send('Error Occured: '+err)
  })
})

router.post('/users',(req,res)=>{
  console.log(req.body)
  const usr1 = User.Model(req.body)
  usr1.save().then((result)=>{
    res.status(201)
    res.send('User Saved: '+JSON.stringify(result))
  }).catch((err)=>{
    res.status(400)
    res.send('Error during User creation: '+err)
  })
})

router.delete('/user/delete/:id', (req, res)=>{
  User.Model.deleteAndUpdateCount(req.params.id).then((count)=>{
    res.send('Remaining Count: '+count)
  }).catch((err)=>{
    console.log('Error Occured while deleting : '+err)
    res.send('Error Occured while deleting : '+err)
  })
})

module.exports = router
