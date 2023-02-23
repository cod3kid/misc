const dbName = document.getElementById("db-name");
const dbVersion = document.getElementById("db-version");
const createDbButton = document.getElementById("create-db-button");

createDbButton.addEventListener("click", (e) => {
  createDB(dbName.value, dbVersion.value);
});

const createDB = (dbName, dbVersion) => {
  const request = indexedDB.open(dbName, dbVersion);

  request.onupgradeneeded = (e) => {
    // If the db doesn't exist, this method will be called first and the 'notes' db will
    // be created
    console.log("On upgrade needed");
  };

  request.onsuccess = (e) => {
    console.log("On success");
  };

  request.onerror = (e) => {
    console.log("On error: ", e.target.error);
  };
};
