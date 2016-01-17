var Benchmark = require('benchmark');
var suite     = new Benchmark.Suite();

suite.add(new Benchmark('foo', {
  // a flag to indicate the benchmark is deferred
  defer : true,

  // benchmark test function
  fn : function(deferred) {
    setTimeout(function() {
      deferred.resolve();
    }, 200);
  }
})).on('complete', function() {
  console.log(this[0].stats);
}).run();
