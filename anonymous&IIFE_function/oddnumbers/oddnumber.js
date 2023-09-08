
// anonymous function

var arr=[1,2,3,4,5];

var odd= function (arr){

    for (let i=0; i<arr.length; i++){
        if (arr[i]%2==1){
            console.log(arr[i])
        }
    }
}
odd(arr);

// IIFE(Imediately Invoked Fucntion Expression)

var arr=[1,2,3,4,5];

(function (arr) {

    for (let i=0; i<arr.length; i++){
        if (arr[i]%2==1){
            console.log(arr[i])
        }
    }
})
(arr);