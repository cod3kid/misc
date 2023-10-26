const utilFunctions = require("./utils");
const { splitWorkingHoursLineByLine, prepareSheetContents } = utilFunctions;

const workingHours = splitWorkingHoursLineByLine();
const sheetContents = prepareSheetContents(workingHours);
