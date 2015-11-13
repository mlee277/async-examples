var Q = require('q');
var Promise = require('bluebird');
// var fs = require('fs');
var fs = Promise.promisifyAll(require('fs'));
//this echo command creates a txt files via your terminal
//echo 'Hello, world.' >test2.txt



var twopluswo = function(){
  return 2+2;
};


// //The problem
// var data = fs.readFile('test.txt');
// console.log('async problem',data);

// //DON'T DO THIS
// var data = fs.readFileSync('test.txt');
// console.log('sync force',data);
// //
//
// //The callback solution
// var usingCallback = function(err,callback){
//   if (err) return console.log(err);
//   console.log('callback',callback);
// };
//
// fs.readFile('test.txt',usingCallback);
//
//
// //using Q
// var usingQ = function(){
//   var deferred = Q.defer();
//   fs.readFile('test.txt', function(err,response){
//     if(err) deferred.reject(err);
//     deferred.resolve(response);
//   });
//   return deferred.promise;
// };
// usingQ().then(function(response){
//   console.log('Q',response);
//   return response;
//  //but what if you want to add something during the chaining of .thens? no problem
// })
// .then(function(response,numberTwo){
//   numberTwo = 2;
//   console.log(response.toString());
//   return [response,numberTwo];
//
// })
// .then(function(response){
//   console.log('number 2', response[1]*3);
// })
// // //catch will 'catch' all the errors from the r
// .catch(function(err){
//   console.log('Q Error', err);
// });
//
// //using bluebird
// var bluebird = function(){
//   return new Promise(function(resolve,reject){
//     fs.readFile('test.txt', function(err,data){
//       if(err) reject(err);
//       var text = data;
//       resolve(text);
//     });
//   });
// };
// bluebird().then(function(text1){
//   console.log('bluebird',text1);
// })
// // //catch will 'catch' all the errors from the reject
// .catch(function(error){
//   console.log('from reject', error);
// })
// // //finally will run a function after everything
// .finally(function(){
//   console.log(twopluswo());
// });

//readFileAsync is not a built in method in node.
fs.readFileAsync('test.txt')
  .then(function(data){
    console.log(data);
  });
