var argButtonName, buttonPaper, buttonRock, buttonScissors, buttonTest;

var playerWinAmount = 0;
var computerWinAmount = 0;



buttonTest = document.getElementById('button-test');
buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');

function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');

  playerMove = argButtonName;

randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);
}

var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

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
    playerWinAmount = playerWinAmount + 1;
    printMessage('Twój wynik to ' + playerWinAmount); 
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
    playerWinAmount = playerWinAmount + 1;
    printMessage('Twój wynik to ' + playerWinAmount);
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
    playerWinAmount = playerWinAmount + 1;
    printMessage('Twój wynik to ' + playerWinAmount);
  } else if (argPlayerMove == argComputerMove) {
    printMessage('Remis!');
  } else {
    printMessage('Przegrywasz :(');
    computerWinAmount = computerWinAmount + 1;
    printMessage('Wynik komputera to ' + computerWinAmount);
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}









//buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST'); });

buttonRock.addEventListener("click", function(){ buttonClicked('kamień'); });

buttonPaper.addEventListener("click", function(){ buttonClicked('papier'); });

buttonScissors.addEventListener("click", function(){ buttonClicked('nożyce'); });

