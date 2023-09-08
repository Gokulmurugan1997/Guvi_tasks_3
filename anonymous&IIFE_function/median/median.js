// anonymous function
var a=[1,2,3,4];
var b=[10,11,12,13];
var c=a.concat(b);
var d=c.sort(function (a, b) { return a - b });


var median= function(a,b){
    
    
    if(d.length%2==0){
        num1=((d.length)/2);
        result=((d[num1-1]+d[num1])/2);
        console.log(result);
    }
    else{
        num2=(parseInt((d.length)/2));
        result=d[num2];
        console.log(result);
    }
};
median(a,b);

// IIFE(Imediately Invoked Fucntion Expression)

var a=[1,2,3,4];
var b=[10,11,12,13];
var c=a.concat(b);
var d=c.sort(function (a, b) { return a - b });

(function(a,b){
    
    if(d.length%2==0){
        num1=((d.length)/2);
        result=((d[num1-1]+d[num1])/2);
        console.log(result);
    }
    else{
        num2=(parseInt((d.length)/2));
        result=d[num2];
        console.log(result);
    }
})(a,b);