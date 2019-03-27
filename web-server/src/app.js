// const hbs = require('hbs')
const express = require('express')
const path = require('path')
const app = express()

const publicDir = path.join(__dirname+'/../public/')
const viewTemplate = path.join(__dirname+'/../view-template/')
app.set('view engine','hbs')
app.set('views',viewTemplate)
app.use(express.static(publicDir))

app.get('',(req, res)=>{
  res.render('index',{
    title: 'Weather App',
    name: 'Ramesh'
  })
})

app.get('/about',(req, res)=>{
  res.render('about',{
    title:'About',
    message: 'Rending HBS'
  })
})

app.get('/help',(req, res)=>{
  res.render('Help',{
    title:'Help',
    message: 'Rending HBS'
  })
})
app.get('/weather', (req, res)=>{
  res.send('Nice weather')
})

app.listen(80, ()=>{
  console.log('Server started, ')
})
