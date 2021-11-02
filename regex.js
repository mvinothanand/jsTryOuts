// alert("Hi this is from regex.js");
let inputString = ""
let outputString = ""
let regex = ""
let matchResult = ""
let testResult = ""

// Capture groups
inputString = "boat boat boat row row row"
regex = /(\w+) \1 \1/g
// The above regex searches for a substring with
// one or more alpha-numeric characters
// with the substring repeating thrice each separated by a space
matchResult = inputString.match(regex)
console.log(`Match Result: ${matchResult}`)

// Remove whitespace from start and end using regex
inputString = "    Vinoth Anand Masilamani   "
regex = /(^\s+)|(\s+$)/g
outputString = inputString.replace(regex, "")
console.log(`Output String: ${outputString}`)
