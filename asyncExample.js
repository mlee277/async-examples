//var Q = require('q');
var Promise = require('bluebird');
var longjohn = require('longjohn');
longjohn.async_trace_limit = -1;
var stackTrace = require('stack-trace');
// var fs = require('fs');
//var fs = require('promise-fs');
var fs = Promise.promisifyAll(require('fs'));
//var debug = require('v8-debug');
//this echo command creates a txt files via your terminal
//echo 'Hello, world.' >test2.txt
var profiler = require('v8-profiler');
var snapshot1 = profiler.takeSnapshot();
var snapshot2 = profiler.takeSnapshot();
var snapshot3 = profiler.takeSnapshot();
var snapshot4 = profiler.takeSnapshot();
var snapshot5 = profiler.takeSnapshot();


var debug = require('v8-debug');

// var Promise = require("native-promise-only");
// var Promise === global.Promise;

// function msgAfterTimeout(msg,who,timeout){
//   return new Promise(function(resolve,reject){
//     setTimeout(function(){
//       resolve('hello' + msg);
//
//     },timeout);
//   });
// }
// msgAfterTimeout("","Foo",100).then(function(msg){
//     msgAfterTimeout(msg,"Bar", 200);
// }).then(function(msg){
//   console.log('done after 300ms' + msg);
// });
// debug.registerEvent('console.log');
//
// console.log = (function(fn){
//   return function(){
//     debug.emitEvent('console.log', {message: arguments[0]});
//     return fn.apply(console,arguments);
//   }
// }(console.log));
//
// var usingES6 =
//   new Promise(function(resolve,reject){
// debugger;
//     fs.readFile('test.txt',function(err,data){
//       debugger;
//       resolve(data);
//     });
//   });
//
// usingES6.then(function(message){
//   debugger;
//   console.log(message);
// });

// var what1 = function(){
//
//   return new Promise(function(resolve,reject){
// debugger;
// setTimeout(function() {
//
//         throw new Error("My Custom Error");
//
//     }, 500);
//
// });
//     fs.readFile('test.txt',function(err,data){
// debugger;
//       resolve(data);
//     });
//
// };
//
// what1().then(function(message){
//   setTimeout(function() {
//
//           throw new Error("My Custom Error");
//
//       }, 500);
// debugger;
//   console.log(message);
//
// })
// .catch(function(error){
//   console.error(error.stack);
// });
//
// process.on('uncaughtException', function(err) {
//
//     //in JSON format with the help of stack-trace module;
//     console.error(stackTrace.parse(err));
//
//     //in plain text format
//     console.error(err.stack.trim());
//
//     process.exit(1);
//
// });

// debugger
// var p = new Promise(function(resolve,reject){
//
// 	setTimeout(function(){
// 		resolve("Yay!");
// 	},100);
// });
//
// p.then(function(msg){
//   debugger
// 	console.log(msg); // Yay!
// });

//
// var usingES6array=
//   new Promise(function(resolve,reject){
//     var hello = null;
//     debugger;
//     setTimeout(function(){
//       hello = console.log('hello');
//     },50);
//     debugger;
//     resolve(hello);
// });
//
// usingES6array.then(function(message){
//   debugger;
//   console.log(message);
// });


var twopluswo = function(){
  return 2+2;
};
// //ES6 promises


// var usingES6 =
//   new Promise(function(resolve,reject){
// debugger;
//     fs.readFile('test.txt',function(err,data){
//       debugger;
//       resolve(data);
//     });
//   });
//
// usingES6.then(function(message){
//   debugger;
//   console.log(message);
// });

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
//using bluebird
var bluebird = function(){
  return new Promise(function(resolve,reject){
    debugger;
    snapshot2 = profiler.takeSnapshot();
    fs.readFile('test.txt', function(err,data){
      debugger;
      snapshot3 = profiler.takeSnapshot();
      if(err) reject(err);
      var text = data;
      resolve(text);
    });
  });
};
bluebird().then(function(text1){
  debugger;
  snapshot4 = profiler.takeSnapshot();
  console.log('bluebird',text1);
})
// //catch will 'catch' all the errors from the reject
.catch(function(error){
  console.log('from reject', error);
})
// //finally will run a function after everything
.finally(function(){
    snapshot4 = profiler.takeSnapshot();
  console.log(twopluswo());
  //console.log(Promise.longStackTraces());
  console.log(snapshot1.getHeader(), snapshot2.getHeader(), snapshot3.getHeader(), snapshot4.getHeader(), snapshot5.getHeader());
});



//readFileAsync is not a built in method in node.
// fs.readFileAsync('test.txt')
//   .then(function(data){
//     console.log(data);
//   });
