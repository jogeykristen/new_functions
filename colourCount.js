var colour = (items) => {
  console.log("array = ", items);
  var count = 1;
  var grouped = {};
  items.forEach((element) => {
    if (!grouped[element]) {
      grouped[element] = count;
    } else {
      grouped[element] = count++;
    }
  });
  console.log("grouped = ", grouped);
};
var arr = ["red", "green", "red", "blue", "blue", "yellow", "red"];
colour(arr);
