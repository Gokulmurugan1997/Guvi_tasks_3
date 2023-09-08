// anonymous function

var array="12121";
var num =array.split("");
const name=[];


var palindrome = function(array){
    for (let i=num.length; i>=0; i--){
    name.push(num[i]);
    output=name.join("");
}

if (array==output){
        return "it is palindrome";
    }
    else{
        return "it is not palindrome";
    }
    
};
console.log(palindrome(array));

// IIFE function

var array="1211";
var num =array.split("");
const nam=[];


(function(array){
    for (let i=num.length; i>=0; i--){
    nam.push(num[i]);
    output=nam.join("");
}

if (array==output){
        console.log ("it is palindrome");
    }
    else{
        console.log ("it is not palindrome");
    }
    
})
(array)