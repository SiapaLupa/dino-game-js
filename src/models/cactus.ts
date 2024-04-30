import GameSettings from "../game-settings";
import Utils from "../utils";
import { ICactus } from "../types";

export default class Cactus implements ICactus {
  public constructor(
    public positionX: number,
    public positionY: number,
    public width: number,
    public height: number,
    public color: string,
    public gravitationalAcceleration: number = 0
  ) {}

  public move(): void {
    this.positionX -= GameSettings.PLAYER_RUNNING_SPEED;

    if (this.positionX <= -1000) {
      this.moveToScene();
    }
  }

  private moveToScene() {
    this.positionX =
      GameSettings.CANVAS_WIDTH + 500 + Utils.randomIntBetween(0, 3) * 500;
  }
}
