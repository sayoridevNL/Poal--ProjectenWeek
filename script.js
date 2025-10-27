// These are all the html elements that are being importet into the javascript as variable
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2")
const ball = document.getElementById("ball");
const score = document.getElementById("score");
const timer = document.getElementById("timer")
const goal1 = document.getElementById("goal1")
const goal2 = document.getElementById("goal2")
const npc1_1 = document.getElementById("npc1_1")
const npc1_2 = document.getElementById("npc1_2")
const npc2_1 = document.getElementById("npc2_1")
const npc2_2 = document.getElementById("npc2_2")

// The X and Y are for the location of the ball 
let x = 750;
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
let player2x = 1375;
let player2y = 350;

// This is for the size of the player 
const playerSize = 50;

//this is for the size of the ball
const ballSize = 35;

// this is for both the height and width of the goal
const goalwidth = 5;
const goalheight = 100;

// this is for the player speed
const playerSpeed = 7;

const npcSize = 50;

// this is for the location  of both goals
let goal1x = 10;
let goal1y = 100;
let goal2x = 1500;
let goal2y = 100;

// this sets the speed for the npc
let npc1_1Speed = 5;
let npc1_2Speed = 5;
let npc2_1Speed = 5;
let npc2_2Speed = 5;

let npc1_1Direction = 1;
let npc1_2Direction = 1;
let npc2_1Direction = 1;
let npc2_2Direction = 1;


//this is for the locations of the npc
let npc1_1x = 300;
let npc1_1y = 200;
let npc1_2x = 300;
let npc1_2y = 500;
let npc2_1x = 1000;
let npc2_1y = 200;
let npc2_2x = 1000;
let npc2_2y = 500;

// this sets the time at 0
let lastTime = 0;
let time = 0;
let gameDuration = 120
let gameActive = true;

// this is for the variable for keys they are false rn because they arent pressed 
const keys = {
    w: false,
    a: false,
    s: false,
    d: false,
    arrowup: false,
    arrowleft: false,
    arrowdown: false,
    arrowright: false
};

//  this function makes the ball move
function movementBall(deltaTime) {
    x += vx * deltaTime;
    y += vy * deltaTime;

    // random bounce for top and bottom walls
    if (y >= 665 || y <= 15) {
        vy = -vy;
        vx += (Math.random() - 0.5) * 2;
    }

    // random bounce for left and right wall (goal check is handled in detectCollision)
    if (x >= 1455 || x <= 0) {
        vx = -vx;
        vy += (Math.random() - 0.5) * 2;
    }

    // limit speed so it doesnt go too crazy
    const maxSpeed = 12;
    const minSpeed = 5;
    const speed = Math.sqrt(vx * vx + vy * vy);
    if (speed > maxSpeed) {
        vx = (vx / speed) * maxSpeed;
        vy = (vy / speed) * maxSpeed;
    } else if (speed < minSpeed) {
        vx = (vx / speed) * minSpeed;
        vy = (vy / speed) * minSpeed;
    }


    ball.style.left = x + 'px';
    ball.style.top = y + 'px';

    detectCollision();
}


// if a key is pressed the player moves 
function movePlayer1(deltaTime) {
    const moveAmount = playerSpeed * deltaTime
    if (keys.w && player1y > 15) {
        player1y -= moveAmount;
    }
    if (keys.s && player1y < 635) {
        player1y += moveAmount;
    }
    if (keys.a && player1x > 15) {
        player1x -= moveAmount;
    }
    if (keys.d && player1x < 690) {
        player1x += moveAmount;
    }

    player1.style.left = player1x + 'px';
    player1.style.top = player1y + 'px';
}

// same as by player 1
function movePlayer2(deltaTime) {
     const moveAmount = playerSpeed * deltaTime
    if (keys.arrowup && player2y > 15) {
        player2y -= moveAmount;
    }
    if (keys.arrowdown && player2y < 635) {
        player2y += moveAmount;
    }
    if (keys.arrowleft && player2x > 760) {
        player2x -= moveAmount;
    }
    if (keys.arrowright && player2x < 1385) {
        player2x += moveAmount;
    }

    player2.style.left = player2x + 'px';
    player2.style.top = player2y + 'px';
}

