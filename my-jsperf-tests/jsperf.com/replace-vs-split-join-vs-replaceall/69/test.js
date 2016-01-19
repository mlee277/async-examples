var Benchmark = require('benchmark');
var ui = new Benchmark.Suite();
var benchmarks = require('beautify-benchmark')
ui.browserscope = {};
var errors = false;
Benchmark.prototype.setup = '';

ui.browserscope.key = 'ahBzfnVhLXByb2ZpbGVyLWhychELEgRUZXN0GICAwMfgpvkIDA';

ui.add('.replace(/ /g,\' \')', '\
    result = mystring.replace(/ /g,\'\');')
    .add('.replace(/ /g,\' \')', '\
    result = mystring.replace(/\\s+/g,\"\");')
    .add('.split(\' \').join(\'\')', '\
    result = mystring.split(\' \').join(\'\');')
    .add('.split(/\\s+/g).join(\'\')', '\
    result = mystring.split(/\\s+/g).join(\'\');')
    .add('.split(/ /g).join(\'\')', '\
    result = mystring.split(/ /g).join(\'\');')
    .add('.replace(\" \",\"\")', {
        'defer': true,
        'fn': '\
      result = mystring.replace(\" \",\"\");'
    });

Benchmark.prototype.setup = '\
    var mystring = \'okay this is a long long long long string\';\n\
    var regexObj = new RegExp(\".\",\"gm\");\n\
    var regexShort = /\\./g;';

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