var canvas = document.querySelector("canvas") as HTMLCanvasElement;
var context = canvas.getContext("2d") as CanvasRenderingContext2D;
var dinoImage = new Image();
var cactusImage = new Image();

dinoImage.src = "./dino.png";
cactusImage.src = "./cactus.png";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

type Ready = {
  dino: boolean;
  cactus: boolean;
};

var imageReady: Ready = {
  dino: false,
  cactus: false,
};

type Player = {
  width: number;
  height: number;
  positionY?: number;
  positionX?: number;
  isJumping?: boolean;
};

type Cactus = {
  width: number;
  height: number;
  positionX: number;
};

var GROUND_HEIGHT: number = 100;
var GRAVITY: number = 0;
var GRAVITATIONAL_ACCELERATION = 0;
var SPEED: number = 6;
var GAME_OVER: boolean = false;
class Dino implements Player {
  public width: number;
  public height: number;
  public positionY: number;
  public positionX: number;
  public isJumping: boolean = false;
  constructor(player: Player = { height: 100, width: 50 }) {
    Object.assign(this, player);
    this.positionY = canvas.height - GROUND_HEIGHT - this.height;
    this.positionX = 100;
  }
  public jump() {
    GRAVITY = -25;
    GRAVITATIONAL_ACCELERATION = 1;
  }
}

var DINO: Dino = new Dino();
var CACTUSES: Array<Cactus> = new Array(3).fill(null).map((_, i) => {
  return {
    height: 100,
    width: 20,
    positionX: canvas.width + randomIntBetween(200, 1000) * (i + 1),
  };
});

let start: number = window.requestAnimationFrame(() => game());

window.onkeydown = (e: KeyboardEvent) => {
  if (DINO.isJumping) return;
  if (e.key === " ") {
    DINO.isJumping = true;
    DINO.jump();
  }
};

function game(): void {
  if (GAME_OVER) {
    insertText();
    return window.cancelAnimationFrame(start);
  }
  clearCanvas();
  drawGround();
  drawPlayer();
  drawCactus();
  start = window.requestAnimationFrame(() => game());
}

function insertText(
  text: string = "Game Over!",
  x: number = canvas.width / 2,
  y: number = canvas.height / 2,
  options: { fontSize: number; fontFamily: string; fontColor: string } = {
    fontSize: 50,
    fontFamily: "Arial",
    fontColor: "white",
  },
): TextMetrics {
  context.save();
  context.fillStyle = options.fontColor;
  context.font = String(options.fontSize).concat("px", " ", options.fontFamily);
  let measureText = context.measureText(text);
  context.beginPath();
  context.fillText(
    text,
    x - measureText.width / 2,
    y + measureText.actualBoundingBoxAscent,
  );
  context.closePath();
  context.restore();
  return measureText;
}

function drawCactus(): void {
  CACTUSES.forEach((cactus: Cactus) => {
    cactus.positionX = cactus.positionX <= 0
      ? cactus.positionX = canvas.width + randomIntBetween(0, 1000)
      : cactus.positionX - SPEED;
    context.fillStyle = "white";
    context.beginPath();
    context.fillRect(
      cactus.positionX,
      canvas.height - GROUND_HEIGHT - cactus.height,
      cactus.width,
      cactus.height,
    );
    context.fill();
    context.closePath();

    let dinoAteCactus = DINO.positionX + DINO.width >= cactus.positionX &&
      DINO.positionX + DINO.width < cactus.positionX + cactus.width &&
      DINO.positionY + DINO.height >=
        canvas.height - GROUND_HEIGHT - cactus.height;
    let dinoSteppedOnCactus = DINO.positionY + DINO.height >=
        canvas.height - GROUND_HEIGHT - cactus.height &&
      DINO.positionX + DINO.width >= cactus.positionX &&
      DINO.positionX <= cactus.positionX + cactus.width;
    if (dinoAteCactus || dinoSteppedOnCactus) {
      GAME_OVER = true;
    }
  });
}

function drawPlayer(): void {
  if (DINO.isJumping) {
    GRAVITATIONAL_ACCELERATION += .03;
  }
  GRAVITY += GRAVITATIONAL_ACCELERATION;
  DINO.positionY = Math.min(
    DINO.positionY + GRAVITY,
    canvas.height - GROUND_HEIGHT - DINO.height,
  );
  let denoOnGround: boolean =
    DINO.positionY + DINO.height >= canvas.height - GROUND_HEIGHT;
  if (denoOnGround) {
    GRAVITY = 0;
    GRAVITATIONAL_ACCELERATION = 0;
    DINO.isJumping = false;
  }
  context.save();
  context.fillStyle = "white";
  context.beginPath();
  context.rect(DINO.positionX, DINO.positionY, DINO.width, DINO.height);
  context.closePath();
  context.fill();
  context.restore();
}

function drawGround(): void {
  context.save();
  context.strokeStyle = "white";
  context.beginPath();
  context.moveTo(0, canvas.height - GROUND_HEIGHT);
  context.lineTo(canvas.width, canvas.height - GROUND_HEIGHT);
  context.stroke();
  context.closePath();
  context.restore();
}
function clearCanvas(): void {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function randomIntBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}
