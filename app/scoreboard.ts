import { Result } from "./result";

export class Scoreboard {
  private results: Result[] = [];

  addResult(newResult: Result): void {
    this.results.push(newResult);
  }

  updateScoreBoard(): void {
    let output: string = '<h2>Scoreboard</h2>';

    // loop over all results and create the html for the scoreboard
    for (let i = 0; i < this.results.length; i++) {
      let result: Result = this.results[i];
      output += `<h4>${result.playerName}: ${result.score}/${result.problemCount} for factor ${result.factor}</h4>`;
    }

    // add the updated scoreboard to the page
    let scoresElement: HTMLElement = document.getElementById('scores')!;
    scoresElement.innerHTML = output;
  }
}
