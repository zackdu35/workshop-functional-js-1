const chalk = require('chalk');

console.log(chalk.cyan('\nEXERCISE 3 LOADED\n'));

const reverseString = (input) => {
  function reverse(s, acc) {
    return (s.length == 0) ? acc : reverse(s.substr(1), s.charAt(0) + acc);
  };
  return reverse(input, '');
}

module.exports = {
  reverseString: reverseString,
  run: reverseString
}