var fs = require('fs');
var data =



var myCallBack = fs.readFile(process.argv[2]);


var usingItNow = function(callback) {
  callback(null)
};

usingitNow(myCallBack)
