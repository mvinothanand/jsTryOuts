function checkPrime(num) {
  let isPrime = true
  for (let i = 1, counter = 0; i <= num / 2; i++) {
    if (num % i === 0) counter++
    if (counter >= 2) {
      isPrime = false
      break
    }
  }
  //console.log(`${num} is ${isPrime ? "a" : "not a"} prime number.`)
  return isPrime
}

function getNextPrime(num) {
  let nextPrime = num
  do {
    nextPrime++
  } while (!checkPrime(nextPrime))

  //console.log(`Next Prime number after ${num} is ${nextPrime}.`)
  return nextPrime
}

function getPrimeFactors(num) {
  let primeFactors = []

  // if the number is prime its prime factor is the same number
  if (checkPrime(num)) {
    primeFactors.push(num)
    return primeFactors
  }

  // if the number is not prime divide the number by prime numbers until the quotient is a prime number
  let quotient = num
  let divisor = 2
  //console.log(
  //  `initial Quotient is: ${quotient}, initial divisor is: ${divisor}.`
  //)
  while (!checkPrime(quotient)) {
    if (quotient % divisor === 0) {
      primeFactors.push(divisor)
      quotient /= divisor
    } else {
      divisor = getNextPrime(divisor)
    }
    //console.log(`New Quotient is: ${quotient}, new divisor is: ${divisor}.`)
  }

  quotient > 1 ? primeFactors.push(quotient) : null

  //console.log(`Prime factors of ${num}: ${primeFactors}`)
  return primeFactors
}

function getUniqueElements(params) {
  let inputArray = params.slice()
  //console.log(`Fn:getUniqueElements: inputArray: ${inputArray}`);
  let outputArray = inputArray.reduce((result, element) => {
    //console.log(result);
    if (result.indexOf(element) < 0) {
      result.push(element)
    }
    return result
  }, [])
  //console.log(`unique elements: ${outputArray}`)
  return outputArray
}

function getNumOfInstances(arr, val) {
  return arr.reduce((count, element) => {
    if (element === val) {
      count++
    }
    return count
  }, 0)
}

const getMultiples = (num, times) => {
  if (times === 1) {
    return num
  } else {
    return num * getMultiples(num, times - 1)
  }
}

function smallestCommons(arr) {
  // Get the range ordered in ascending order
  let inputRange = arr[0] > arr[1] ? arr.reverse() : arr
  console.log(inputRange)

  // Get the numbers in the range
  let inputArr = []
  for (let i = inputRange[0]; i <= inputRange[1]; i++) {
    inputArr.push(i)
  }
  console.log(`Input Array: ${inputArr}`)

  // Get the prime factors of each number
  let factors = {}
  inputArr.forEach((num) => (factors[num] = getPrimeFactors(num)))
  console.log(factors)

  let factorsArray = []
  for (const key in factors) {
    if (Object.hasOwnProperty.call(factors, key)) {
      //const element = factors[key];
      //console.log(`Factors of ${key} is ${factors[key]}`)
      factorsArray = factorsArray.concat(factors[key])
      //console.log(factorsArray);
    }
  }
  console.log(`Factors Array: ${factorsArray}`)

  // Get the unique factors
  let uniqueFactors = getUniqueElements(factorsArray)
  console.log(`Unique Factors: ${uniqueFactors}`)

  // Find the multiple for each factor
  let factorMultiples = {}
  uniqueFactors.forEach((element) => {
    for (const key in factors) {
      if (Object.hasOwnProperty.call(factors, key)) {
        //const element = factors[key];
        let count = getNumOfInstances(factors[key], element)
        let currentValue = factorMultiples[element] || 0
        if (count > currentValue) {
          factorMultiples[element] = count
        }
      }
    }
  })
  console.log(factorMultiples)

  // find the LCM = product of every key to the pwer of value
  let lcm = 1
  for (const key in factorMultiples) {
    if (Object.hasOwnProperty.call(factorMultiples, key)) {
      //const element = factorMultiples[key]
      lcm *= getMultiples(key, factorMultiples[key])
    }
  }
  console.log(
    `LCM of numbers between ${inputRange[0]} and ${inputRange[1]}} is ${lcm}`
  )
  //console.log(`Prime Factors Obj: ${factors}`);
  return lcm;
}

smallestCommons([18, 23])

checkPrime(10)
