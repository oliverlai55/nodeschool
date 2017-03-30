var fs = require('fs');

var input = fs.readFileSync(process.argv[2]);
var text = input.toString().split('\n');
var number = text.length - 1;
console.log(number);
