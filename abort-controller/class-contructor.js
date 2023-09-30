const controller = new AbortController();

class SomeRandomObject {
  constructor(signal) {
    this.signal = signal;
  }

  doComplexOperation() {
    if (this.signal.aborted) {
      throw new Error("Already Aborted");
    }

    for (let i = 0; i < 5; i++) {
      console.log("Heavy Loop");
    }
  }
}

const someRandomObject = new SomeRandomObject(controller.signal);
someRandomObject.doComplexOperation();
controller.abort();
someRandomObject.doComplexOperation();
