// These are all the html elements that are being importet into the javascript as variable
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2")
const npc1_1 = document.getElementById("npc1_1")
const npc1_2 = document.getElementById("npc1_2")
const npc2_1 = document.getElementById("npc2_1")
const npc2_2 = document.getElementById("npc2_2")
const ball = document.getElementById("ball");
const score = document.getElementById("score");
const timer = document.getElementById("timer")
const goal1 = document.getElementById("goal1")
const goal2 = document.getElementById("goal2")

// The X and Y are for the location of the ball 
let x = 725;
let y = 350;
// This is the speed for both x and y 
let vx = 7;
let vy = 7;

// This is to set the score it can change when a goal is scored
let homeScore = 0;
let awayScore = 0;

//This is for the location of the players
let player1x = 15;
let player1y = 350;
let player2x = 1400;
let player2y = 350;

//this is for the locations of the npc
let npc1_1x = 300;
let npc1_1y = 200;
let npc1_2x = 300;
let npc1_2y = 500;
let npc2_1x = 1000;
let npc2_1y = 200;
let npc2_2x = 1000;
let npc2_2y = 500;

let npc1_1Targetx = 0;
let npc1_1Targety = 0;
let npcMoving = false;

// this sets the speed for the npc
const npcSpeed = 7;

// This is for the size of the player 
const playerSize = 50;

//this is for the size of the ball
const ballSize = 35;

// this is for both the height and width of the goal
const goalwidth = 5;
const goalheight = 100;

// this is for the player speed
const playerSpeed = 7;

// this is for the location  of both goals
let goal1x = 10;
let goal1y = 100;
let goal2x = 1455;
let goal2y = 100;

// this sets the time at 0
let time = 0;

// this is for the variable for keys they are false rn because they arent pressed 
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

//  this function makes the ball move
function movementBall() {

    //it moves because the location increases due to the counting up of the velocity
    x += vx;
    y += vy;

    // this is so the ball dont go outside the playing field
    if (x >= 1455 || x <= 0) {
        vx = -vx;
    }

    if (y >= 665 || y <= 15) {
        vy = -vy;
    }

    // here we turn the variable into pixels so the computer knows when to move
    ball.style.left = x + 'px';
    ball.style.top = y + 'px';

    detectCollision();
}

// if a key is pressed the player moves 
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
    if (keys.d && player1x < 670) {
        player1x += playerSpeed;
    }

    player1.style.left = player1x + 'px';
    player1.style.top = player1y + 'px';
}

// same as by player 1
function movePlayer2() {
    if (keys.i && player2y > 15) {
        player2y -= playerSpeed;
    }
    if (keys.k && player2y < 634) {
        player2y += playerSpeed;
    }
    if (keys.j && player2x > 730) {
        player2x -= playerSpeed;
    }
    if (keys.l && player2x < 1385) {
        player2x += playerSpeed;
    }

    player2.style.left = player2x + 'px';
    player2.style.top = player2y + 'px';
}

// here we set the location of the goal
function setPositionGoal() {
    goal1.style.left = goal1x + 'px';
    goal1.style.top = goal1y + 'px';
    goal2.style.left = goal2x + 'px';
    goal2.style.top = goal2y + 'px'
}

// here we update the score
function updateScore(){
    score.innerHTML = "score: " + homeScore + " - " + awayScore
}

// we reset the ball to its location this function is only called after a goal
function resetBall() {
    x = 725
    y = 350;
    vx = -vx;
    vy = 7;
    ball.style.left = x + 'px';
    ball.style.top = y + 'px';
}

// here we have the timer and this function is in a loop so it counts up
function setTimer() {
    time += 1    
    timer.innerHTML = "Time: " + time; 
}

// here we check if collision between ball and player happens
function detectCollision() {

    // we use rect because it is shorten for rectangle 
    // with the left right top bottom we get the location of thoses edges 
    const player1Rect = {
        left: player1x,
        right: player1x + playerSize,
        top: player1y,
        bottom: player1y + playerSize
    };

    //same here
    const player2Rect = {
        left: player2x,
        right: player2x + playerSize,
        top: player2y,
        bottom: player2y + playerSize
    };

    //same here
    const ballRect = {
        left: x,
        right: x + ballSize,
        top: y,
        bottom: y + ballSize
    };

    // here the computer checks in the loop if the ball and player 1 have touched each other
    // the reason the ! is here is because it reverses it
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


    // if the player and ball collide it will change directions 
    if (collidesWithPlayer1 || collidesWithPlayer2) {

        vx = -vx;
        vy = -vy;

      
        x += vx;
        y += vy;
    }

    // if the ball goes below that the score is updated and the away team gets a point
    if (x <= 0) {
    awayScore++;
    updateScore();
    resetBall();
}

// if the ball goes above that the score is updated and the away team gets a point
    if (x + ballSize >= 1450) {
    homeScore++;
    updateScore();
    resetBall();
}
}

// here we combine all functions into 1 so it goes into the loop later 
function gameLoop() {
    updateScore();
    movePlayer1();
    movePlayer2();
    npc1_1Move()
    setPositionGoal();
    requestAnimationFrame(gameLoop);
}


// here we check if the key is pressed or not
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

//here we start the loop and it calls the functions every 10ms
setInterval(movementBall, 10);
requestAnimationFrame(gameLoop);