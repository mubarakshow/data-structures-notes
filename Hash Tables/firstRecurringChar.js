// Google Question

// Given an array = [2,5,1,2,3,5,1,2,4]
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]
// It should return 1

// Given an array = [2,3,4,5]
// It should return undefined

// solving with hash map
const findFirstRecur = input => {
  let result; 
  let map = new Map()

  for (let i=0; i < input.length; i++) {
    if (!!map.get(input[i]) === true) {
      return input[i]
    } 
    map.set(input[i], input[i])
  }
  return undefined
}
