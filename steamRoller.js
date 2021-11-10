function steamrollArray(arr) {
  console.log(`Input:`)
  console.log(arr)
  let output = arr.reduce((result, element) => {
    if (typeof element === "number" || typeof element === "string") {
      result.push(element)
      return result
    }

    if (typeof element === "object") {
      //result.push(element);
      if (Array.isArray(element)) {
        var temp = steamrollArray(element)
        // console.log("temp")
        // console.log(temp)
        // console.log("current result value")
        // console.log(result)
        result.push(...temp)
        // console.log("result")
        // console.log(result)
        return result

      } else {
        // console.log("found an js object")
        result.push(element)
        return result
      }
    }
  }, [])
  console.log("output")
  console.log(output)

  return output
}

steamrollArray([[["a"]], [["b"]]])
//steamrollArray([1, {}, [3, [4, 5, []]]])
