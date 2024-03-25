let life = 5;
let score = 0;

const play = () => {
  hideElement('homeScreen', true);
  hideElement('playGround', false);
  hideElement('scoreBoard', true);
  setInnerText('updateLife', life);
  setInnerText('updateScore', score);
  gameOn();
};

const getRandomAlphabet = () => {
  const allAlphabets = 'abcdefghijklmnopqrstuvwxyz';
  const alphabets = allAlphabets.split('');
  const index = Math.floor(Math.random() * alphabets.length);
  return alphabets[index];
};

const gameOn = () => {
  const randomAlphabet = getRandomAlphabet();
  setKeyBG(randomAlphabet);
  setInnerText('currentAlphabet', randomAlphabet);
};

const handleKeyUp = (e) => {
  const currentAlphabet = getInnerText('currentAlphabet').toLowerCase();
  const pressedKey = e.key;
  if (pressedKey === currentAlphabet) {
    removeKeyBG(currentAlphabet);
    score += 1;
    setInnerText('updateScore', score);
    gameOn();
  } else if (pressedKey === `Escape`) {
    gameOver();
  } else {
    life -= 1;
    setInnerText('updateLife', life);
    removeKeyBG(currentAlphabet);
    gameOn();
    if (life === 0) {
      gameOver();
    }
  }
};

const gameOver = () => {
  hideElement('playGround', true);
  hideElement('scoreBoard', false);
  setInnerText('totalScore', score);
  const currentAlphabet = getInnerText('currentAlphabet').toLowerCase();
  removeKeyBG(currentAlphabet);
  life = 5;
  score = 0;
};

document.addEventListener('keyup', handleKeyUp);
