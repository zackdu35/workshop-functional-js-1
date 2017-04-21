const chalk = require('chalk');
const _ = require('lodash');

console.log(chalk.cyan('\nEXERCISE 4 LOADED\n'));

var promiseNumbers = new Promise(function (fulfill, reject) {
  setTimeout(fulfill, 200, [100 , 100, 200, 300, 500])
})

var promiseStrings = new Promise(function (fulfill, reject) {
  setTimeout(fulfill, 2000, ['1' , 'un', '2', '3', 'cinq'])
})

var onRejected = () => {
	console.log('Error Promise : erreur dans un des éléments',data);
}


const asyncYolo = () => {
	Promise.all([promiseNumbers, promiseStrings]).then(arrays => { console.log(_.sum(arrays)) })
}

asyncYolo()

module.exports = {
  asyncYolo: asyncYolo,
  run: asyncYolo
}