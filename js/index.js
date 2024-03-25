let life = 5;
let score = 0;
const currentAlphabet = document.getElementById('currentAlphabet');
const updateLife = document.getElementById('updateLife');
const updateScore = document.getElementById('updateScore');
const totalScore = document.getElementById('totalScore');
const handleKeyPress = (e) => {
  const playerPressed = e.key;
  console.log(`Player:`, playerPressed);
  if (playerPressed === 'Enter') {
    removeKeyBG(currentAlphabet.innerText.toLowerCase());
    play();
  } else if (currentAlphabet.innerText.toLowerCase() === playerPressed) {
    removeKeyBG(playerPressed);
    continueGame();
    score += 1;
    setInnerText(updateScore, score);
  } else {
    removeKeyBG(currentAlphabet.innerText.toLowerCase());
    continueGame();
    life -= 1;
    setInnerText(updateLife, life);
    if (life === 0) {
      removeKeyBG(currentAlphabet.innerText.toLowerCase());
      hideElement('playGround', true);
      hideElement('scoreBoard', false);
      setInnerText(totalScore, score);
    }
  }
};
document.addEventListener('keyup', handleKeyPress);

const continueGame = () => {
  const alphabet = getRandomAlphabet();
  setInnerText(currentAlphabet, alphabet);
  setKeyBG(alphabet);
  console.log(`new random:`, alphabet);
};

const play = () => {
  restart();
};

const getRandomAlphabet = () => {
  const alphabetStr = 'abcdefghijklmnopqrstuvwxyz';
  const alphabets = alphabetStr.split('');
  const index = Math.floor(Math.random() * alphabets.length);
  return alphabets[index];
};

const restart = () => {
  removeKeyBG(currentAlphabet.innerText.toLowerCase());
  score = 0;
  life = 5;
  setInnerText(updateLife, life);
  setInnerText(updateScore, score);
  hideElement('homeScreen', true);
  hideElement('playGround', false);
  hideElement('scoreBoard', true);
  continueGame();
};

/* 

const getRandomAlphabet = () => {
  const alphabets =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const randomIndex = Math.floor(Math.random() * alphabets.length);
  return alphabets.charAt(randomIndex);
};
console.log(getRandomAlphabet());

*/
