var Benchmark = require('benchmark');
var ui = new Benchmark.Suite();
var benchmarks = require('beautify-benchmark');
var fs = require('fs');
// var fs = Promise.promisifyAll(require('fs'));
// var Promise = require('bluebird');
// var Promise = require('native-promise-only');
var Promise = global.Promise;
ui.browserscope = {};
var errors = false;

Benchmark.prototype.setup = '';

ui.add('bluebird', {
        'defer': true,
        'fn': `\
        var Promise = global.Promise;
        var p = new Promise(function(resolve,reject){
          fs.readFile('test.txt', function(err,data){
            if(err) reject(err);
            var text = data;
            resolve(text);
          });
        });
      };
      p().then(function(text1){
        console.log('bluebird',text1);

      });`
    })
    // .add('native', {
    //         'defer': true,
    //         'fn': `\
    //           NativePromise = global.Promise;
    //         var p = new NativePromise(function(resolve, reject) {\n\
    //     resolve('foo')\n\
    //   }).then(function() {deferred.resolve()\n\
    //   });`
    //     })
 //src='https://cdnjs.cloudflare.com/ajax/libs/bluebird/3.1.1/bluebird.min.js'\n\
    Benchmark.prototype.setup = `\

     `;



// add listeners
ui.on('cycle', function(event) {
    benchmarks.add(event.target)
})
ui.on('complete', function() {
    if (!errors) {
        benchmarks.log()
    } else {
        console.error('Errors encountered. Check the source.');
        process.exit(1);
    }
})
ui.on('error', function(event) {
    errors = true;
    console.error(event.target.name, event.target.error);
})
ui.run({
    'async': true
})
