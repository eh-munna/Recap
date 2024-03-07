// sum up the results from 1 to 10 using while loop

let sum = 0;
let num = 1;
let init;
while (num <= 10) {
  init = sum;
  sum = sum + num;
  console.log(init + ' + ' + num + ' = ' + sum);
  num++;
}

console.log(`Total:`, sum);
