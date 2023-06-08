

const numbers = [48, 20, 18, 7, 12, 9, 8, 10, 12, 96, 3, 36, 51];

const filteredNumbers = numbers.filter(number => number % 3 === 0 && number % 6 === 0 && number % 9 !== 0);

console.log(filteredNumbers);
