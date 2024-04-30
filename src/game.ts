import Canvas from "./canvas";
import CactusDrawer from "./drawers/cactus";
import DinoDrawer from "./drawers/dino";
import GroundDrawer from "./drawers/ground";
import CactusFactory from "./factories/cactus";
import GameResult from "./game-result";
import GameSetting from "./game-settings";
import GameStates from "./game-states";
import Cactus from "./models/cactus";
import Dino from "./models/dino";
import Ground from "./models/ground";
import {
  ColorDrawable,
  Entity,
  FactoryResult,
  ICactus,
  IDrawer,
  IGround,
  IPlayer,
  ImageDrawable,
  JumpAbility,
} from "./types";

export default class Game {
  public player: IPlayer & ImageDrawable;
  public obstacles: FactoryResult<ICactus, IDrawer>;
  public canvas: Canvas;
  public ground: IGround & ColorDrawable;
  public states: GameStates;
  public result: GameResult;
  public groundDrawer: IDrawer;
  public playerDrawer: IDrawer;

  public constructor(canvas: HTMLCanvasElement, width: number, height: number) {
    const playerHeight = 100;
    const playerWidth = 50;
    const playerImage = new Image();
    playerImage.src = GameSetting.PLAYER_IMAGE_PATH;

    const cactusWidth = 20;
    const cactusHeight = 100;

    this.states = new GameStates();
    this.result = new GameResult();

    this.canvas = new Canvas(canvas, width, height);
    this.ground = new Ground(
      0,
      canvas.height - GameSetting.GROUND_HEIGHT,
      canvas.width,
      GameSetting.GROUND_HEIGHT,
      GameSetting.GROUND_COLOR
    );
    this.groundDrawer = new GroundDrawer(this.ground);

    const cactusModel = new Cactus(
      this.canvas.width / 2,
      this.canvas.height - this.ground.height - cactusHeight,
      cactusWidth,
      cactusHeight,
      "white"
    );
    const cactusDrawer = new CactusDrawer(cactusModel);

    this.player = new Dino(
      100,
      this.canvas.height - this.ground.height - playerHeight,
      playerWidth,
      playerHeight,
      playerImage
    );

    this.playerDrawer = new DinoDrawer(this.player);

    this.obstacles = new CactusFactory(cactusModel, cactusDrawer).create(4);
  }

  public applyGravity(entity: Entity & JumpAbility): void {
    entity.gravitationalAcceleration +=
      GameSetting.GLOBAL_GRAVITATIONAL_ACCELERATION;
    
    entity.positionY = Math.min(
      entity.positionY + entity.gravitationalAcceleration,
      this.canvas.height - this.ground.height - entity.height
    );

    if (
      entity.positionY + entity.height >=
      this.canvas.height - this.ground.height
    ) {
      entity.land();
      return;
    }
  }

  public play(): number {
    if (this.result.isGameOver()) {
      this.canvas.insertText("Game Over");
      // window.cancelAnimationFrame(frameId);
      return 0;
    }
    this.canvas.clear();

    // drawScore();

    this.applyGravity(this.player);
    this.player.move();

    for (const obstacle of this.obstacles) {
      obstacle.model.move();

      this.canvas.draw(obstacle.drawer);
    }

    this.canvas.draw(this.playerDrawer);
    this.canvas.draw(this.groundDrawer);

    return window.requestAnimationFrame(() => this.play());
  }
}
