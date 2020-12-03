const fs = require("fs");

function isBetween(min, max, value) {
  return +value >= +min && +value <= +max;
}

function count_substrings(sub, string) {
  const pattern = new RegExp(sub, "g");
  return (string.match(pattern) || []).length;
}

// PART 1:
fs.readFile(__dirname + "/input.txt", (err, data) => {
  const rows = data.toString().split("\n");
  let valids = [];
  let invalids = [];
  rows.forEach((row) => {
    let [range, value, password] = row.split(" ");
    const [min, max] = range.split("-");
    value = value.replace(":", "");
    if (isBetween(min, max, count_substrings(value, password))) {
      valids.push([range, value, password]);
    } else {
      invalids.push([range, value, password]);
      console.log(range, value, password);
    }
  });

  console.log(
    "Valid Passwords:",
    valids.length,
    "Invalid Passwords:",
    invalids.length
  );
});
