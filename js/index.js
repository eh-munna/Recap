// get the biggest number of 3 numbers

const getBiggestNumber = (a, b, c) => {
  if (a > b && a > c) {
    return `${a} is bigger than ${b} and ${c}`;
  } else if (b > a && b > c) {
    return `${b} is bigger than ${a} and ${c}`;
  } else {
    return `${c} is bigger than ${a} and ${b}`;
  }
};

console.log(getBiggestNumber(1, 2, 3));
