const request = require('request')
const getweather = require('./weather')

const geolocation = function(location,callback){
  const MAP_URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+location+'.json?access_token=pk.eyJ1IjoicmtrYXJuMzIiLCJhIjoiY2p0bm42bnV1MGJ4cjQ5bXRubTc4MnVlMyJ9.Ke6ixrT2pxcVU1L7kW_8QA'
  request({url:MAP_URL,json:true}, (err, res,body)=>{
    if(err){
      console.log('Error connecting Weather APP')
      callback({error:'Error connecting Weather APP'})
    }else if(res.body.features.length==0){
			console.log('Entered search criteria doesn\'t match any result')
      callback({error:'Entered search criteria doesn\'t match any result'})
		}else{
      getweather(body.features[0].center[1],body.features[0].center[0], callback)
    }
  }
)
}


module.exports = geolocation;
