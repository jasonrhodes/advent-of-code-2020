const fs = require("fs");

module.exports = function readInput(filepath, cb) {
  fs.readFile(filepath, (err, data) => {
    cb(data.toString().split("\n"));
  });
};
