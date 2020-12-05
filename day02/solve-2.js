const fs = require("fs");

fs.readFile(__dirname + "/input.txt", (err, data) => {
  const rows = data.toString().split("\n");
  let valids = [];
  let invalids = [];
  rows.forEach((row) => {
    let [positions, value, password] = row.split(" ");
    const [a, b] = positions.split("-");
    value = value.replace(":", "");

    const a_match = password[a - 1] === value;
    const b_match = password[b - 1] === value;

    if ((a_match && !b_match) || (!a_match && b_match)) {
      valids.push([positions, value, password]);
    } else {
      invalids.push([positions, value, password]);
    }
  });

  console.log(
    "Valid Passwords:",
    valids.length,
    "Invalid Passwords:",
    invalids.length
  );
});
