function startGame() {
  let playerName: string | undefined;
  // playerName = null; // error
  // playerName = undefined; // works
  playerName = 'Billy'; // works

  // logPlayer(null); // error
  // logPlayer(undefined); // works
  logPlayer(playerName);

  const messageElement: HTMLElement | null = document.getElementById('messages');
  // messageElement.innerText = 'Welcome! Starting a new game...'; // TS reports object could be null
  // non-null assertion operator tells the compiler "this won't be null/undefined so don't complain"
  messageElement!.innerText = 'Welcome! Starting a new game...';
}

function logPlayer(name: string | undefined) {
  console.log(`New game starting for player: ${name}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);
