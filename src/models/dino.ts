import GameSettings from "../game-settings";
import { IPlayer, ImageDrawable } from "../types";

export default class Dino implements IPlayer, ImageDrawable {
  private _isJumping: boolean = false;

  public constructor(
    public positionX: number,
    public positionY: number,
    public width: number,
    public height: number,
    public image: HTMLImageElement,
    public gravitationalAcceleration: number = 0
  ) {
    image.width = width;
    image.height = height;
    // Object.assign(this, player);
    // this.positionY = canvas.height - GROUND_HEIGHT - this.height;
    // this.positionX = 100;
  }
  public isJumping(): boolean {
    return this._isJumping;
  }
  public jump(): void {
    this._isJumping = true;
    this.gravitationalAcceleration = -GameSettings.PLAYER_JUMP_FORCES;
  }
  public move(): void {
    // it supposed to not moving
  }
  public land(): void {
    this._isJumping = false;
    this.gravitationalAcceleration = 0;
  }
}