function npc1_1Move(deltaTime) {
    npc1_1x += npc1_1Speed * deltaTime * npc1_1Direction;

    if (npc1_1x > 550) {
        npc1_1x = 550;
        npc1_1Direction = -1;
    } else if (npc1_1x < 150) {
        npc1_1x = 150;
        npc1_1Direction = 1;
    }

    npc1_1.style.left = npc1_1x + 'px';
}



function npc1_2Move(deltaTime) {
    npc1_2y += npc1_2Speed * deltaTime * npc1_2Direction;

    if (npc1_2y > 600) {
        npc1_2y = 600;
        npc1_2Direction = -1;
    } else if (npc1_2y < 300) {
        npc1_2y = 300;
        npc1_2Direction = 1;
    }

    npc1_2.style.top = npc1_2y + 'px';
}



function npc2_1Move(deltaTime) {
    npc2_1y += npc2_1Speed * deltaTime * npc2_1Direction;

    if (npc2_1y > 400) {
        npc2_1y = 400;
        npc2_1Direction = -1;
    } else if (npc2_1y < 100) {
        npc2_1y = 100;
        npc2_1Direction = 1;
    }

    npc2_1.style.top = npc2_1y + 'px';
}



function npc2_2Move(deltaTime) {
    npc2_2x += npc2_2Speed * deltaTime * npc2_2Direction;

    if (npc2_2x > 1250) {
        npc2_2x = 1250;
        npc2_2Direction = -1;
    } else if (npc2_2x < 850) {
        npc2_2x = 850;
        npc2_2Direction = 1;
    }

    npc2_2.style.left = npc2_2x + 'px';
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
    x = 725;
    y = 350;
    vx = (Math.random() < 0.5 ? -1 : 1) * 7;
    vy = (Math.random() - 0.5) * 4;
    ball.style.left = x + 'px';
    ball.style.top = y + 'px';
}

function setTimer() {
    if (!gameActive) return;

    time +=1;
    timer.innerHTML = "Time: " + time;

    if (time >= gameDuration) {
        endGame()
    }
}

function endGame() {
    gameActive = false

    vx = 0;
    vy = 0

    npc1_1Direction = 0;
    npc1_2Direction = 0;
    npc2_1Direction = 0;
    npc2_2Direction = 0;
    

    let resultText = "";
    if (homeScore > awayScore) {
        resultText = "Home Team Wins"
    } else if (homeScore < awayScore) {
        resultText = "Away Team Wins"
    }

    const popup = document.getElementById("gameOverPopup")
    const popupScore = document.getElementById("popupScore")
    popupScore.innerHTML = `Final Score: ${homeScore} - ${awayScore}<br>${resultText}`;
    popup.style.display = "flex"
}

document.getElementById("replayBtn").addEventListener("click", () => {
    homeScore = 0;
    awayScore = 0;
    time = 0;
    gameActive = true;

    npc1_1Direction = 1;
    npc1_2Direction = 1;
    npc2_1Direction = 1;
    npc2_2Direction = 1;

    updateScore();
    resetBall();

    document.getElementById("gameOverPopup").style.display = "none";
})


