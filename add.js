function evenNumbers(numbers) {
  let sum = 0;
  for (x of numbers) {
    if (x % 2 == 0) {
      sum += x;
    }
  }
  return sum;
}
console.log(evenNumbers([4, 5, 6, 7, 8, 9, 20]));
