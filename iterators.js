module.exports = function makeCounter(someObj) {

    var index = 1
      someObj.next = function() {
        var done = false;
        if(index < 11) {
            return {
                'value': index++,
                'done': false
            }
        }else{
            return {
                'done': true
            }
        }


      return someObj
    }
}
    // var iterator = require( iterators );
    // { next : function () {} }
    // iterator.next();
    // 1
    // iterator.next();
    // 2

//post and pre fix incrementor

// post fix increment
