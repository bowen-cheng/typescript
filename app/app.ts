function startGame() {
  var messageElement = document.getElementById('messages');
  messageElement.innerText = 'Welcome! Starting a new game...'
}

document.getElementById('startGame').addEventListener('click', startGame);
