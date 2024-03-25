const hideElement = (id, toHide) => {
  if (toHide) {
    document.getElementById(id).classList.add('hidden');
  } else {
    document.getElementById(id).classList.remove('hidden');
  }
};

const setInnerText = (id, text) => {
  id.innerText = text;
};

const setKeyBG = (id) => {
  document.getElementById(id).classList.add('bg-orange-500');
};
const removeKeyBG = (id) => {
  document.getElementById(id).classList.remove('bg-orange-500');
};
