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
  isJumping?: boolean;
};
var GROUND_HEIGHT: number = 100;
var GRAVITY: number = 0;
var GRAVITATIONAL_ACCELERATION = 0;
class Dino implements Player {
  public width: number;
  public height: number;
  public positionY: number;
  public isJumping: boolean = false;
  constructor(player: Player = { height: 100, width: 50 }) {
    Object.assign(this, player);
    this.positionY = canvas.height - GROUND_HEIGHT - this.height;
  }
  public jump() {
    GRAVITY = -30;
    GRAVITATIONAL_ACCELERATION = 1;
  }
}

var DINO: Dino = new Dino();

let start = window.requestAnimationFrame(() => game());

window.onkeydown = (e: KeyboardEvent) => {
  if (DINO.isJumping) return;
  if (e.key === " ") {
    DINO.isJumping = true;
    DINO.jump();
  }
};

function game(): void {
  clearCanvas();
  drawGround();
  drawPlayer();
  window.requestAnimationFrame(() => game());
}

function drawPlayer(): void {
  if (DINO.isJumping) {
    GRAVITATIONAL_ACCELERATION+=.03;
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
  context.rect(100, DINO.positionY, DINO.width, DINO.height);
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
