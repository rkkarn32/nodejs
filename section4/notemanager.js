const yargs = require('yargs')
const noteUtil = require('./noteutil')

yargs.command('add','Add new Note',{
  title:{
    title:'Title of the note',
    alias: 't',
    demandOption:true,
    type: 'string'
  },
  body: {
    title: 'Body of the note',
    alias: 'b',
    type: 'string'
  }
},(args)=>{
  console.log('Adding Note:'+args.title+', Body: '+args.body)
  noteUtil.addNote(args.title,args.body)
})

yargs.command('list','List all notes',function(){
  console.log('Listing all nodes')
  noteUtil.listNote();
})

yargs.command('remove','Remove provided title',{
  title: {
    title: 'Title to be removed',
    alias: 't',
    demandOption: true,
    type: 'string'
  }
},function(args){
  console.log('Removing Note: '+args.title)
  noteUtil.removeNote(args.title)
})

yargs.parse()
