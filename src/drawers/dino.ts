import { IDrawer, IPlayer, ImageDrawable } from "../types";

export default class DinoDrawer implements IDrawer {
  public constructor(private model: IPlayer & ImageDrawable) {}

public draw(context: CanvasRenderingContext2D): void {
    context.save();
    // context.fillStyle = this.model.color;
    
    context.beginPath();
    context.rect(this.model.positionX, this.model.positionY, this.model.width, this.model.height);
    context.closePath();
    context.fill();
    
    context.restore();
  }
}
