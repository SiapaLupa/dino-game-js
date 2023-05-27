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
var GRAVITATIONAL_ACCELERATION = 0;
var SPEED = 6;
var GAME_OVER = false;
var SCORE = 0;
var HIGHSCORE = 0;
class Dino {
    constructor(player = { height: 100, width: 50 }) {
        this.isJumping = false;
        Object.assign(this, player);
        this.positionY = canvas.height - GROUND_HEIGHT - this.height;
        this.positionX = 100;
    }
    jump() {
        GRAVITY = -25;
        GRAVITATIONAL_ACCELERATION = 1;
    }
}
var DINO = new Dino();
var CACTUSES = new Array(3).fill(null).map((_, i) => {
    return {
        height: 100,
        width: 20,
        positionX: canvas.width + randomIntBetween(200, 1000) * (i + 1),
    };
});
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
    if (GAME_OVER) {
        insertText("Game Over");
        return window.cancelAnimationFrame(start);
    }
    clearCanvas();
    drawScore();
    drawGround();
    drawPlayer();
    drawCactus();
    start = window.requestAnimationFrame(() => game());
}
function insertText(text, x = canvas.width / 2, y = canvas.height / 2, options = {
    fontSize: 50,
    fontFamily: "Arial",
    fontColor: "white",
}) {
    context.save();
    context.fillStyle = options.fontColor;
    context.font = String(options.fontSize).concat("px", " ", options.fontFamily);
    let measureText = context.measureText(text);
    context.beginPath();
    context.fillText(text, x - measureText.width / 2, y + measureText.actualBoundingBoxAscent);
    context.closePath();
    context.restore();
    return measureText;
}
function drawCactus() {
    CACTUSES.forEach((cactus) => {
        cactus.positionX = cactus.positionX <= 0
            ? cactus.positionX = canvas.width + randomIntBetween(0, 1000)
            : cactus.positionX - SPEED;
        context.fillStyle = "white";
        context.beginPath();
        context.fillRect(cactus.positionX, canvas.height - GROUND_HEIGHT - cactus.height, cactus.width, cactus.height);
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
function drawPlayer() {
    if (DINO.isJumping) {
        GRAVITATIONAL_ACCELERATION += .03;
    }
    GRAVITY += GRAVITATIONAL_ACCELERATION;
    DINO.positionY = Math.min(DINO.positionY + GRAVITY, canvas.height - GROUND_HEIGHT - DINO.height);
    let denoOnGround = DINO.positionY + DINO.height >= canvas.height - GROUND_HEIGHT;
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
function drawScore(increment = 1) {
    SCORE += increment;
    let actualScore = Math.round(SCORE / 10);
    SCORE > HIGHSCORE && (HIGHSCORE = actualScore);
    let measureText = insertText("Score : " + actualScore, undefined, 0);
    insertText("High Score : " + HIGHSCORE, undefined, measureText.actualBoundingBoxAscent);
}
function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}
function randomIntBetween(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
