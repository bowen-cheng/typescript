function startGame(): void {
  let playerName: string | undefined;
  // playerName = null; // error
  // playerName = undefined; // works
  // playerName = 'Billy'; // works
  playerName = getInputValue('playername');

  // logPlayer(null); // error
  // logPlayer(undefined); // works
  logPlayer(playerName);

  // const messageElement: HTMLElement | null = document.getElementById('messages');
  // messageElement.innerText = 'Welcome! Starting a new game...'; // TS reports object could be null
  // "!" is the non-null assertion operator tells the compiler "this won't be null/undefined so don't complain"
  // messageElement!.innerText = 'Welcome! Starting a new game...';
  postScore(100, playerName)
}

function logPlayer(name: string = 'Unknown player'): void {
  console.log(`New game starting for player: ${name}`);
}

// function postScore(score: number, playerName?: string): void { // "?" marks a parameter as optional
function postScore(score: number, playerName: string = 'Unknown player'): void {
  let scoreElement: HTMLElement = <HTMLElement> document.getElementById('postedScores');
  scoreElement!.innerText = `${score} - ${playerName}`;
}

function getInputValue(elementId: string): string | undefined {
  let inputElement: HTMLInputElement = <HTMLInputElement> document.getElementById(elementId);
  if (inputElement.value === '') {
    return undefined;
  }  else {
    return inputElement.value;
  }
}

document.getElementById('startGame')!.addEventListener('click', startGame);
