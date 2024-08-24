function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function example() {
  console.log("Sleeping for 2 seconds...");
  await sleep(2000);
  console.log("Awake!");
}

example();
