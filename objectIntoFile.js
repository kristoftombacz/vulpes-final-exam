'use strict';

var fs = require('fs');
var util = require('util');
var fileName = 'store.json';
var objectToWrite = {
  name: 'kristof',
  age: 'jajsokmar',
  guitarhero: 'expert'
};

function objectIntoFile(filename, object, cb) {
  fs.writeFile(filename, util.inspect(object), cb);
}

function runIn2Seconds() {
  setTimeout(writeLog , 2000);
}

function writeLog(err) {
  if(err) {
    console.log(err);
  } else {
    console.log('Successful write to file ' + fileName + '!');
  }
}

objectIntoFile(fileName, objectToWrite, runIn2Seconds);

