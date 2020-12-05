function split(min, max) {
  return (max - min) / 2 + min;
}

module.exports = function search(string, { low_char, high_char, n }) {
  let chars = [...string];
  return (function search_again(char, min, max) {
    if (char && char !== low_char && char !== high_char) {
      throw new Error(`Unknown character ${char} encountered`);
    }
    // console.log("Searching", char, min, max);
    if (max - 1 - min === 1) {
      // console.log("RETURNING");
      if (char === low_char) {
        return min;
      } else {
        return max - 1;
      }
    }
    const half = split(min, max);
    const next = chars.shift();
    if (char === low_char) {
      // console.log("next: searching low", min, half);
      return search_again(next, min, half);
    } else {
      // console.log("next: searching high", half, max);
      return search_again(next, half, max);
    }
  })(chars.shift(), 0, n);
};
