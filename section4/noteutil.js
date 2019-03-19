const fs = require('fs')
const chalk = require('chalk')
const FILE_NAME = 'notedata.json'

const addNote = function(title,body){
  var notes = loadNotes()
  notes.push({
    title:title,
    body:body
  })
  saveAll(notes)
  // fs.writeFile(FILE_NAME,JSON.stringify(notes),(err)=>{
  //   if(err){
  //     console.log('Data isn\'t saved')
  //   }else[
  //     console.log('Data are saved')
  //   ]
  // })
}
const listNote = ()=> {
  const notes = loadNotes()
  var i = Number(0)
  for (note of notes) {
    i++
    console.log('Note_'+i+' ==> Title: '+chalk.red(note.title)+', Body:'+chalk.green(note.body))
  }
}

const removeNote = (title)=>{
  var notes = loadNotes()
  notes = remove(notes,title)
  console.log(notes)
  saveAll(notes)

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

function remove(array, title){
  return array.filter(function(note){
    return note.title!== title
  })
}
function saveAll(notes){
  fs.writeFile(FILE_NAME,JSON.stringify(notes),(err)=>{
    if(err){
      console.log('Data isn\'t saved')
    }else[
      console.log('Data are saved')
    ]
  })
}

module.exports = {addNote,removeNote,listNote,getNote}
