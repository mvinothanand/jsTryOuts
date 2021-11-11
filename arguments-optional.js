function addTogether(...params) {
  //console.log(arguments)
  //const [first, second] = arguments;
  console.log(params)
  const [first, second] = params
  console.log(`First: ${first}, Second: ${second}`)

  if (typeof first === "number") {
    if (typeof second === "number") {
      return first + second
    } else if (second === undefined) {
      return function (second) {
        if (typeof second != "number") {
          return undefined
        }
        return first + second
      }
      //return add;
      //      return function(second) {
      //        return first + second;
      //     }
    }
  } else {
    return undefined
  }
}
addTogether(2)([3])
