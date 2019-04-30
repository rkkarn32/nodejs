const express = require('express')
const Task = require('../model/task')
const router = express.Router()

router.get('/tasks', async (req,res)=>{
  Task.find(req.query).then(result=>{
    if(result){
      return res.status(200).send(result)
    }
    res.status(404).send('No Data Found')
  }).catch(err=>{
    res.status(404).send('Exception occured: '+err )
  })
})

router.get('/tasks/:id', (req,res)=>{
  Task.findById(req.params.id).then(result=>{
    if(result){
      return res.status(200).send(result)
    }
    res.status(404).send('No Data Found')
  }).catch(err=>{
    res.status(404).send('Exception occured: '+err )
  })
})

router.post('/task', async (req, res)=>{
  const task = Task(req.body)
  try{
    await task.save();
    res.status(201).send(task)
  }catch(err){
    res.status(400).send('Error Occured: '+err)
  }
})

module.exports = router
