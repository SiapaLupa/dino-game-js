import { ColorDrawable, ICactus, IDrawer } from "../types";

export default class CactusDrawer implements IDrawer {
  public constructor(private model: ICactus & ColorDrawable) {}

  public draw(context: CanvasRenderingContext2D): void {
    // CACTUSES.forEach((cactus: Cactus) => {
    //   cactus.positionX =
    //     cactus.positionX <= 0
    //       ? (cactus.positionX = canvas.width + randomIntBetween(0, 1000))
    //       : cactus.positionX - SPEED;
    
      context.fillStyle = this.model.color;
      context.beginPath();
      context.fillRect(
        this.model.positionX,
        this.model.positionY,
        this.model.width,
        this.model.height
      );
      context.fill();
      context.closePath();

    //   let dinoAteCactus =
    //     DINO.positionX + DINO.width >= cactus.positionX &&
    //     DINO.positionX + DINO.width < cactus.positionX + cactus.width &&
    //     DINO.positionY + DINO.height >=
    //       canvas.height - GROUND_HEIGHT - cactus.height;
    //   let dinoSteppedOnCactus =
    //     DINO.positionY + DINO.height >=
    //       canvas.height - GROUND_HEIGHT - cactus.height &&
    //     DINO.positionX + DINO.width >= cactus.positionX &&
    //     DINO.positionX <= cactus.positionX + cactus.width;
    //   if (dinoAteCactus || dinoSteppedOnCactus) {
    //     GAME_OVER = true;
    //   }
    // });
  }
}
