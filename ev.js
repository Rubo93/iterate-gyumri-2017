'use strict';
let counter = 0;
//use clearInterval to stop the
//setInterval
//use if(condition){}else{}
const interval = setInterval(function(){
  console.log(`Called ${++counter} times`);
  if (counter ==8){
      clearInterval(interval);
  }

},500);
