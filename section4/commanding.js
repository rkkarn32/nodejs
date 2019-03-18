const yargs = require('yargs')

yargs.version('1.1.1.3')
// yargs([ '-x', '1', '-y', '2' ]).argv
// yargs.parse(['-x','y','-x',false])
// console.log(yargs.argv)

yargs.command({
  command: 'remove',
  describe: 'Remove notes',
  builder: {
    title : {
      describe: "Note title",
      demandOption: true
    }
  },
  handler: function(arg){
    console.log('This will Remove notes ',arg.title)
  }
})

yargs.command({
  command:'add',
  describe: 'Add note',
  builder: {
    title: {
      title: 'Add title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(args){
    console.log('This will add a Note with title: ',args.title)
  }
})

yargs.command('list','List notes', function(){
  console.log('This will List all notes')
})

yargs.command('read','Used to read',function(){
  console.log('This will read statements')
}).parse()

console.log(yargs.argv)
