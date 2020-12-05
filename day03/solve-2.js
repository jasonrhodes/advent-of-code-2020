const fs = require("fs");

function ski({ rows, x_slope, y_slope = 1 }) {
  let x = 0;
  let hits = 0;
  let misses = 0;

  for (let i = 0; i < rows.length; i = i + y_slope) {
    if (rows[i][x % rows[i].length] === "#") {
      hits++;
    } else {
      misses++;
    }
    x = x + x_slope;
  }

  // if (hits + misses !== Math.floor(rows.length / y_slope)) {
  //   console.error(
  //     JSON.stringify({
  //       x_slope,
  //       y_slope,
  //       hits,
  //       misses,
  //       total: hits + misses,
  //       r: rows.length,
  //       rows: Math.floor(rows.length / y_slope),
  //     })
  //   );
  //   throw new Error("Oops, hits and misses do not match number of rows");
  // }

  return [hits, misses];
}

fs.readFile(__dirname + "/input.txt", (err, data) => {
  const rows = data.toString().split("\n");

  const product =
    ski({ rows, x_slope: 1 })[0] *
    ski({ rows, x_slope: 3 })[0] *
    ski({ rows, x_slope: 5 })[0] *
    ski({ rows, x_slope: 7 })[0] *
    ski({ rows, x_slope: 1, y_slope: 2 })[0];

  console.log(product);
});
