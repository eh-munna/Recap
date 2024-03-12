const numbers = [3, 4, 5, 6, 7, 8];

let reverseNumbers = [];

for (let number of numbers) {
  reverseNumbers.unshift(number);
  console.log(reverseNumbers);
}

console.log(reverseNumbers);

const countZero = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '0') count += 1;
  }
  return count;
};

const result = countZero('1011010100');
console.log(result);
