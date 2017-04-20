const chalk = require('chalk');
const exercise1 = require('./src/exercise1');
const exercise2 = require('./src/exercise2');
const exercise3 = require('./src/exercise3');

const exercise = exercise3;

const input = [];

console.log(chalk.yellow('RESULT', exercise.run(input)));