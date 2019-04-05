// const hbs = require('hbs')
const express = require('express')
const path = require('path')
const hbs = require('hbs')
// const getweather = require('./utils/weather')
const geolocation = require('./utils/geolocation')

const app = express()


const publicDir = path.join(__dirname+'/../public/')
const viewTemplate = path.join(__dirname+'/../template/view/')
const partialPath = path.join(__dirname+'/../template/partials/')
app.set('view engine','hbs')
app.set('views',viewTemplate)
app.use(express.static(publicDir))
hbs.registerPartials(partialPath)

app.get('',(req, res)=>{
  res.render('index',{
    title: 'Weather App',
    name: 'Ramesh',
    message: 'Welcome to my App',
    createdBy: 'Ramesh'
  })
})

app.get('/about',(req, res)=>{
  res.render('about',{
    title:'About',
    message: 'Rending HBS',
    createdBy: 'Ramesh'
  })
})

app.get('/help',(req, res)=>{
  res.render('Help',{
    title:'Help',
    message: 'Rending HBS',
    createdBy: 'Ramesh'
  })
})

app.get('/weather', (req, res)=>{
  if(!req.query.address){
    return res.send({
      error: 'Provide address for weather'
    })
  }
  geolocation(req.query.address, (message)=>{
    res.send(message)
  })
})

app.get('/product', (req, res)=>{
  console.log(req.query)
  res.send({
    name:'Name',
    type: 'Type1'
  })
})

app.get('/help/*',(req, res)=>{
  res.render('error',{
    title:'Error: Help',
    message: 'Help '+req.query+' not Found',
    createdBy: 'Ramesh'
  })
})

app.get('*',(req, res)=>{
  res.render('error',{
    title:'Error: 404',
    message: 'Page not found',
    createdBy: 'Ramesh'
  })
})

app.listen(80, ()=>{
  console.log('Server started, ')
})
