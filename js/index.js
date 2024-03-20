const demo = document.getElementById('demo');
const ulContainer = document.getElementById('ulContainer');
console.log(demo.getAttribute('id'));

demo.setAttribute('class', 'test');
console.log(demo.className ? 'yes' : 'no');

console.log(demo.parentNode);

const li = document.createElement('li');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
li.innerText = 'list nr 1';
li1.innerText = 'list nr 2';
li2.innerText = 'list nr 3';
li3.innerText = 'list nr 4';

ulContainer.append(li, li1, li2, li3);

const allClasses = document.querySelectorAll('.cl1');
const singleClass = document.querySelector('p.cl1:first-child');
console.log(allClasses);

const firstParagraph = document.querySelector('p.cl1');
console.log(firstParagraph.innerText);
