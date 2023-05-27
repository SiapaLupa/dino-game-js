var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");
var dinoImage = new Image();
var cactusImage = new Image();
dinoImage.src = "./dino.png";
cactusImage.src = "./cactus.png";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var imageReady = {
    dino: false,
    cactus: false,
};
var GROUND_HEIGHT = 100;
var GRAVITY = 0;
var GRAVITATIONAL_ACCELERATION = 1;
class Dino {
    constructor(player = { height: 100, width: 50 }) {
        this.isJumping = false;
        Object.assign(this, player);
        this.positionY = canvas.height - GROUND_HEIGHT - this.height;
    }
    jump() {
        GRAVITY = -10;
        setTimeout(() => GRAVITY = 10, 500);
    }
}
var DINO = new Dino();
let start = window.requestAnimationFrame(() => game());
window.onkeydown = (e) => {
    if (DINO.isJumping)
        return;
    if (e.key === " ") {
        DINO.isJumping = true;
        DINO.jump();
    }
};
function game() {
    clearCanvas();
    drawGround();
    drawPlayer();
    window.requestAnimationFrame(() => game());
}
function drawPlayer() {
    DINO.positionY = Math.min(DINO.positionY + GRAVITY, canvas.height - GROUND_HEIGHT - DINO.height);
    if (DINO.positionY + DINO.height >= canvas.height - GROUND_HEIGHT) {
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
function drawGround() {
    context.save();
    context.strokeStyle = "white";
    context.beginPath();
    context.moveTo(0, canvas.height - GROUND_HEIGHT);
    context.lineTo(canvas.width, canvas.height - GROUND_HEIGHT);
    context.stroke();
    context.closePath();
    context.restore();
}
function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}
