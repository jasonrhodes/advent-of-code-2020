const fs = require("fs");

fs.readFile(__dirname + "/input.txt", (err, data) => {
  const nums = data.toString().split("\n");
  let found = false;
  for (let i = 0; i < nums.length; i++) {
    if (found) break;
    for (let j = 0; j < nums.length; j++) {
      if (found) break;
      for (let k = 0; k < nums.length; k++) {
        if (found) break;
        const sum = +nums[i] + +nums[j] + +nums[k];
        if (sum === 2020) {
          console.log(
            "FOUND:",
            nums[i],
            nums[j],
            nums[k],
            sum,
            "Product:",
            nums[i] * nums[j] * nums[k]
          );
          found = true;
        } else {
          console.log("NOT FOUND:", nums[i], nums[j], nums[k], sum);
        }
      }
    }
  }
});
