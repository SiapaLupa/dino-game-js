import GameVariables from "./game-variables";

export default class GameStates extends GameVariables {
  public resetCurrentScores(): void {
    this.setCurrentScores(0);
  }
  private setCurrentScores(total: number): void {
    this._currentScores = total;
  }
  public addCurrentScores(count: number): void {
    this._currentScores += count;

    if (this._currentScores > this._highscores) {
      this._highscores = this._currentScores;
    }
  }
  public getCurrentScores(): number {
    return this._currentScores;
  }

  private setHighscores(total: number): void {
    this._highscores = total;
  }
  public getHighscores(): number {
    return this._highscores;
  }
}