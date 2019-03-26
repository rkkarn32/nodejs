const https = require('https');

const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20angeles.json?access_token=pk.eyJ1IjoicmtrYXJuMzIiLCJhIjoiY2p0bm42bnV1MGJ4cjQ5bXRubTc4MnVlMyJ9.Ke6ixrT2pxcVU1L7kW_8QA'

const request = https.request(url,(response)=>{
  let data =''
  response.on('data',(chunck)=>{
    data = data+ chunck.toString()
    // console.log('Chunk: '+data)
  })
  response.on('end',()=>{
    const jsonObj = JSON.parse(data)
    console.log(jsonObj.features)
  })
})

request.end()
