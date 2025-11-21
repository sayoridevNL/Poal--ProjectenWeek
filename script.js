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
const startMenu = document.getElementById("startMenu")
const startBtn = document.getElementById("startBtn")
const backToMenuBtn = document.getElementById("backToMenuBtn")
const bgMusic = document.getElementById("bgMusic")
const countrySelectPopup = document.getElementById('countrySelectPopup');
const countryStartBtn = document.getElementById('countryStartBtn');
const randomizeBtn = document.getElementById('randomize');
const p1Container = document.getElementById('p1-buttons');
const p2Container = document.getElementById('p2-buttons');
const summary = document.getElementById('summary');
const player1Img = player1.querySelector('img');
const player2Img = player2.querySelector('img');
const powerText = document.getElementById("powerText")
const Bong = document.getElementById("Bong")

const fieldWidth = 1450;
const fieldHeight = 700;

let teams = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Aruba",
  "Antigua and Barbuda", "Argentina", "Armenia", "Australia",
  "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh",
  "Barbados", "Belarus", "Belgium", "Belize", "Benin",
  "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bonaire",
  "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
  "Cape Verde", "Cambodia", "Cameroon", "Canada",
  "Central African Republic", "Chad", "Chile", "China", "Curaçao",
  "Colombia", "Comoros", "Republic of the Congo",
  "Costa Rica", "Croatia", "Cuba", "Cyprus",
  "Czech Republic", "Democratic Republic of the Congo",
  "Denmark", "Djibouti", "Dominica", "Dominican Republic",
  "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
  "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji",
  "Finland", "France", "Gabon", "Gambia", "Georgia",
  "Germany", "Ghana", "Greece", "Grenada", "Guatemala",
  "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
  "Honduras", "Hungary", "Iceland", "India", "Indonesia",
  "Iran", "Iraq", "Ireland", "Israel", "Italy",
  "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
  "Kiribati", "Kuwait", "Kyrgyzstan", "Laos",
  "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya",
  "Liechtenstein", "Lithuania", "Luxembourg", "logo poal",
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali",
  "Malta", "Marshall Islands", "Mauritania", "Mauritius",
  "Mexico", "Micronesia", "Moldova", "Monaco",
  "Mongolia", "Montenegro", "Morocco", "Mozambique",
  "Myanmar", "Namibia", "Nauru", "Nepal",
  "Netherlands", "New Zealand", "Nicaragua", "Niger",
  "Nigeria", "North Korea", "North Macedonia", "Norway",
  "Oman", "Pakistan", "Palau", "Panama",
  "Papua New Guinea", "Paraguay", "Peru", "Philippines",
  "Poland", "Portugal", "Qatar", "Romania", "Russia",
  "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
  "Saint Vincent and the Grenadines", "Samoa", "Saba",
  "San Marino", "São Tomé and Príncipe", "Saudi Arabia",
  "Senegal", "Serbia", "Seychelles",
  "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
  "Solomon Islands", "Somalia", "South Africa",
  "South Korea", "South Sudan", "Spain", "Sri Lanka",
  "Sudan", "Suriname", "Sweden", "Switzerland", "Sint Eustatius", "Sint Maarten",
  "Syria", "Taiwan", "Tajikistan", "Tanzania",
  "Thailand", "East Timor", "Togo", "Tonga",
  "Trinidad and Tobago", "Tunisia", "Turkey",
  "Turkmenistan", "Tuvalu", "Uganda", "Ukraine",
  "United Arab Emirates", "United Kingdom",
  "United States", "Uruguay", "Uzbekistan", "Vanuatu",
  "Vatican City", "Venezuela", "Vietnam", "Yemen",
  "Zambia", "Zimbabwe"
];


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
let playerSpeed = 7;

const npcSize = 50;

// this is for the location  of both goals
const goalWidth = 10;
const goalHeight = 500;

let goal1x = 0; // left goal matches CSS left: 4px;
let goal1y = 100;

let goal2x = fieldWidth - goalWidth - 8; // 1450 - 10 - 4 = 1436
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
let gameActive = false;
let gamePaused = true;
let gameLoopRunning = false;

const powerUp = document.getElementById("powerup1")
const powerUpSize = 35;
let powerUpActive = false;
let powerUpX = 0;
let powerUpY = 0;
let powerUpType = 0;

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



    startBtn.addEventListener("click", () => {
    startMenu.style.display = "none";
    countrySelectPopup.style.display = "flex";

    bgMusic.volume = 0.5;
    bgMusic.loop = true;
    bgMusic.play();

    
});