// here we check if collision between ball and player happens
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

    const Npc1_1Rect = {
        left: npc1_1x,
        right: npc1_1x + npcSize,
        top: npc1_1y,
        bottom: npc1_1y + npcSize
    };

    const Npc1_2Rect = {
        left: npc1_2x,
        right: npc1_2x + npcSize,
        top: npc1_2y,
        bottom: npc1_2y + npcSize
    };

    const Npc2_1Rect = {
        left: npc2_1x,
        right: npc2_1x + npcSize,
        top: npc2_1y,
        bottom: npc2_1y + npcSize
    };

    const Npc2_2Rect = {
        left: npc2_2x,
        right: npc2_2x + npcSize,
        top: npc2_2y,
        bottom: npc2_2y + npcSize
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

    const collidesWithNpc1_1 = !(
        Npc1_1Rect.right < ballRect.left ||
        Npc1_1Rect.left > ballRect.right ||
        Npc1_1Rect.bottom < ballRect.top ||
        Npc1_1Rect.top > ballRect.bottom
    );

    const collidesWithNpc1_2 = !(
        Npc1_2Rect.right < ballRect.left ||
        Npc1_2Rect.left > ballRect.right ||
        Npc1_2Rect.bottom < ballRect.top ||
        Npc1_2Rect.top > ballRect.bottom
    );

    const collidesWithNpc2_1 = !(
        Npc2_1Rect.right < ballRect.left ||
        Npc2_1Rect.left > ballRect.right ||
        Npc2_1Rect.bottom < ballRect.top ||
        Npc2_1Rect.top > ballRect.bottom
    );

    const collidesWithNpc2_2 = !(
        Npc2_2Rect.right < ballRect.left ||
        Npc2_2Rect.left > ballRect.right ||
        Npc2_2Rect.bottom < ballRect.top ||
        Npc2_2Rect.top > ballRect.bottom
    );

    if (collidesWithPlayer1 || collidesWithPlayer2) {
        const player = collidesWithPlayer1 ? player1Rect : player2Rect;

        // calculate the ball center
        const ballCenterX = x + ballSize / 2;
        const ballCenterY = y + ballSize / 2;

        // calculate the player center
        const playerCenterX = (player.left + player.right) / 2;
        const playerCenterY = (player.top + player.bottom) / 2;

        // calculate the player position relative to the ball position (-1 to 1)
        const hitX = (ballCenterX - playerCenterX) / (playerSize / 2);
        const hitY = (ballCenterY - playerCenterY) / (playerSize / 2);

        // reverse horizontal direction
        vx = -vx;

        // add variation based on where the ball hit the player
        vy += hitY * 3;
        vx += hitX * 1.5;

        // add random variation to prevent repetitive patterns
        vx += (Math.random() - 0.5) * 2;
        vy += (Math.random() - 0.5) * 2;

        // move ball slightly to prevent it from tweaking out
        x += vx * 2;
        y += vy * 2;
    }

    if (collidesWithNpc1_1 || collidesWithNpc1_2 || collidesWithNpc2_1 || collidesWithNpc2_2) {
    // Find which NPC was hit
    let npc = null;

    if (collidesWithNpc1_1) npc = Npc1_1Rect;
    else if (collidesWithNpc1_2) npc = Npc1_2Rect;
    else if (collidesWithNpc2_1) npc = Npc2_1Rect;
    else if (collidesWithNpc2_2) npc = Npc2_2Rect;

    // Calculate the centers
    const ballCenterX = x + ballSize / 2;
    const ballCenterY = y + ballSize / 2;

    const npcCenterX = (npc.left + npc.right) / 2;
    const npcCenterY = (npc.top + npc.bottom) / 2;

    // Determine impact direction
    const hitX = (ballCenterX - npcCenterX) / (npcSize / 2);
    const hitY = (ballCenterY - npcCenterY) / (npcSize / 2);

    // Reverse ball direction and add variation
    vx = -vx;
    vy += hitY * 3;
    vx += hitX * 1.5;

    // Add randomness to make collisions less predictable
    vx += (Math.random() - 0.5) * 2;
    vy += (Math.random() - 0.5) * 2;

    // Nudge the ball slightly to avoid overlap
    x += vx * 2;
    y += vy * 2;
}

    // check the goal scoring
    if (x <= 0) {
        awayScore++;
        updateScore();
        resetBall();
    }

    if (x + ballSize >= 1455) {
        homeScore++;
        updateScore();
        resetBall();
    }
}


// here we combine all functions into 1 so it goes into the loop later 
function gameLoop(timestamp) {
    if (!lastTime) lastTime = timestamp;
    const deltaTime = (timestamp - lastTime) / 8.33;
    lastTime = timestamp

    updateScore();
    movePlayer1(deltaTime);
    movePlayer2(deltaTime);
    setPositionGoal();
    npc1_1Move(deltaTime)
    npc1_2Move(deltaTime)
    npc2_1Move(deltaTime)
    npc2_2Move(deltaTime)
    movementBall(deltaTime)


    requestAnimationFrame(gameLoop);
}


// here we check if the key is pressed or not
document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();  // <-- Use lowercase
    if (keys.hasOwnProperty(key)) {
        keys[key] = true;
    }
});

document.addEventListener("keyup", (event) => {
    const key = event.key.toLowerCase();  // <-- Use lowercase
    if (keys.hasOwnProperty(key)) {
        keys[key] = false;
    }
});



//here we start the loop and it calls the functions every 10ms
requestAnimationFrame(gameLoop);
setInterval(setTimer, 1000)