const fs = require("fs");

const splitEmployeesWorkingHours = (workingHours) => {
  const inputString = "This is a sample string with sample words.";

  const targetSubstring = "sample";

  let startIndex = -1;
  let endIndex = -1;
  let currentIndex = 0;

  while (currentIndex < inputString.length) {
    const foundIndex = inputString.indexOf(targetSubstring, currentIndex);
    if (foundIndex !== -1) {
      startIndex = foundIndex;
      endIndex = foundIndex + targetSubstring.length - 1;
      console.log(
        `Found "${targetSubstring}" from index ${startIndex} to ${endIndex}`
      );
      currentIndex = foundIndex + 1; // Move past the found substring
    } else {
      break; // Exit the loop if no more occurrences are found
    }
  }
};

const splitWorkingHoursLineByLine = () => {
  const fileContents = fs.readFileSync("./working-hours.txt", "utf-8");
  const splitWorkingHours = fileContents.split("\n");
  return splitWorkingHours;
};

module.exports = { splitWorkingHoursLineByLine };
