const player1 = document.getElementById("player1");
const ball = document.getElementById("ball");
let x = 725;
let y = 350;
let vx = 7;
let vy = 7;
let playerx = 0;
let playery = 350;
const playerSpeed = 10;



function movementBall() {
    x += vx;
    y += vy;

    if (x >= 1415 || x<= 15) {
        vx = -vx;
    } 

    if (y >= 665 || y<= 15) {
        vy = -vy;
    } 

    ball.style.left = x + 'px';
    ball.style.top = y + 'px';
}

setInterval(movementBall, 1)

function moveRight() {
    playerx += playerSpeed;
    player1.style.left = playerx + "px";
}

function moveLeft() {
    playerx -= playerSpeed;
    player1.style.left = playerx + "px";
}

function moveDown() {
    playery += playerSpeed;
    player1.style.top = playery + "px";
}

function moveUp() {
    playery -= playerSpeed;
    player1.style.top = playery + "px";
}

document.addEventListener("keydown", (event) => {
    let key = event.key.toLowerCase();
if (key === "d" && playerx < 1395) {
       moveRight() 
}
if (key === "a" && playerx > 25) {
       moveLeft() 
}
if (key === "w" && playery > 35) {
       moveUp() 
}
if (key === "s" && playery < 645) {
       moveDown() 
}
})