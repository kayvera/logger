const read = require('./logger/read');
const path = require('path');

var data = {};
read.readFiles(
  path.resolve(__dirname, './logger/logs/'),
  function (filename, content) {
    data[filename] = content;
  },
  function (error) {
    throw err;
  }
);
