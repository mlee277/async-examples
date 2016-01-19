var Benchmark = require('benchmark');
var ui = new Benchmark.Suite();
var benchmarks = require('beautify-benchmark')
ui.browserscope = {};
var errors = false;
Benchmark.prototype.setup = '';

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