const chalk = require('chalk')
console.log(chalk.blue('this is blue color')+ chalk.red('!'))
var log = console.log

log(chalk.red.bgWhite.bold('This is mix color'))

log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

console.log(chalk.yellow('this is backGround Yellow'))
console.log(chalk.green.bgWhite.bold.italic('This has lot of complex'))

console.log(chalk.green.bold('SUCCESSS'))
console.log(chalk.blue.inverse('This is Inverse effect'))

const mile = 18;
const calculateFeet = miles => miles * 5280;

console.log(chalk`
  There are {bold 5280 feet} in a mile.
  In {bold ${mile} miles}, there are {green.bold ${calculateFeet(mile)} feet}.
`);