// Wheel-based country selectors for Player 1 and Player 2
const wheelP1 = document.getElementById('wheelP1');
const wheelP2 = document.getElementById('wheelP2');
let indexP1 = 0;
let indexP2 = 0;
const wheelP1Up = document.getElementById('wheelP1Up');
const wheelP1Down = document.getElementById('wheelP1Down');
const wheelP2Up = document.getElementById('wheelP2Up');
const wheelP2Down = document.getElementById('wheelP2Down');

function buildWheels() {
    // clear any existing
    if (wheelP1) wheelP1.innerHTML = '';
    if (wheelP2) wheelP2.innerHTML = '';

    [wheelP1, wheelP2].forEach(wheel => {
        if (!wheel) return;
        teams.forEach(team => {
            const div = document.createElement('div');
            div.className = 'wheel-item';
            div.innerHTML = `\n        <img src="images/${team}.webp" alt="${team}">\n        <p>${team}</p>\n      `;
            wheel.appendChild(div);
        });
    });
}

function updateWheel(wheelEl, index) {
    if (!wheelEl) return;
    const offset = -index * 180; // matches CSS item height
    wheelEl.style.transform = `translateY(${offset}px)`;
    wheelEl.querySelectorAll('.wheel-item').forEach((item, i) => {
        item.classList.toggle('selected', i === index);
    });
}

function updateSummaryFromWheels() {
    summary.textContent = `${teams[indexP1]} vs ${teams[indexP2]}`;
}

function moveWheel(player, dir) {
    if (player === 1) {
        indexP1 = (indexP1 + dir + teams.length) % teams.length;
        updateWheel(wheelP1, indexP1);
    } else {
        indexP2 = (indexP2 + dir + teams.length) % teams.length;
        updateWheel(wheelP2, indexP2);
    }
    updateSummaryFromWheels();
}

function attachWheelInteraction() {
    if (wheelP1) {
        wheelP1.querySelectorAll('.wheel-item').forEach((item, i) => {
            item.addEventListener('click', () => {
                indexP1 = i;
                updateWheel(wheelP1, indexP1);
                updateSummaryFromWheels();
            });
        });
    }

    if (wheelP2) {
        wheelP2.querySelectorAll('.wheel-item').forEach((item, i) => {
            item.addEventListener('click', () => {
                indexP2 = i;
                updateWheel(wheelP2, indexP2);
                updateSummaryFromWheels();
            });
        });
    }

    // mouse wheel support per container
    document.querySelectorAll('.wheel-container').forEach(container => {
        container.addEventListener('wheel', e => {
            e.preventDefault();
            const wheelEl = container.querySelector('.wheel');
            const dir = e.deltaY > 0 ? 1 : -1;
            if (!wheelEl) return;
            if (wheelEl.id === 'wheelP1') moveWheel(1, dir);
            else if (wheelEl.id === 'wheelP2') moveWheel(2, dir);
        });
    });
}

// Randomize both wheels
randomizeBtn.addEventListener('click', () => {
    indexP1 = Math.floor(Math.random() * teams.length);
    indexP2 = Math.floor(Math.random() * teams.length);
    updateWheel(wheelP1, indexP1);
    updateWheel(wheelP2, indexP2);
    updateSummaryFromWheels();
});

// Up/Down button handlers
if (wheelP1Up) wheelP1Up.addEventListener('click', () => moveWheel(1, -1));
if (wheelP1Down) wheelP1Down.addEventListener('click', () => moveWheel(1, 1));
if (wheelP2Up) wheelP2Up.addEventListener('click', () => moveWheel(2, -1));
if (wheelP2Down) wheelP2Down.addEventListener('click', () => moveWheel(2, 1));

// Start game after wheel selection
countryStartBtn.addEventListener('click', () => {
    // both indices always valid, but keep a simple check
    if (indexP1 == null || indexP2 == null) {
        alert('Kies eerst een land voor beide spelers of klik Willekeurig.');
        return;
    }

    // Update player flags
    player1Img.src = `images/${teams[indexP1]}.webp`;
    player2Img.src = `images/${teams[indexP2]}.webp`;

    // Hide the country selection popup (we now use a popup)
    if (countrySelectPopup) countrySelectPopup.style.display = 'none';

    npc1_1Direction = 1;
    npc1_2Direction = 1;
    npc2_1Direction = 1;
    npc2_2Direction = 1;

    // Start game
    gamePaused = false;
    gameActive = true;
    if (!gameLoopRunning) gameLoopRunning = true;
    requestAnimationFrame(gameLoop);
});

