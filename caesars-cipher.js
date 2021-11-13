function rot13(str) {
  let output = str.replace(/[A-Z]/g, match => decodeROT13(match))
  console.log(output)
  return output
}

rot13("SERR PBQR PNZC") //FREE CODE CAMP
rot13("SERR CVMMN!") //should decode to the string FREE PIZZA!

function decodeROT13(char) {
  let decodedChar =
    char.charCodeAt(0) - 13 >= 65
      ? String.fromCharCode(char.charCodeAt(0) - 13)
      : String.fromCharCode(char.charCodeAt(0) + 13)
  console.log(decodedChar)
  return decodedChar
}
