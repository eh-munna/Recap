const inchToFeet = (input) => {
  const feet = parseInt(input / 12);
  const inches = input % 12;
  return `${feet} feet ${inches} inches`;
};

console.log(inchToFeet(50));

const isLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a leap year`;
  } else {
    return `${year} is not a leap year`;
  }
};

console.log(isLeapYear(2024));

// give the avg of even numbers from an array of numbers

const numbers = [34, 21, 872, 52, 76, 45];

const getEvenAvg = (numbers) => {
  const evenArr = [];

  let sum = 0;

  for (const number of numbers) {
    if (number % 2 === 0) {
      evenArr.push(number);
      sum += number;
    }
  }
  return sum / evenArr.length;
};

console.log(getEvenAvg(numbers));

// duplicate elements removing from an array

const demoNumbers = [1, 2, 3, 4, 6, 5, 3, 6, 10, 2, 7, 8, 9, 10];

const removeDuplicates = (numbers) => {
  const newArr = [];
  for (const number of numbers) {
    if (!newArr.includes(number)) {
      newArr.push(number);
    }
  }
  return newArr;
};

console.log(removeDuplicates(demoNumbers));

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const currentMonth = new Date().getMonth();
console.log(currentMonth);

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const days1 = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const today = new Date().getDay();
console.log(days[today - 1]);

console.log(today);
