// anonymous function
var a=[1,2,3,4,5];
var n=a.length;
var k=1;
var arr=[];
var rotate=function(a,n,k){
    
  for (var i=0;i<n;i++){
      if(i<k){
          arr.push(a[n+i-k]);
      }
      
      else{
          arr.push(a[i-k]);
      }
  }
  console.log(arr);
};
rotate(a,n,k);

// IIFE(Imediately Invoked Fucntion Expression)

var a=[1,2,3,4,5];
var n=a.length;
var k=1;
var arr=[];
(function(a,n,k){
    
  for (var i=0;i<n;i++){
      if(i<k){
          arr.push(a[n+i-k]);
      }
      
      else{
          arr.push(a[i-k]);
      }
  }
  console.log(arr);
})(a,n,k);