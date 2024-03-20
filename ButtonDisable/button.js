const btnDisable = document.getElementById('btnDisable');
const text = document.getElementById('text');
btnDisable.addEventListener('click', function () {
  btnDisable.disabled = true;
});

handleTextInput = () => {
  console.log(text.value);
};
