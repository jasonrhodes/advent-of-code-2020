const read = require("../lib/read");
const splitListOnBlankLines = require("../lib/splitListOnBlankLines");

function findLongest(items) {
  return items.reduce(
    (longest, item) => (item.length > longest.length ? item : longest),
    ""
  );
}

function sumArrays(array) {
  return array.reduce((total, number) => total + number, 0);
}

read(__dirname + "/input.txt", (rows) => {
  const totals = splitListOnBlankLines(rows).map((group) => {
    const longest = findLongest(group);
    const hits = [...longest].filter((char) =>
      group.every((answers) => answers.includes(char))
    );
    return hits.length;
  });

  console.log("Sum:", sumArrays(totals));
});
