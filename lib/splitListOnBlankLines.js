module.exports = function splitListOnBlankLines(rows) {
  return rows.reduce(
    (acc, row) => {
      if (row === "") {
        acc.push([]);
        return acc;
      }
      acc[acc.length - 1].push(row);
      return acc;
    },
    [[]]
  );
};
