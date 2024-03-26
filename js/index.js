class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const pen = new Product('Matador', 12);
console.log(`Name: ${pen.name}
Price: ${pen.price}`);

class Player {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Batter extends Player {
  constructor(name, age, type) {
    super(name, age);
    this.type = type;
  }
}

const john = new Batter('john', 12, 'batsman');
console.log(john);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr = [];
console.log(arr);

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr2.splice(0, arr2.length);
console.log(arr2);

function count(a, b, c) {
  console.log(a, b, c);
  return a + b + c;
}

console.log(count(1, 2));

let test = '0';

if (!!test) {
  console.log(`${test} is true`);
} else {
  console.log(`${test} is false`);
}

let firstArr = [1, 2, 3, 4, 5, 6, 7];
// let secondArr = [8, 9, 10, 11, 12, 13, 14, 15, 16];
let secondArr = [1, 2, 3, 4, 5, 6, 7];

const checkArr = (arr1, arr2) => {
  for (const a of arr1) {
    for (const b of arr2) {
      if (a === b) {
        return true;
      }
      return false;
    }
  }
};

console.log(checkArr(firstArr, secondArr));

let user1 = {
  name: 'John',
  age: 12,
  city: 'New York',
};

let user2 = {
  name: 'John',
  age: 12,
  city: 'New York',
};

const checkObj = (obj1, obj2) => {
  for (const key in obj1) {
    for (const key in obj2) {
      if (obj1[key] === obj2[key]) {
        return true;
      }
      return false;
    }
  }
};

console.log(checkObj(user1, user2));

const student = () => {
  let id = 0;

  return (increaseId = () => {
    id += 1;
    return id;
  });
};

const std1Id = student();
const std2Id = student();
console.log(std1Id(), std2Id());
console.log(std1Id(), std2Id());
console.log(std1Id(), std2Id());

// pass by reference
const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const passArr = (arr) => {
  arr.push(56, 45);
  return arr;
};

console.log(testArr);
console.log(passArr(testArr));
console.log(testArr);

// pass by value
const num1 = 2;
const num2 = 3;
const numbers = (num1, num2) => {
  num1 = 5;
  return num1 + num2;
};

console.log(num1);
console.log(numbers(num1, num2));
console.log(num1);
