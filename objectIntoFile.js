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

function writeLog(err) {
  if(err) {
    console.log(err);
  } else {
    console.log('Successful write to file ' + fileName + '!');
  }
}

objectIntoFile(fileName, objectToWrite, runIn2Seconds(writeLog));

