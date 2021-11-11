const mainUnitMultiples = 10
const subUnitMultiples = 5
const maxUnit = 1000
const minUnit = 1

const symbols = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M",
}

const getUnitCounts = (num) => {
  //console.log(referenceData)
  let unitCounts = {}
  for (
    let index = maxUnit, remainder = num;
    index >= minUnit;
    index /= mainUnitMultiples
  ) {
    let unitCount = Math.floor(remainder / index)
    unitCount > 0 ? (remainder = remainder % index) : null
    //console.log(unitCount)
    unitCounts[index] = unitCount
  }
  //console.log(unitCounts)
  return unitCounts
}

const getUnitNumeral = (unit, count) => {
  let unitSymbol = symbols[unit] || ""
  let nextSubUnit = unit * subUnitMultiples
  let nextSubDivSymbol = symbols.hasOwnProperty(nextSubUnit)
    ? symbols[nextSubUnit]
    : ""
  let nextMainUnit = unit * mainUnitMultiples
  let nextMainUnitSymbol = symbols.hasOwnProperty(nextMainUnit)
    ? symbols[nextMainUnit]
    : ""

  // console.log(
  //   `unit: ${unitSymbol}, next sub: ${nextSubDivSymbol}, next main: ${nextMainUnitSymbol}`
  // )

  if (count <= 0) return ""
  if (count >= 1 && count <= 3) return unitSymbol.repeat(count)
  if (count === 4) return unitSymbol + nextSubDivSymbol
  if (count === 5) return nextSubDivSymbol
  if (count > 5 && count <= 8)
    return nextSubDivSymbol + unitSymbol.repeat(count - subUnitMultiples)
  if (count === 9) return unitSymbol + nextMainUnitSymbol
}

function convertToRoman(num) {
  let unitCounts = getUnitCounts(num)
  let components = []
  for (let index = maxUnit; index >= minUnit; index /= mainUnitMultiples) {
    let component = getUnitNumeral(index, unitCounts[index])
    //    console.log(component)
    components.push(component)
  }

  // console.log(components)
  let romanNumeral = components.join("")
  // console.log(`Roman numeral representation of ${num} is ${romanNumeral}`)
  return romanNumeral
}

convertToRoman(459)
