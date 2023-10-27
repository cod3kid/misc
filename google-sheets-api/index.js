const utilFunctions = require("./utils");
const doc = require("./sheet");
const { splitWorkingHoursLineByLine, prepareSheetContents } = utilFunctions;

const workingHours = splitWorkingHoursLineByLine();
const sheetContents = prepareSheetContents(workingHours);

(async () => {
  try {
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    await sheet.addRows([...sheetContents]);

    console.log("Data inserted into Google Sheets!");
  } catch (ex) {
    console.log("Error occurred while inserting data into Google Sheets");
  }
})();
