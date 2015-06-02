/**
 * Created by michaelfalkenthal on 27.05.15.
 */
'use strict';

var influx = require('influx');
var data = require('../generateTestData');
var client = influx({
    //cluster configuration
    /**hosts: [
     {
         host: 'localhost',
         port: 8060, //optional. default 8086
         protocol: 'http' //optional. default 'http'
     }
     ],
     **/
    // or single-host configuration
    host: 'nemar2.iaas.uni-stuttgart.de',
    port: 8086, // optional, default 8086
    protocol: 'http', // optional, default 'http'
    username: 'root',
    password: 'root',
    database: 'nemar3'
});

var series = data.generateData();
var startDate = new Date();
console.log(startDate + ': Starting to write ' + Object.keys(series).length + ' series');
client.writeSeries(series, {}, function (err, result) {
    var endDate = new Date();
    console.log(endDate + ': Duration ' + (endDate - startDate) / 1000 + 's');
    console.log(JSON.stringify(err, JSON.stringify(result)));
});
