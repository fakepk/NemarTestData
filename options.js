/**
 * Created by michaelfalkenthal on 27.05.15.
 */
'use strict';
//new Date(year, month, day, hours, minutes, seconds, milliseconds)
var dStart = new Date(2015, 5, 1);
var dEnd = new Date(2015, 5, 2);
//Interval in milliseconds
var interval = 60000;
var sensorCount = 600;

module.exports.startDate = dStart.getTime();
module.exports.endDate = dEnd.getTime();
module.exports.interval = interval;
module.exports.sensorCount = sensorCount;