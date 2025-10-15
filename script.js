const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2")
const ball = document.getElementById("ball");
const score = document.getElementById("score");
const timer = document.getElementById("timer")
let time = 0;
const goal1 = document.getElementById("goal1")
const goal2 = document.getElementById("goal2")

let x = 725;
let y = 350;
let vx = 7;
let vy = 7;
let homeScore = 0;
let awayScore = 0;

let player1x = 15;
let player1y = 350;
let player2x = 1400;
let player2y = 350;

const playerSize = 50;
const ballSize = 35;
const goalwidth = 5;
const goalheight = 100;
const playerSpeed = 7;

let goal1x = 10;
let goal1y = 100;
let goal2x = 1455;
let goal2y = 100;

const keys = {
    w: false,
    a: false,
    s: false,
    d: false,
    i: false,
    j: false,
    k: false,
    l: false
};

function movementBall() {
    x += vx;
    y += vy;

    if (x >= 1455 || x <= 0) {
        vx = -vx;
    }

    if (y >= 665 || y <= 15) {
        vy = -vy;
    }

    ball.style.left = x + 'px';
    ball.style.top = y + 'px';

    detectCollision();
}

function movePlayer1() {
    if (keys.w && player1y > 15) {
        player1y -= playerSpeed;
    }
    if (keys.s && player1y < 635) {
        player1y += playerSpeed;
    }
    if (keys.a && player1x > 15) {
        player1x -= playerSpeed;
    }
    if (keys.d && player1x < 1385) {
        player1x += playerSpeed;
    }

    player1.style.left = player1x + 'px';
    player1.style.top = player1y + 'px';
}

function movePlayer2() {
    if (keys.i && player2y > 15) {
        player2y -= playerSpeed;
    }
    if (keys.k && player2y < 635) {
        player2y += playerSpeed;
    }
    if (keys.j && player2x > 15) {
        player2x -= playerSpeed;
    }
    if (keys.l && player2x < 1385) {
        player2x += playerSpeed;
    }

    player2.style.left = player2x + 'px';
    player2.style.top = player2y + 'px';
}

function setPositionGoal() {
    goal1.style.left = goal1x + 'px';
    goal1.style.top = goal1y + 'px';
    goal2.style.left = goal2x + 'px';
    goal2.style.top = goal2y + 'px'
}

function updateScore(){
    score.innerHTML = "score: " + homeScore + " - " + awayScore
}

function resetBall() {
    x = 725
    y = 350;
    vx = -vx;
    vy = 7;
    ball.style.left = x + 'px';
    ball.style.top = y + 'px';
}

function setTimer() {
    time += 1    
    timer.innerHTML = "Time: " + time; 
}

function detectCollision() {
    const player1Rect = {
        left: player1x,
        right: player1x + playerSize,
        top: player1y,
        bottom: player1y + playerSize
    };

    const player2Rect = {
        left: player2x,
        right: player2x + playerSize,
        top: player2y,
        bottom: player2y + playerSize
    };

    const ballRect = {
        left: x,
        right: x + ballSize,
        top: y,
        bottom: y + ballSize
    };

    const collidesWithPlayer1 = !(
        player1Rect.right < ballRect.left ||
        player1Rect.left > ballRect.right ||
        player1Rect.bottom < ballRect.top ||
        player1Rect.top > ballRect.bottom
    );

    const collidesWithPlayer2 = !(
        player2Rect.right < ballRect.left ||
        player2Rect.left > ballRect.right ||
        player2Rect.bottom < ballRect.top ||
        player2Rect.top > ballRect.bottom
    );

    if (collidesWithPlayer1 || collidesWithPlayer2) {

        vx = -vx;
        vy = -vy;

      
        x += vx;
        y += vy;
    }

    if (x <= 0) {
    awayScore++;
    updateScore();
    resetBall();
}

    if (x + ballSize >= 1450) {
    homeScore++;
    updateScore();
    resetBall();
}
}

function gameLoop() {
    updateScore();
    movePlayer1();
    movePlayer2();
    setPositionGoal();
    requestAnimationFrame(gameLoop);
}

document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    if (keys.hasOwnProperty(key)) {
        keys[key] = true;
    }
});

document.addEventListener("keyup", (event) => {
    const key = event.key.toLowerCase();
    if (keys.hasOwnProperty(key)) {
        keys[key] = false;
    }
});

function setLoop() {
    movementBall()
}

setInterval(setLoop, 10);
requestAnimationFrame(gameLoop);