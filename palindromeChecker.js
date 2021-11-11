function palindrome(str) {
  let input = str
  console.log(input)
  let cleanInput = input.replace(/\W|_/g, "").toLowerCase()
  console.log(cleanInput)
  let reverseOfInput = cleanInput.split("").reverse().join("")
  console.log(reverseOfInput)

  return cleanInput === reverseOfInput
}

console.log(palindrome("A man, a plan, a canal. Panama"))
console.log(palindrome("0_0 (: /- :) 0-0"))
palindrome("My age is 0, 0 si ega ym.")