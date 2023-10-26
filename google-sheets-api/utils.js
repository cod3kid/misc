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

const prepareSheetContents = (workingHours) => {
  const employeeWorkingHours = [];
  const pattern =
    /(\S+)\s(\d+h\s\d+m)\s(\d{2}:\d{2})\s(\d{2}:\d{2})\s(\d+h\s\d+m)/;

  workingHours.forEach((item) => {
    const matches = pattern.exec(item);

    if (matches) {
      employeeWorkingHours.push({
        name: matches[1],
        duration1: matches[2],
        time1: matches[3],
        time2: matches[4],
        duration2: matches[5],
      });
    } else {
      console.log("String format doesn't match the expected pattern.\n", item);
    }
  });

  return employeeWorkingHours;
};

module.exports = { splitWorkingHoursLineByLine, prepareSheetContents };
