const read = require("../lib/read");

read(__dirname + "/input.txt", (rows) => {
  console.log(rows);
  const forms = rows.reduce(
    (acc, row) => {
      if (row === "") {
        acc.push(new Set());
        return acc;
      }
      [...row].forEach((char) => acc[acc.length - 1].add(char));
      return acc;
    },
    [new Set()]
  );

  console.log(
    "Sum:",
    forms.map((set) => set.size).reduce((total, number) => total + number, 0)
  );
});
