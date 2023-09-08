// anonymous function

var num=[1,2,3,4,5];
var sum=0;
var add= function (num){
    for (let i=0; i<num.length; i++){
        sum=sum+num[i];
    }
     console.log(sum);
}
add(num);

// IIFE(Imediately Invoked Fucntion Expression)

var num=[1,2,3,4,5];
var sum=0;
(function (num){
    for (let i=0; i<num.length; i++){
        sum=sum+num[i];
    }
     console.log(sum);
})(num);