const yargs = require('yargs')

yargs.version('1.1.1.3')
// yargs([ '-x', '1', '-y', '2' ]).argv
// yargs.parse(['-x','y','-x',false])
console.log(yargs.argv)

yargs.command({
  command: 'substract',
  describe: 'Substract notes',
  handler: function(){
    console.log('This will do substraction')
  }
})

yargs.command({
  command:'add',
  describe: 'To add note',
  handler: function(){
    console.log('This will add Note')
  }
})

yargs.command('multiple','Used to multiply',function(){
  console.log('This will multiply')
}).help()
.argv

//
// yargs
//   .command('subs', 'make a get HTTP request', {
//     url: {
//       alias: 'u',
//       default: 'http://yargs.js.org/'
//     }
//   }, function(){
//     console.log('Adding new Note')
//   })
//   .help()
//   .argv
