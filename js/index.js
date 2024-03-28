// promise

const myPromise = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a === 3) {
    resolve(console.log(`a is equal to ${a}`));
  } else {
    reject(console.log(`a is not equal to ${a}`));
  }
});

myPromise
  .then((resolve) => {
    resolve;
  })
  .catch((reject) => {
    reject;
  });

const text = [
  'a is equal to',
  'a is not equal to',
  'b is equal to',
  'b is not equal to',
  'c is equal to',
  'c is not equal to',
];
let i = 0;
const id = setInterval(function () {
  console.log(text[i]);
  i++;
  if (i === text.length) {
    clearInterval(id);
  }
}, 1000);

// for (let i = 0; i < text.length; i++) {
//   console.log(i);
//   console.log(5 === text.length - 1);
// }

// let num = 0;
// for (let i = 0; i < text.length; i++) {
//   setTimeout(function () {
//     console.log(text[i]);
//     num++;
//   }, 1000 * i); // Delay increased by i times 1000 milliseconds
// }