// Build wheels and initialize
buildWheels();
updateWheel(wheelP1, indexP1);
updateWheel(wheelP2, indexP2);
attachWheelInteraction();
updateSummaryFromWheels();
// ensure popup hidden on load
if (countrySelectPopup) countrySelectPopup.style.display = 'none';


//  this function makes the ball move
function movementBall(deltaTime) {
    x += vx * deltaTime;
    y += vy * deltaTime;

    // bounce for top and bottom walls
    if (y <= 0) {
        y = 0; // clamp inside
        vy = Math.abs(vy); 
        Bong.play()
    } else if (y + ballSize >= fieldHeight) {
        y = fieldHeight - ballSize;
        vy = -Math.abs(vy);
        Bong.play()
    }

    // bounce for left and right walls
    if (x <= 0) {
        x = 0;
        vx = Math.abs(vx); 
        Bong.play()
    } else if (x + ballSize >= fieldWidth) {
        x = fieldWidth - ballSize;
        vx = -Math.abs(vx); 
        Bong.play()
    }

    // add small random variation to avoid stuck trajectories
    if (Math.random() < 0.05) {
        vx += (Math.random() - 0.5) * 0.5;
        vy += (Math.random() - 0.5) * 0.5;
    }

    // limit speed
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

    // update visual position
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
    if (keys.d && player1x < 665) {
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
    if (keys.arrowleft && player2x > 740) {
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

function spawnPowerup() {
    if (!gameActive) return;

    powerUpType = Math.floor(Math.random() * 5) + 1;

    powerUpX = Math.random() *  (fieldWidth - powerUpSize);
    powerUpY = Math.random() *  (fieldHeight - powerUpSize);

    powerUp.style.left = powerUpX + "px"
    powerUp.style.top = powerUpY + "px"
    powerUp.style.display = "block"
    powerUpActive = true

    setTimeout(() => {
        if (powerUpActive) {
            powerUp.style.display = "none";
            powerUpActive = false;
        }
    }, 5000)
}

function applyPowerup(player, type) {
    switch (type) {
        case 1:
            playerSpeed *= 2;
            powerText.innerHTML = "The Player Speed is x2 for 10 seconds"
            setTimeout(() => {
                powerText.innerHTML = " "
            }, 3000)
            setTimeout(() => {
                playerSpeed /= 2
            }, 10000)

            break;
        
        case 2:
            npc1_1Speed *= 2;
            npc1_2Speed *= 2;
            npc2_1Speed *= 2;
            npc2_2Speed *= 2;
            powerText.innerHTML = "The NPC Speed is x2 for 10 seconds"
            setTimeout(() => {
                powerText.innerHTML = " "
            }, 3000)
            setTimeout(() => {
                npc1_1Speed /= 2;
                npc1_2Speed /= 2;
                npc2_1Speed /= 2;
                npc2_2Speed /= 2;
            }, 10000)
            break;

        case 3:
            playerSpeed *= 2;
            powerText.innerHTML = "The Player Speed is x2 for 10 seconds"
            setTimeout(() => {
                powerText.innerHTML = " "
            }, 3000)
            setTimeout(() => {
                playerSpeed /= 2
            }, 10000)

            break;

        case 4: 
            npc1_1Speed = 0;
            npc1_2Speed = 0;
            npc2_1Speed = 0;
            npc2_2Speed = 0;
            powerText.innerHTML = "The NPC are frozen for 10 seconds"
            setTimeout(() => {
                powerText.innerHTML = " "
            }, 3000)
            setTimeout(() => {
                npc1_1Speed = 5;
                npc1_2Speed = 5;
                npc2_1Speed = 5;
                npc2_2Speed = 5;
            }, 10000);
            break;

        case 5: 
        const originalMovePlayer1 = movePlayer1;
        const originalMovePlayer2 = movePlayer2;

        movePlayer1 = function(deltaTime) {
            const moveAmount = playerSpeed * deltaTime;
            if (keys.w && player1y < 635) player1y += moveAmount;
            if (keys.s && player1y > 15) player1y -= moveAmount;
            if (keys.a && player1x < 665) player1x += moveAmount;
            if (keys.d && player1x > 15) player1x -= moveAmount;
            player1.style.left = player1x + 'px';
            player1.style.top = player1y + 'px';
        };

        movePlayer2 = function(deltaTime) {
            const moveAmount = playerSpeed * deltaTime;
            if (keys.arrowup && player2y < 635) player2y += moveAmount;
            if (keys.arrowdown && player2y > 15) player2y -= moveAmount;
            if (keys.arrowleft && player2x < 1385) player2x += moveAmount;
            if (keys.arrowright && player2x > 740) player2x -= moveAmount;
            player2.style.left = player2x + 'px';
            player2.style.top = player2y + 'px';
        };

        powerText.innerHTML = "The Controlls are reversed for 10 seconds"

        setTimeout(() => {
                powerText.innerHTML = " "
            }, 3000)

        setTimeout(() => {
            movePlayer1 = originalMovePlayer1;
            movePlayer2 = originalMovePlayer2;
        }, 10000);
        break;
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


replayBtn.addEventListener("click", () => {
  // Hide the game over popup
  gameOverPopup.style.display = "none";

  // Reset scores and timer
  homeScore = 0;
  awayScore = 0;
  time = 0;
  updateScore();

  // Reset ball and player positions
  resetBall();
  player1x = 15;
  player1y = 350;
  player2x = 1375;
  player2y = 350;
  player1.style.left = player1x + "px";
  player1.style.top = player1y + "px";
  player2.style.left = player2x + "px";
  player2.style.top = player2y + "px";

  // Reset NPC movement directions
  npc1_1Direction = 1;
  npc1_2Direction = 1;
  npc2_1Direction = 1;
  npc2_2Direction = 1;

  // Resume game
  gameActive = true;
  gamePaused = false;

  // Restart background music
  bgMusic.currentTime = 0;
  bgMusic.play();

  // Restart game loop
  requestAnimationFrame(gameLoop);
});

backToMenuBtn.addEventListener("click", () => {
  gameOverPopup.style.display = "none";
  startMenu.style.display = "flex";
  gamePaused = true;
  gameActive = false;

  vx = 0;
  vy = 0;
  homeScore = 0;
  awayScore = 0;
  time = 0;
  updateScore();
  resetBall();

  gameLoopRunning = false;
});


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

    const goal1Rect = {
        left: goal1x,
        right: goal1x + goalWidth,
        top: goal1y,
        bottom: goal1y + goalHeight
    };

    const goal2Rect = {
        left: goal2x,
        right: goal2x + goalWidth,
        top: goal2y,
        bottom: goal2y + goalHeight
    };

let powerupRect = null;
if (powerUpActive) {
    powerupRect = {
        left: powerUpX,
        right: powerUpX + powerUpSize,
        top: powerUpY,
        bottom: powerUpY + powerUpSize
    };
}

let hitP1 = false;
let hitP2 = false;
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

    const collidesWithGoal1 = !(
        goal1Rect.right < ballRect.left ||
        goal1Rect.left > ballRect.right ||
        goal1Rect.bottom < ballRect.top ||
        goal1Rect.top > ballRect.bottom
    );

    const collidesWithGoal2 = !(
        goal2Rect.right < ballRect.left ||
        goal2Rect.left > ballRect.right ||
        goal2Rect.bottom < ballRect.top ||
        goal2Rect.top > ballRect.bottom
    );

if (powerupRect) {
    hitP1 = !(
        player1Rect.right < powerupRect.left ||
        player1Rect.left > powerupRect.right ||
        player1Rect.bottom < powerupRect.top ||
        player1Rect.top > powerupRect.bottom
    );

    hitP2 = !(
        player2Rect.right < powerupRect.left ||
        player2Rect.left > powerupRect.right ||
        player2Rect.bottom < powerupRect.top ||
        player2Rect.top > powerupRect.bottom
    );
}

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
        Bong.play()
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
    Bong.play()
}

    // check the goal scoring
    if (collidesWithGoal1) {
        awayScore++;
        updateScore();
        resetBall();
        Bong.play()
    } else if (collidesWithGoal2) {
        homeScore++;
        updateScore();
        resetBall();
        Bong.play()
    }

    if (hitP1 || hitP2) {
        applyPowerup(hitP1 ? 1 : 2, powerUpType);
        powerUp.style.display = "none";
        powerUpActive = false;
    }
    
}


// here we combine all functions into 1 so it goes into the loop later 
function gameLoop(timestamp) {
    if (!gameActive) return;
    
    if (!lastTime) lastTime = timestamp;
    const deltaTime = (timestamp - lastTime) / 10;
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
setPositionGoal();
requestAnimationFrame(gameLoop);
setInterval(setTimer, 1000)
setInterval(spawnPowerup, 20000);
setInterval(detectCollision, 10);