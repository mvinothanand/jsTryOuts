var asciiValue = parseInt("01000001", 2)
console.log(asciiValue);

function binaryAgent(str) {
  let letters = str.split(" ");
  console.log(letters)
  let sentence = letters.reduce((accum, element) => {
    accum += String.fromCharCode(parseInt(element, 2));
    console.log(accum);
    return accum;
  }, "")
  return str
}

binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
)