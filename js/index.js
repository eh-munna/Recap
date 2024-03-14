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

// get the tallest height

const heights = [32, 73, 7, 87, 65, 29, 64];

const getTallestHeight = (heights) => {
  let tallest = 0;
  for (const height of heights) {
    if (height > tallest) {
      tallest = height;
    }
  }
  return tallest;
};

console.log(getTallestHeight(heights));
