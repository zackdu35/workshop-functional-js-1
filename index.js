const chalk = require('chalk');
const exercise1 = require('./src/exercise1');
const exercise2 = require('./src/exercise2');
const exercise3 = require('./src/exercise3');
const exercise4 = require('./src/exercise4');

const exercise = exercise4;

const input = [];

console.log(chalk.yellow('RESULT', exercise.run(input)));