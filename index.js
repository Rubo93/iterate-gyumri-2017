'use strict';
const speak = function(arr){
  const newArray = [];
  for(const i of arr){
    newArray.push(i.toUpperCase());
  }
  console.log(i);
  return newArray
};
const res = speak(['hello','world']);
console.log(res)



// 
// const http = require('http');
// const server = http.createServer((req,res)=>{
//   if (req.url ==='/'{
//     res
//   })
// })
