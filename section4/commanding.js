const yargs = require('yargs')

yargs.version('1.1.1.3')

yargs.command({
  command:'add',
  describe: 'To add note',
  handler: function(){
    console.log('This will add Note')
  }
}).argv

// yargs
//   .command('add', 'make a get HTTP request', {
//     url: {
//       alias: 'u',
//       default: 'http://yargs.js.org/'
//     }
//   }, function(){
//     console.log('Adding new Note')
//   })
//   // .help()
//   .argv
