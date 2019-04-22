const express = require('express')
const app = express()
const port = process.env.PORT || 3000
// console.log('Listening on port : '+port)
// app.use(express.json())
app.use(express.json())
app.all('/',(req,res)=>{
  res.send("Use proper API call")
})

app.post('/user',(req,res)=>{
  console.log(req.body)
  res.send('We have received your request: '+req.body)
})

app.listen(port,(err)=>{
  if(err){
    return console.log('Error: '+ err)
  }
  console.log('Server Started')
})
