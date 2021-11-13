function telephoneCheck(str) {
  let result = false
  // General Pattern check
  let regex = /^[1-9\(][0-9-\(\) ]+$/g
  result = regex.test(str)
  console.log("Pattern Check: " + result)
  if (!result) return result

  // Braces check
  if (str.indexOf("(") >= 0 || str.indexOf(")") >= 0) {
    regex = /(\(\d{3}\))/
    result = regex.test(str)
  }
  console.log("Braces Check: " + result)
  if (!result) return result

  // Hyphen check
  if (str.indexOf("-") >= 0) {
    //    regex = /(\-\d{3,4})/
    //    result = regex.test(str)
    let index = str.indexOf("-")
    let lastIndex = str.lastIndexOf("-")
    console.log(`Index: ${index}, last index: ${lastIndex}`)
    do {
      let nextIndex = str.indexOf("-", index + 1)
      if (index === lastIndex) {
        if (str.length - lastIndex - 1 !== 4) {
          result = false
          break
        }
      } else {
        console.log(`next Index: ${nextIndex}`)
        if (nextIndex - index !== 4) {
          result = false
          break
        }
      }
      index = nextIndex
    } while (index > 0)
  }

  console.log("Hyphen Check: " + result)
  if (!result) return result

  // Length check
  let numbers = str.replace(/\D/g, "")
  console.log(numbers)
  result = numbers.length > 11 || numbers.length < 10 ? false : true
  console.log("Length Check: " + result)
  if (!result) return result

  // Country code check
  if (numbers.length === 11) {
    result = numbers[0] === "1" ? true : false
  }
  console.log("Country Code Check: " + result)
  if (!result) return result

  console.log(result)
  return result
}

telephoneCheck("555-555-5555") 
//telephoneCheck("555-555-5555") // true
//telephoneCheck("1 555-555-5555") // true
//telephoneCheck("1 (555) 555-5555") // true
// telephoneCheck("5555555555") // true
// telephoneCheck("555-555-5555") // true
// telephoneCheck("1(555)555-5555") // true
