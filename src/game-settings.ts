// used outside runtime

export default class GameSettings {
  public static readonly GROUND_HEIGHT: number = 100;
  public static readonly GROUND_COLOR: string = "white";
  public static readonly GLOBAL_GRAVITATIONAL_ACCELERATION = 0.5;
  public static readonly CANVAS_WIDTH: number = window.innerWidth;
  public static readonly CANVAS_HEIGHT: number = window.innerHeight;
  public static readonly PLAYER_JUMP_FORCES = 15;
  public static readonly PLAYER_RUNNING_SPEED: number = 6;
  public static readonly PLAYER_IMAGE_PATH: string =
    "public/images/sprites/player.png";
}
