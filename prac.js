function f(a) {
  return (b) => {
    if (b) {
      return f(b);
    }
    return `${a} ${b}`;
  };
}

console.log(f(5)(5)(7)());
