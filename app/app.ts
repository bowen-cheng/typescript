///<reference path="player.ts"/>

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
  postScore(100, playerName);
  postScore(-5);
}

function logPlayer(name: string = 'Unknown player'): void {
  console.log(`New game starting for player: ${name}`);
}

// function postScore(score: number, playerName?: string): void { // "?" marks a parameter as optional
function postScore(score: number, playerName: string = 'Unknown player'): void {

  // Both logMessage and logError are of the same type since they have the same parameter type and
  // return type. So the two functions are of the same type.
  let logMessage = (message: string) => console.log(message);
  let logError = (error: string) => console.error(error);
  // Therefore, they can be assigned to the "logger" variable below.
  let logger: (value: string) => void;

  if (score < 0) {
    logger = logError;
  } else {
    logger = logMessage;
  }
  logger(`Score: ${score}`);

  let scoreElement: HTMLElement = <HTMLElement> document.getElementById('postedScores');
  scoreElement!.innerText = `${score} - ${playerName}`;
}

function getInputValue(elementId: string): string | undefined {
  let inputElement: HTMLInputElement = <HTMLInputElement> document.getElementById(elementId);
  if (inputElement.value === '') {
    return undefined;
  } else {
    return inputElement.value;
  }
}

document.getElementById('startGame')!.addEventListener('click', startGame);

let firstPlayer: Player = new Player();
firstPlayer.name = 'Daniel';
console.log(firstPlayer.formatName());
