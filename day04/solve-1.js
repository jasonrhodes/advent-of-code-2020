const fs = require("fs");
const required = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

function is_valid(passport) {
  // return a list of keys in "required" that are not in "passport"
  return required.filter((key) => !passport.includes(key)).length === 0;
}

fs.readFile(__dirname + "/input.txt", (err, data) => {
  const rows = data.toString().split("\n");

  const valid_passports = rows
    .reduce(
      (acc, row) => {
        if (row === "") {
          acc.push([]);
        } else {
          acc[acc.length - 1] = [
            ...acc[acc.length - 1],
            ...row.split(" ").map((a) => a.split(":")[0]),
          ];
        }
        return acc;
      },
      [[]]
    )
    .filter(is_valid);

  console.log(`Valid passports: ${valid_passports.length}`);
});
