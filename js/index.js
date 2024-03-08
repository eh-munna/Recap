const noTrim = '  this word has spaces  ';
const trimmed = noTrim.trim();
// console.log(trimmed);
// console.log(noTrim);

const str = `string-slice-join-concat-and-includes`;
const join = str.split('-').join(' ').toLowerCase();
// console.log(join);

const str2 = `string slice join concat and includes`;
const split2 = str2.split(' ').join('-').toLowerCase();
// console.log(split2);

//

const dashedStr = 'reverse-a-string-in-three-different-ways';
const normStr = dashedStr.split('-');
console.log(normStr);

let demoStr = '';
for (let i = normStr.length - 1; i >= 0; i--) {
  demoStr = demoStr + ' ' + normStr[i];
}
console.log(demoStr);

const sentence = 'I am';

let rev = '';

for (let i = 0; i < sentence.length; i++) {
  console.log(sentence[i]);
  rev = sentence[i] + rev;
}
console.log(rev);

const person = {
  name: 'John Doe',
  age: 30,
  occupation: 'Software Engineer',
  isAvailable: true,
};

for (const key in person) {
  console.log(`key: ${key} | type: ${typeof person[key]}`);
}


let str5 = "Mississippi";
console.log(str5.indexOf("i", 3));