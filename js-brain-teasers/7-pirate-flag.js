const flag = "🏴‍☠";
console.log(flag.length);

/*
 🏴 . ☠
 The flag is formed by two sequence, the flag and skull connected with  a dot. This is called ZWJ 
 sequence (Zero Width Joiner)

 The black flag is formed of two unicode characters and skull by 1 and the dot
 So total 4
*/

function getLength(str) {
  const Segmenter = new Intl.Segmenter();
  const segment = Segmenter.segment(str);
  const arr = Array.from(segment);

  return arr.length;
}

/*  The above fn creates an instance of segmenter, segment the string, convert into array
    and returns the length
*/
console.log(getLength(flag));
