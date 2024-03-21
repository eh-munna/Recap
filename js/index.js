function convertToNumber(id) {
  elementField = document.querySelector(id);
  elementFieldValue = parseFloat(elementField.value);
  return elementFieldValue;
}

const clearInput = (id) => {
  elementField = document.querySelector(id);
  elementField.value = '';
};

function calculateTriangle() {
  const triangleBaseValue = convertToNumber('#triangleBase');
  const triangleHeightValue = convertToNumber('#triangleHeight');
  const area = triangleBaseValue * triangleHeightValue * 0.5;
  clearInput('#triangleBase');
  clearInput('#triangleHeight');
  return console.log(area);
}
function calculateRectangle() {
  const rectangleWidthValue = convertToNumber('#rectangleWidth');
  const rectangleLengthValue = convertToNumber('#rectangleLength');
  const area = rectangleWidthValue * rectangleLengthValue;
  clearInput('#rectangleWidth');
  clearInput('#rectangleLength');
  return console.log(area);
}
