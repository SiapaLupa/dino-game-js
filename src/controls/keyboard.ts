import Game from "../game";

export default class KeyboardControl {
  public constructor(game: Game) {
    window.onkeydown = (e: KeyboardEvent) => {
      console.log(game.player.isJumping());

      if (game.player.isJumping()) {
        return;
      }

      if (e.key === " ") {
        game.player.jump();
      }
    };
  }
}
