function convertToNumber(id) {
  elementField = document.querySelector(id);
  elementFieldValue = parseFloat(elementField.value);
  return elementFieldValue;
}

const clearInput = (id) => {
  elementField = document.querySelector(id);
  elementField.value = '';
};

const generateRandomBG = () => {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return `rgb(${color.join(',')})`;
};

const setRandomBG = () => {
  const allShapes = document.querySelectorAll('.shape-item');
  allShapes.forEach((shape) => {
    shape.addEventListener('mouseover', () => {
      shape.style.backgroundColor = generateRandomBG();
    });
    shape.addEventListener('mouseout', () => {
      shape.style.backgroundColor = '';
    });
  });
};
