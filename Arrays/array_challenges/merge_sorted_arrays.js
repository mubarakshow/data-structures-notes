// input1 --> [0, 3, 4, 31]
// input2 --> [4, 6, 30]

const mergeSortedArray = (arr1, arr2) => {
  // check input
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }

  // merge and sort
  let newArr = [...arr1, ...arr2]
  return newArr.sort((a,b) => a-b)
}

mergeSortedArray([0, 3, 4, 31], [4, 6, 30]) // [0, 3, 4, 4, 6, 30, 31]


// second implementation 
const mergeSortedArray2 = (arr1, arr2) => {
  const mergedArray = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;

  // check input
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }

  while (arr1Item || arr2Item) {
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArray.push(arr1Item)
      arr1Item = arr1[i];
      i++
    } else {
      mergedArray.push(arr2Item)
      arr2Item = arr2[j];
      j++
    }
  }
}

