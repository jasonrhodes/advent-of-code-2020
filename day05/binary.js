const read = require("../lib/read");
const binary = { F: 0, B: 1, L: 0, R: 1 };

read(__dirname + "/input.txt", (items) => {
  const ids = items
    .map((string) =>
      parseInt([...string].map((letter) => binary[letter]).join(""), 2)
    )
    .sort((a, b) => (a < b ? 1 : -1));

  console.log(ids[0]);
});
