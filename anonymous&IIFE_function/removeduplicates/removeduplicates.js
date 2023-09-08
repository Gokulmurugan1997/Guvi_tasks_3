
// anonymous function

let arr = [1,1,1,2,2,3,4,10,10,"apple","apple","orange"];
  
var removeDuplicates=function (arr) {
    return [...new Set(arr)];
};
  
console.log(removeDuplicates(arr));

// IIFE(Imediately Invoked Fucntion Expression)

let arr1 = [1,1,1,2,2,3,4,10,10,"apple","apple","orange"];
  
(function (arr1) {
    console.log([...new Set(arr1)]);
})(arr1);
