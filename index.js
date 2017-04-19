const chalk = require('chalk');
const exercise1 = require('./src/exercise1');

const exercise = exercise1;

const input = [];

console.log(chalk.yellow('RESULT', exercise.run(input)));