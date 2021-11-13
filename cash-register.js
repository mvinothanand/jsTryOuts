// Refer to FCC for more details: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

const currencyUnits = {
  "ONE HUNDRED": 100,
  TWENTY: 20,
  TEN: 10,
  FIVE: 5,
  ONE: 1,
  QUARTER: 0.25,
  DIME: 0.1,
  NICKEL: 0.05,
  PENNY: 0.01,
}
//cid - cash in drawer
function checkAvailability(currencyUnitName, amountNeeded, cid) {
  // console.log("function: checkAvailability")
  // console.log(`inputs: ${currencyUnitName}, ${amountNeeded}`)
  //let currencyUnit = currencyUnits[currencyUnitName]
  let currencyUnitInDrawer = cid.filter(
    (element) => element[0] === currencyUnitName
  )
  //console.log("Currency unit in drawer")
  //console.log(currencyUnitInDrawer)
  //console.log(currencyUnitInDrawer[0][1])
  //let amountNeeded = currencyUnit * unitsNeeded;
  //console.log(currencyUnitInDrawer[0][1] - amountNeeded)
  let amountAvailable = amountNeeded
  let balance = currencyUnitInDrawer[0][1]
  if (currencyUnitInDrawer[0][1] - amountNeeded <= 0) {
    amountAvailable = currencyUnitInDrawer[0][1]
    balance = 0
  }
  // let amountAvailable = currencyUnitInDrawer[0][1] - amountNeeded >= 0 ? amountNeeded : currencyUnitInDrawer[0][1];
  // console.log(`amount available: ` + amountAvailable)
  return [amountAvailable, balance]
}

function checkCashRegister(price, cash, cid) {
  let changeAmountToBeGiven = cash - price
  //let finalCashInDrawer = cid.slice();
  let availableChangeAmount = cid
    .reduce((total, element) => {
      return (total += element[1])
    }, 0.0)
    .toFixed(2)
  console.log(
    `Change to be given: ${changeAmountToBeGiven}, Total Cash in drawer: ${availableChangeAmount}`
  )

  // Insufficient funds in cash register
  if (availableChangeAmount < changeAmountToBeGiven) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: [],
    }
  }

  // Denominations for change not available
  let remainder = changeAmountToBeGiven
  let changeDetails = []
  let remainingAmtInDrawer = 0
  for (const key in currencyUnits) {
    if (Object.hasOwnProperty.call(currencyUnits, key)) {
      const element = currencyUnits[key]
      //console.log("Currency Unit: " + element)
      let noOfUnitsNeeded = Math.floor(remainder / element)
      console.log(
        `Currency Unit: ${element}, No of units needed: ${noOfUnitsNeeded}`
      )
      if (noOfUnitsNeeded === 0) continue
      let amountNeeded = noOfUnitsNeeded * element
      console.log(`Amount Needed: ` + amountNeeded)
      let [unitAvailability, balance] = checkAvailability(
        key,
        amountNeeded,
        cid
      )
      //console.log(`Unit Available: ` + unitAvailability)
      let unmetAmount = amountNeeded - unitAvailability     
      remainingAmtInDrawer += balance
      console.log(`Unmet amount: ` + unmetAmount)
      //console.log(changeDetails)
      changeDetails.push([key, unitAvailability])
      //console.log("Change Details")
      //console.log(changeDetails)
      // remainder = (
      //   (remainder % element) +
      //   unmetAmount
      // ).toFixed(2)
      
      // if (element < 1) {
      // NOTE: This conversion to cents is needed as Javascript leaves a rounding of error when converting decimanls to binary. .5 % .1 will not return zero 
      let remainderinCents = remainder * 100
      let currencyUnitInCents = element * 100;
      remainder = 
        ((remainderinCents % currencyUnitInCents)/100 +
        unmetAmount
      ).toFixed(2)
      // }
      // remainder = parseFloat(remainder)
      console.log(`remainder: ${remainder}`)
      if (remainder === 0) break
    }
  }

  console.log("Final change:")
  console.log(changeDetails)
  let status = "OPEN"
  if (remainingAmtInDrawer === 0) {
    status = "CLOSED"
    changeDetails = cid.slice()
  }
    // remainingAmtInDrawer === 0 ? (status = "CLOSED") : (status = "OPEN")
  console.log(`remaining amount: ${remainingAmtInDrawer}`)
  console.log(`Remainder: ${remainder}`)
  console.log(`${remainder == 0}`)
  if (remainder == 0) {
    return {
      status: status,
      change: changeDetails,
    }
  }
  if (remainder > 0) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: [],
    }
  }
  return changeDetails
}

// checkCashRegister(19.5, 20, [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100],
// ])

// checkCashRegister(3.26, 100, [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100],
// ])

checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
])
