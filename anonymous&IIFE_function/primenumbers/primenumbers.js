// anonymous function
var array=[1,2,3,4,5,6,7,8,9,10,11];
 
let Prime = function (num) {
  for (let i = 2; i<num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num >= 1;
}

console.log(array.filter(Prime));

// IIFE(Imediately Invoked Fucntion Expression)

var array=[21,22,23,33,45,65,76,67,87];
 
(function (num) {
  for (let i = 2; i<num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num >= 1;
})

console.log(array.filter(Prime));