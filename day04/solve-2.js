const fs = require("fs");
const required = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
const between = (v, min, max) => +v >= min && +v <= max;
const heightValidators = {
  cm: (v) => between(v, 150, 193),
  in: (v) => between(v, 59, 76),
};
const hairColorPattern = new RegExp("^#[0-9a-f]{6}$");
const eyeColorPattern = new RegExp("^amb|blu|brn|gry|grn|hzl|oth$");
const pidPattern = new RegExp("^\\d{9}$");
const validators = {
  byr: (v) => between(v, 1920, 2002),
  iyr: (v) => between(v, 2010, 2020),
  eyr: (v) => between(v, 2020, 2030),
  hgt: (v) => {
    const unit = v.slice(-2);
    return heightValidators[unit] && heightValidators[unit](+v.slice(0, -2));
  },
  hcl: (v) => hairColorPattern.test(v),
  ecl: (v) => eyeColorPattern.test(v),
  pid: (v) => pidPattern.test(v),
  cid: (v) => true,
};

function is_valid_keys(passport) {
  const keys = passport.map((kv) => kv.split(":")[0]);
  // return a list of keys in "required" that are not in "keys"
  return required.filter((key) => !keys.includes(key)).length === 0;
}

function is_valid_values(passport) {
  console.log("validating", passport);
  return passport.every((pair) => {
    const [key, value] = pair.split(":");
    const is_valid = validators[key] && validators[key](value);
    console.log(key, value, is_valid);
    return is_valid;
  });
}

fs.readFile(__dirname + "/input.txt", (err, data) => {
  const rows = data.toString().split("\n");

  console.log(rows.slice(0, 5));

  const valid_passports = rows
    .reduce(
      (acc, row) => {
        if (row === "") {
          acc.push([]);
        } else {
          acc[acc.length - 1] = [...acc[acc.length - 1], ...row.split(" ")];
        }
        return acc;
      },
      [[]]
    )
    .filter(is_valid_keys)
    .filter(is_valid_values);

  console.log(
    `Valid passports: ${valid_passports.length} out of ${rows.length} total`
  );
});
