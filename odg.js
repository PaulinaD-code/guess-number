let randomNumber = Math.floor(Math.random()* 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField  = document.querySelector('.guessField');
const container = document.querySelector(".container")

let guessCount = 1;
let resetButton;


function checkGuess() {
  let userGuess = Number(guessField.value);
  if(guessCount === 1) {
    guesses.textContent = 'Poprzednio wprowadzone liczby: ';
  }

  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Gratulacje! zgadłeś/aś!';
    lastResult.style.color = 'green';
    lowOrHi.textContent = ' ';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = 'Koniec gry!';
    setGameOver();
  } else {
    lastResult.textContent = 'Żle!';
    lastResult.style.color = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Zbyt mała liczba';
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = 'Zbyt duża liczba'
    }
  }

  guessCount++;
  guessField.value = ' ';
  guessField.focus();
}

function checkKeyEvent(event){
  if(event.key === 'Enter'){
    checkGuess()
  }
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Rozpocznij nową grę';
  resetButton.style.border = 'none';
  resetButton.style.color = 'white';
  resetButton.style.font = 'Kalam, 14px';
  resetButton.style.width = '140px';
  resetButton.style.padding = '2px 0px 2px 0px';
  resetButton.style.background = "#3EB9AC";
  resetButton.style.margin = '14px auto';
  resetButton.style.padding = "5px 8px";
  resetButton.style.borderRadius = "5px"
  resetButton.style.transition = 'background-color 0.15s';
  resetButton.style.hover = 'background-color: green, color:white;';
  resetButton.style.active = 'opacity: 0.5s';
  resetButton.style.cursor = 'pointer';
  resetButton.style.height = '25px';
  resetButton.style.textAlign = "center";
 
  container.appendChild(resetButton);
 
  resetButton.addEventListener('click', resetGame);
}

resetButton.addEventListener('click', resetGame);

function setGamenOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Rozpocznij nową grę';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;

  guesses.textContent = '';
  lastResult.textContent = '';
  lowOrHi.textContent = ' ';

  let resetParas = document.querySelectorAll('.resetParas p');
  for ( let i = 0; i < resetParas.length ; i++) {
    resetParas[i].textContent = ' ';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = ' ';
    guessField.focus();

    lastResult.style.backgroundColor = 'white' ;
 
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }