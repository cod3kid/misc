const utilFunctions = require("./utils");
const { splitWorkingHoursLineByLine } = utilFunctions;

const workingHours = splitWorkingHoursLineByLine();
console.log(workingHours);
const inputString = "Itachi 7h 49m 08:59 18:06 9h 37m";

const pattern =
  /(\S+)\s(\d+h\s\d+m)\s(\d{2}:\d{2})\s(\d{2}:\d{2})\s(\d+h\s\d+m)/;

const matches = pattern.exec(inputString);

if (matches) {
  const name = matches[1];
  const duration1 = matches[2];
  const time1 = matches[3];
  const time2 = matches[4];
  const duration2 = matches[5];

  console.log("Name:", name);
  console.log("Duration 1:", duration1);
  console.log("Time 1:", time1);
  console.log("Time 2:", time2);
  console.log("Duration 2:", duration2);
} else {
  console.log("String format doesn't match the expected pattern.");
}
