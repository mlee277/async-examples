var Benchmark = require('benchmark');
var ui = new Benchmark.Suite();
var benchmarks = require('beautify-benchmark')
ui.browserscope = {};
var errors = false;
Benchmark.prototype.setup = 'window._gaq=[[\'_setAccount\',\'UA-6065217-40\'],[\'_trackPageview\']];(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.src=\'https://www.google-analytics.com/ga.js\';s.parentNode.insertBefore(g,s)}(document,\'script\'))';

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