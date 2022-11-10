

let playerWinAmount = 0;
let computerWinAmount = 0;


const buttonRock = document.getElementById('button-rock'),
buttonPaper = document.getElementById('button-paper'),
buttonScissors = document.getElementById('button-scissors');

printMessage(' Twój wynik to ' + playerWinAmount + ' Wynik komputera to ' + computerWinAmount );

function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
  
  playerMove = argButtonName;

randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);
printMessage(' Twój wynik to ' + playerWinAmount + ' Wynik komputera to ' + computerWinAmount );
}

function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}



function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!'); 
    incrasePlayerWinAmount();
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
    incrasePlayerWinAmount();
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
    incrasePlayerWinAmount();
  } else if (argPlayerMove == argComputerMove) {
    printMessage('Remis!');
  } else {
    printMessage('Przegrywasz :(');
    incraseComputerWinAmount();
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

function incrasePlayerWinAmount() {
  playerWinAmount = playerWinAmount + 1;
}

function incraseComputerWinAmount() {
  computerWinAmount = computerWinAmount + 1;
}








//buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST'); });

buttonRock.addEventListener("click", function(){ buttonClicked('kamień'); });

buttonPaper.addEventListener("click", function(){ buttonClicked('papier'); });

buttonScissors.addEventListener("click", function(){ buttonClicked('nożyce'); });

