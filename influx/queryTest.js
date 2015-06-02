/**
 * Created by michaelfalkenthal on 02.06.15.
 */
'use strict';

var influx = require('influx');
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
    database: 'nemar2'
});

client.getDatabaseNames(function (err, arrayDatabaseNames) {
    console.log(JSON.stringify(err), JSON.stringify(arrayDatabaseNames));
});

client.getSeriesNames('nemar2', function (err, arraySeriesNames) {
    console.log(JSON.stringify(err), JSON.stringify(arraySeriesNames));
});


var start = new Date();
console.log(start);
client.query('SELECT STDDEV(value) FROM /.', function (err, result) {
    var end = new Date();
    console.log(end);
    console.log((end - start) / 1000);
    if (err) {
        console.error(err.message);
    }
    if (result) {
        console.log(JSON.stringify(result));
    }
});
