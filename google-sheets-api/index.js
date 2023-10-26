const utilFunctions = require("./utils");
const doc = require("./sheet");
const { splitWorkingHoursLineByLine, prepareSheetContents } = utilFunctions;

const workingHours = splitWorkingHoursLineByLine();
const sheetContents = prepareSheetContents(workingHours);

(async () => {
  // load the documents info
  await doc.loadInfo();

  console.log(doc.title);
})();
