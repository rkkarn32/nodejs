console.log('Client Side java script loaded')

const weatherForm = document.querySelector('form')
const input = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')

weatherForm.addEventListener('submit',(event)=>{
  event.preventDefault()
  message1.className= ''
  message2.className= ''
  message1.textContent = 'Loading ...'
  message2.textContent= ''
  const location = input.value;
  fetch('http://localhost/weather?address='+location).then( (res)=>{
      res.json().then( (data)=>{
          if(data.error){
              message1.textContent = 'Error occurred: '+data.error +' !!!'
              message1.className = 'error'
          }else{
              message1.className= 'result'
              message2.className = 'result'
              message1.textContent = 'Address: '+data.location
              message2.textContent = 'Summary: '+data.weather_summary
          }
      } )
  })
})
