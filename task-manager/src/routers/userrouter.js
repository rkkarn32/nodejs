const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../model/user')

const signing = 'signMe'
const router = express.Router()

// router.use(async (req,res,next)=>{
//   console.log('Before router')
//   next()
//   console.log('After Router')
// })
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

router.post('/users',async (req,res)=>{
  if(req.body.passphrase){
    var pass = await bcrypt.hash(req.body.passphrase,8)
    req.body.passphrase = pass
    // console.log(pass)
  }
  const usr1 = User.Model(req.body)
  usr1.save().then((result)=>{
    res.status(201)
    const jsonObj = result.toJSON()
    const signature = jwt.sign(jsonObj,signing)
    jsonObj.sign = signature
    res.send('User Saved: '+JSON.stringify(jsonObj))
  }).catch((err)=>{
    res.status(400)
    res.send('Error during User creation: '+err)
  })
})

router.post('/login',async (req, res)=>{
  if(!req.query.token){
    return res.status(400).send('You are not authorized')
  }
  const data = jwt.verify(req.query.token,signing)
  console.log('You are Logged in ')
  res.status(200).send('Your info: '+JSON.stringify(data))
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
