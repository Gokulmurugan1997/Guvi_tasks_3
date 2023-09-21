// anonymous function
var a=[1,2,3,4];
var b=[5,6,7,8];
var c=a.concat(b);
var d=c.sort(function (a, b) { return a - b });


var median= function(a,b){
    
    
    if(d.length%2==0){
        num1=((d.length)/2);
        num=d[parseInt(num1)]
        console.log(num);
    }
    else{
        num2=(parseInt((d.length)/2));
        num=d[parseInt(num2)]
        console.log(num);s
    }
};
median(a,b);

// IIFE(Imediately Invoked Fucntion Expression)

var a=[1,2,3,4];
var b=[5,6,7,8];
var c=a.concat(b);
var d=c.sort(function (a, b) { return a - b });

(function(a,b){
    
    if(d.length%2==0){
        num1=((d.length)/2);
        num=d[parseInt(num1)]
        console.log(num);
    }
    else{
        num2=(parseInt((d.length)/2));
        num=d[parseInt(num2)]
        console.log(num);
    }
})(a,b);