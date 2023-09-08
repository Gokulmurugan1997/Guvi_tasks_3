// arrow function

var array="12121";
var num =array.split("");
const name=[];


var palindrome = (array)=>{
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
