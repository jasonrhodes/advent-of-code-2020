const fs = require("fs");

fs.readFile(__dirname + "/input.txt", (err, data) => {
  const rows = data.toString().split("\n");

  let x = 0;
  let hits = 0;
  let misses = 0;

  rows.forEach((row) => {
    if (row[x % row.length] === "#") {
      hits++;
      console.log(row, "hit");
    } else {
      console.log(row, "miss");
      misses++;
    }
    x = x + 3;
  });

  if (hits + misses !== rows.length) {
    throw new Error("OOPS", hits, misses, hits + misses, rows.length);
  }
  console.log(`Finished counting ${hits} hits and ${misses} misses`);
});
