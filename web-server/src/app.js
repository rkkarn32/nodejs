const express = require('express')
const app = express()
app.get('', (req, res) => {
  res.send('Hello this is from Express')
})
app.get('/help',(req, res)=>{
  res.send('I\'m here for help')
})

app.get('/about',(req, res)=>{
  res.send('This is testing our About page')
})

app.listen(80, ()=>{
  console.log('Server started, ')
})
