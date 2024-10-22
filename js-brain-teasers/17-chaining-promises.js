console.log("Application started");

async function fetchDataFromAPI() {
  console.log("Fetching data from API...");
  await processAPIData();
  console.log("Data fetched successfully");
}

async function processAPIData() {
  console.log("Processing API data...");
}

fetchDataFromAPI();
console.log("Application ended");
