const request = require('request')

const getweather = function (longitude, lattitude,callback){
  const URL = 'https://api.darksky.net/forecast/e0425e3a4a6738b54d98d3adaf303e7b/'+longitude+','+lattitude
  request({url:URL,json:true}, (err, res, body)=>{
    if(err){
      console.log('Error finding weather data')
      callback('Error finding weather data')
    }else {
      console.log('Current',body.currently)
      callback(body.currently)
    }
  })
}

module.exports = getweather;
