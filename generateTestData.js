/**
 * Created by michaelfalkenthal on 02.06.15.
 */
'use strict';

var globalOptions = require('./options');
var series = {};

function generateData(opt){
    var options = opt || globalOptions;
    for (var j = 1; j <= options.sensorCount; j++) {
        series['sensor' + j] = [];
        for (var i = options.startDate; i <= options.endDate; i += options.interval) {
            series['sensor' + j].push({time: i, value: Math.random() * 100});
        }
    }
    return series;
}

module.exports.generateData = generateData;
module.exports.generatedData = series;