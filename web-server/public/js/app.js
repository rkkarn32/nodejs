console.log('Client Side java script loaded')

fetch('http://localhost/weather?address=orlando').then( (res)=>{
    res.json().then( (data)=>{
        if(data.error){
            console.log('Error occurred !!!')
        }else{
            console.log('Address:',data.address)
        }
    } )
})