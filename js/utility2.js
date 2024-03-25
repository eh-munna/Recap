const getId = (id) => {
  return document.getElementById(id);
};

const hideElement = (id, toHide) => {
  if (toHide) {
    getId(id).classList.add('hidden');
  } else {
    getId(id).classList.remove('hidden');
  }
};

const setInnerText = (id, text) => {
  getId(id).innerText = text;
};

const getInnerText = (id) => {
  return getId(id).innerText;
};

const setKeyBG = (id) => {
  getId(id).classList.add('bg-orange-500');
};

const removeKeyBG = (id) => {
  getId(id).classList.remove('bg-orange-500');
};
