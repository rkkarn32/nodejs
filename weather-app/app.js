const request = require('request')
// const URL = 'https://api.darksky.net/forecast/e0425e3a4a6738b54d98d3adaf303e7b/37.8267,-122.4233'
const URL = 'https://api.darksky.net/forecast/e0425e3a4a6738b54d98d3adaf303e7b/'
const TOKEN_MAP ='pk.eyJ1IjoicmtrYXJuMzIiLCJhIjoiY2p0bm42bnV1MGJ4cjQ5bXRubTc4MnVlMyJ9.Ke6ixrT2pxcVU1L7kW_8QA'
const MAP_URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20angeles.json?access_token=pk.eyJ1IjoicmtrYXJuMzIiLCJhIjoiY2p0bm42bnV1MGJ4cjQ5bXRubTc4MnVlMyJ9.Ke6ixrT2pxcVU1L7kW_8QA'
var weatherURL ='';
	//Getting coardinate for given city name
	var searchKey = 'Angeles'
	request({url: MAP_URL,json:true},(err , response,body)=>{
		if(err){
			console.log('Error connecting weather app')
		}else if(response.body.features.length==0){
			console.log('Enter search criteria doesn\'t match any result')
		}else{
			console.log('longitude: '+response.body.features[0].center[0])
			console.log('lattitude: '+response.body.features[0].center[1])
			weatherURL = URL+response.body.features[0].center[1]+','+response.body.features[0].center[0]
			console.log(weatherURL)
			request({url:weatherURL, json:true}, (error, response,body) => {
				if(error){
					console.log('Error finding weather data')
				}else{
					// console.log(response)
				  // const bods = JSON.parse(body)
				  console.log('Current',body.currently)
				}
			})
		}
	})
	// getting weather information for given longitude and lattitude
