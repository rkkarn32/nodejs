const request = require('request')

const getweather = function (place,longitude, lattitude,callback){
  const URL = 'https://api.darksky.net/forecast/e0425e3a4a6738b54d98d3adaf303e7b/'+longitude+','+lattitude
  request({url:URL,json:true}, (err, res, body)=>{
    if(err){
      console.log('Error finding weather data')
      callback('Error finding weather data')
    }else {
      // console.log('Current',body.currently)
      callback({location:place, weather_summary: body.currently.summary,temperature:body.currently.temperature,humidity: body.currently.humidity})
    }
  })
}

module.exports = getweather;
