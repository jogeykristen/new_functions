let arr = [1, 5, 3, 2, 4, 5, 5, 6, 8, 9];
let arr2 = [1, 5, 3, 2, 1, 4, 5, 6, 7, 8, 9];

let newArray1 = arr.sort();
let newArray2 = arr2.sort();
console.log("new array1 = ", newArray1, "new array 2 = ", newArray2);
var mergedArray = [...newArray1, ...newArray2];
console.log("metged = ", mergedArray);

mergedArray = [...new Set([...arr, ...arr2])];
//const uniqueArray = mergedArray.filter((item, index) => mergedArray.indexOf(item) === index);
console.log("Unique Merged Array:", mergedArray);
