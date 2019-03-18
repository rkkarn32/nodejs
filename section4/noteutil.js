const fs = require('fs')
const FILE_NAME = 'notedata.json'

const addNote = function(title,body){
  var notes = loadNotes()
  notes.push({
    title:title,
    body:body
  })
  fs.writeFile(FILE_NAME,JSON.stringify(notes),(err)=>{
    if(err){
      console.log('Data isn\'t saved')
    }else[
      console.log('Data are saved')
    ]
  })
}
const listNote = ()=> {
  const notes = fs.readFileSync(FILE_NAME)

}
const removeNote = (title)=>{

}

const getNote = (title)=> {

}

const loadNotes = ()=>{
  try{
    var file = fs.readFileSync(FILE_NAME)
    const fileData = file.toString()
    if(fileData ===''){
      return []
    }else{
      var jsonObj = JSON.parse(fileData)
      return jsonObj
    }
  }catch(err){
    console.log('Error: '+e)
  }
  return []
}

module.exports = {addNote,removeNote,listNote,getNote}
