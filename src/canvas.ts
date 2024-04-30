import { IDrawer } from "./types";

export default class Canvas {
  private context: CanvasRenderingContext2D;

  public constructor(private canvas: HTMLCanvasElement, public width: number, public height: number) {
    canvas.width = width;
    canvas.height = height;
    this.context = canvas.getContext("2d") as CanvasRenderingContext2D;
  }
  public getHtmlElement(): HTMLCanvasElement {
    return this.canvas;
  }

  public insertText(
    text: string,
    x: number = this.width / 2,
    y: number = this.height / 2,
    options: { fontSize: number; fontFamily: string; fontColor: string } = {
      fontSize: 50,
      fontFamily: "Arial",
      fontColor: "white",
    }
  ): TextMetrics {
    this.context.save();

    this.context.fillStyle = options.fontColor;
    this.context.font = String(options.fontSize).concat(
      "px",
      " ",
      options.fontFamily
    );

    let measureText = this.context.measureText(text);

    this.context.beginPath();
    this.context.fillText(
      text,
      x - measureText.width / 2,
      y + measureText.actualBoundingBoxAscent
    );
    this.context.closePath();

    this.context.restore();

    return measureText;
  }
  public clear(): void {
    this.context.clearRect(0, 0, this.width, this.height);
  }

  public draw(drawer: IDrawer): void {
    drawer.draw(this.context);
  }
}
