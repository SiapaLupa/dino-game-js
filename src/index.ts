import Game from "./game";
import GameSettings from "./game-settings";
import KeyboardControl from "./controls/keyboard";

const canvas = document.querySelector("canvas") as HTMLCanvasElement;

if (!canvas.getContext("2d")) {
  throw new Error("your browser does not support this action");
}

type Ready = {
  dino: boolean;
  cactus: boolean;
};

var imageReady: Ready = {
  dino: false,
  cactus: false,
};

const game = new Game(
  canvas,
  GameSettings.CANVAS_WIDTH,
  GameSettings.CANVAS_HEIGHT
);

new KeyboardControl(game);

window.requestAnimationFrame(() => game.play());

// function drawScore(increment: number = 1): void {
//   SCORE += increment;
//   let actualScore: number = Math.round(SCORE / 10);
//   SCORE > HIGHSCORE && (HIGHSCORE = actualScore);
//   let measureText = insertText("Score : " + actualScore, undefined, 0);
//   insertText(
//     "High Score : " + HIGHSCORE,
//     undefined,
//     measureText.actualBoundingBoxAscent,
//   );
// }
