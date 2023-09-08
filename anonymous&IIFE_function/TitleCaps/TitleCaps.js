// anonymous function

var str="guvi geeks";

var toTitleCase = function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    console.log(str.join(' '));
  }
  console.log(toTitleCase(str));

  // IIFE(Imediately Invoked Fucntion Expression)

  var str="guvi geeks";

  (function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    console.log(str.join(' '));
  })
  (str);