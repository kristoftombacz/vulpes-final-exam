'use strict';

var fs = require('fs');
var fileName = 'store.json';
var objectToWrite = {
  name: 'kristof',
  age: 'jajsokmar',
  guitarhero: 'expert'
};

function objectIntoFile(filename, object, cb) {
  runIn2Seconds(fs.writeFile(filename, JSON.stringify(object), cb));
}

function runIn2Seconds(cb) {
  setTimeout(cb , 2000);
}

objectIntoFile(fileName, objectToWrite, runIn2Seconds);

