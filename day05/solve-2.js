const fs = require("fs");
const search = require("./search");

fs.readFile(__dirname + "/input.txt", (err, data) => {
  const strings = data.toString().split("\n");

  const occupied_ids = strings.map((str) => {
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

  const all_ids = new Set();
  for (let i = 0; i < 128; i++) {
    for (let j = 0; j < 8; j++) {
      all_ids.add(i * 8 + j);
    }
  }

  const missing_ids = [...all_ids].filter((id) => !occupied_ids.includes(id));

  const my_possible_seat_ids = missing_ids.filter((id) => {
    return !missing_ids.includes(id + 1) && !missing_ids.includes(id - 1);
  });

  if (my_possible_seat_ids.length !== 1) {
    console.log("Too many possible seats", my_possible_seat_ids);
  } else {
    console.log(`My seat id is ${my_possible_seat_ids[0]}`);
  }
});
