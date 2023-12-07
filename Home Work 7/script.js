const numbers = [1, 2, 3, 4, 5];
const string = ["Hello", " ", "world", "!"];
const arrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const sentence = "This is an example sentence with example word.";

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum", sum);

const product = numbers.reduce((acc, num) => acc * num, 0);
console.log("Product", product);

const combinedString = string.reduce((acc, str) => acc + str, "");
console.log("Combined String:", combinedString);

const negativeCount = numbers.reduce(
  (acc, num) => (num < 0 ? acc + 1 : acc),
  0
);
console.log("Negative Count:", negativeCount);

const max = numbers.reduce(
  (acc, nem) => Math.max(acc, num),
  Number.MAX_SAFE_INTEGER
);
console.log("Max", max);

const min = numbers.reduce(
  (acc, num) => Math.min(acc, num),
  Number.MAX_SAFE_INTEGER
);
console.log("Min", min);

const average = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
console.log("Average", average);

const flattenedArray = arrays.reduce((acc, arr) => acc.concat(arr), []);
console.log("Flattened Array:", flattenedArray);

const wordCount = sentence.split(" ").reduce((acc) => acc + 1, 0);
console.log("Word Count", wordCount);

const uniqueArray = numbers.reduce(
  (acc, num) => (acc.includes(num) ? acc : acc.concat(num)),
  []
);
console.log("Unique Array:", uniqueArray);

const factorial = (n) =>
  Array.from({ length: n }, (_, index) => index + 1).reduce(
    (acc, num) => acc * num,
    1
  );
console.log("Factorial of 5:", factorial(5));

const filterArray = [1, 0, true, false, "hello", "", null, undefined].reduce(
  (acc, val) => (val ? acc.concat(val) : acc),
  []
);
console.log("Filtered Array:", filteredArray);

const targetWord = "example";
const wordFrequency = sentence
  .split(" ")
  .reduce((acc, word) => (word === targetWord ? acc + 1 : acc), 0);
console.log(`Frequency of "${targetWord}":`, wordFrequency);
