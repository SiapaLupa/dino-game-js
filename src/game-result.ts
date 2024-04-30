import GameVariables from "./game-variables";

export default class GameResult extends GameVariables {
  public setGameOver(state: boolean = true): void {
    this._isGameOver = state;
  }
  public isGameOver(): boolean {
    return this._isGameOver;
  }
}