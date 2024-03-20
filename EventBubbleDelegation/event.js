document.getElementById('listContainer').addEventListener('click', () => {
  console.log('List Container clicked');
});
document.getElementById('listParent').addEventListener('click', () => {
  console.log('List Parent clicked');
});
document.querySelectorAll('.item').forEach((item) => {
  item.addEventListener('click', (e) => {
    console.log(e.target.innerText);
    e.stopPropagation();
    // e.stopImmediatePropagation();
  });
  item.addEventListener('click', (e) => {
    console.log(e.target.innerText);
    // e.stopPropagation();
  });
  item.addEventListener('click', (e) => {
    console.log(e.target.innerText);
    // e.stopPropagation();
  });
  item.addEventListener('click', (e) => {
    console.log(e.target.innerText);
    // e.stopPropagation();
  });
});

// document.querySelectorAll('.item').forEach((item) => {
//   item.addEventListener('click', (e) => {
//     const parent = e.target.parentNode;
//     // const child = parent.children;
//     parent.removeChild(e.target);
//   });
// });

// delegation solution

document.querySelector('#listParent').addEventListener('click', (e) => {
  const parent = e.target.parentNode;
  if (e.target.nodeName === 'LI') {
    // parent.removeChild(e.target);
    e.target.style.backgroundColor = 'steelblue';
  }
});

document.querySelector('#addList').addEventListener('click', (e) => {
  const li = document.createElement('li');
  li.innerText = 'new item';
  document.querySelector('#listParent').append(li);
});
