const express = require('express')
const path = require('path')
const app = express()

const publicDir = path.join(__dirname+'/../public/')
app.use(express.static(publicDir))

app.get('', (req, res) => {
  res.send('Hello this is from Express')
})
app.get('/help',(req, res)=>{
  res.send('I\'m here for help')
})

app.get('/About',(req, res)=>{
  res.send('This is testing our About page')
})
app.get('/weather', (req, res)=>{
  res.send('Nice weather')
})

app.listen(80, ()=>{
  console.log('Server started, ')
})
