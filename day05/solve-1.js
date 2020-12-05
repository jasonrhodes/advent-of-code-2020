const fs = require("fs");
const search = require("./search");

fs.readFile(__dirname + "/input.txt", (err, data) => {
  const strings = data.toString().split("\n");

  const ids = strings.map((str) => {
    const row = search(str.slice(0, 7), {
      low_char: "F",
      high_char: "B",
      n: 128,
    });
    const column = search(str.slice(7), {
      low_char: "L",
      high_char: "R",
      n: 8,
    });

    return row * 8 + column;
  });

  const max = ids.reduce((max, value) => (value > max ? value : max), 0);
  console.log("Maximum ID:", max);
});
