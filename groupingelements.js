var merger = (items) => {
  console.log("items = ", items);
  var grouped = {};
  items.forEach((element) => {
    var key = element.id;
    console.log("key = ", key);
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(element);
  });
  console.log("grouped = ", grouped);
};
var array = [{ id: "1" }, { id: "1" }, { id: "2" }];
merger(array);
