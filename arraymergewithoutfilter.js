const merger = (arr1, arr2) => {
  console.log("arr1 = ", arr1, "arr2 = ", arr2);
  var seen = {};
  var pushArray = [];
  var mergerdArray = arr1.concat(arr2);
  console.log("mergedArray = ", mergerdArray);
  for (x of mergerdArray) {
    var element = x;
    console.log("Seen outside if = ", seen);
    if (!seen[element]) {
      pushArray.push(element);
      seen[element] = "true";
      console.log("Seen inside = ", seen);
    }
    console.log("Seen inside for = ", seen);
  }
  console.log("Seen outside for = ", seen);
  console.log("pushArray = ", pushArray);
};
arr1 = [1, 2, 3, 4, 5, 6, 7, 9];
arr2 = [1, 3, 4, 7, 8];
merger(arr1, arr2);
