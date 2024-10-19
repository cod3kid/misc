function createCounterArray() {
  const counterArray = [];
  for (var i = 0; i < 5; i++) {
    counterArray.push(() => {
      console.log(`Counter: ${i}`);
    });
  }
  return counterArray;
}

const counters = createCounterArray();
counters.forEach((counter) => counter());
