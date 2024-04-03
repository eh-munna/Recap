// const fetchData = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const data = 'Promise is resolved';
//     const error = true;
//     if (!error) {
//       resolve(data);
//     } else {
//       reject(`Promise is declined`);
//     }
//   }, 2000);
// });

// fetchData
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const getData = async () => {
//   try {
//     const data = await fetchData;
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getData();

const str = 'Promise is resolved';

// console.log(str.substring(200, 15));

let student1 = 9;
const student1Id = student1.toString().padStart(4, '0');
console.log(student1Id);
if (student1 >= 10) {
  const extractId = Number(student1Id.substring(2)) + 1;
  const student2Id = extractId.toString().padStart(4, '0');
  console.log(student2Id);
} else {
  const extractId = Number(student1Id.substring(3)) + 1;
  const student2Id = extractId.toString().padStart(4, '0');
  console.log(student2Id);
}
