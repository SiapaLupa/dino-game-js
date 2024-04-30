import { ColorDrawable, IDrawer, IGround } from "../types";

export default class GroundDrawer implements IDrawer {
  public constructor(private model: IGround & ColorDrawable) {}

  public draw(context: CanvasRenderingContext2D): void {
    context.save();

    context.strokeStyle = this.model.color;
    context.beginPath();

    context.fillRect(this.model.positionX, this.model.positionY, this.model.width, this.model.height);

    // context.moveTo(0, canvas.height - this.model.height);
    // context.lineTo(canvas.width, canvas.height - this.model.height);
    context.stroke();
    context.closePath();
    
    context.restore();
  }
}
