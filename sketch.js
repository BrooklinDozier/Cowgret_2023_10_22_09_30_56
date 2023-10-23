const width = 400;
const height = 400;
let CowX = 0; 
let CowY = 0; 
let stage = "intro";
let positionBird = 200;
let speedBird = 3;
let speedforward = 2;
let fliesX = [];
let fliesY = [];
let flySizes = [];
let flySpeeds = [];

function setup() {
  createCanvas(width, height);
  for (let i = 0; i < 15; i++) {
    fliesX.push(width + i * 100);
    fliesY.push(random(100, height - 100));
    flySizes.push(10);
    flySpeeds.push(random(1, 3));
  }
}

function draw() {
  if (stage == "intro") {
    background(173, 216, 230);

    //Text
    textSize(30);
    textAlign(CENTER, CENTER);
    textFont("Georgia");

    text("The Egret and the Cow", width / 2, height / 2);

    textSize(17);
    textAlign(CENTER, CENTER);

    text("The Evolution of their Symbiotic Relationship", width / 2, 230);

    textSize(15);
    textAlign(CENTER, CENTER);

    text("Press the Up Arrow to Begin", width / 2, 270);
    
  } else if (stage == "birdGame") {
    birdGame();
    
 // } else if (stage == "blankPage" && fliesX.length === 0) {
    //Cowgret();
  }
}

function keyPressed() {
  if (keyCode == DOWN_ARROW) {
    stage = "intro";
  } else if (keyCode == UP_ARROW) {
    stage = "birdGame";
  }else if (keyCode == RIGHT_ARROW){
    stage = "blankPage";
  }
}

function birdGame() {
  background(173, 216, 230);

  textSize(14);
  textAlign(CORNER, CORNER);
  textFont("Georgia");

  text("Press the Mouse to make the Egret Fly.", width / 2, 20);

  textSize(14);
  textAlign(CORNER, CORNER);
  textFont("Georgia");

  text("Eat as many flies as you can!", width / 2, 40);

   // Draw the sun
  noStroke();
  fill(255, 255, 0);
  ellipse(350, 50, 60, 60);

  // Distant mountains
  fill(116, 77, 37)
  ellipse(300, height - 100, 250, 150);
  fill(155, 102, 49); 
  ellipse(100, height - 100, 300, 200);
 
  
  // Draw the grass
  fill(0, 128, 0); 
  rect(0, 250, width, height);
  
  //Cow 1
  
  fill(255,255,255);
  ellipse(270, 350, 50, 25)
  

  fill(255,255,255)
  ellipse(250,340,23,25)
  
     //nose
    fill(255, 179, 255);
  noStroke();
  ellipse(240,340,8,13)
  
  //nose hole
  fill(179, 0, 179);
  noStroke();
  ellipse(238,340,5,3)
  
  //eye
  fill(0)
  ellipse(248,337,5,5)
  
  fill(255, 255, 255);
rect(285, 350, 8, 25); 
rect(250, 350, 8, 25); 

  
  // Black splotches
fill(0); 
noStroke(); 
  
// First splotch
ellipse(280, 357, 14, 10);

// Second splotch
ellipse(260, 350, 15, 6);

// Third splotch
ellipse(275, 340, 15, 8);
  
  //ear
  
  fill(0);
  stroke(0)
  strokeWeight(0.2)
arc(255.5, 334, 10, 20, PI, 0, CHORD);
  
  
  //Cow 3
  
  fill(255,255,255);
  noStroke()
  ellipse(50, 320, 30, 15)
  

  fill(255,255,255)
  noStroke()
  ellipse(60,310,19,19)
  
     //nose
    fill(255, 179, 255);
  noStroke();
  ellipse(68,310,7,9)
  
  //nose hole
  fill(179, 0, 179);
  noStroke(0);
  ellipse(70,310,3,3)
  
  //eye
  fill(0)
  ellipse(60,310,5,5)
  
  fill(255, 255, 255);
rect(55, 320, 4, 15); 
rect(40, 320, 4, 15); 

  
  // Black splotches
fill(0); 
noStroke(); 


// Second splotch
ellipse(40, 320, 6, 7);

// Third splotch
ellipse(55, 319, 9, 5);
  
  //ear
  
  fill(0);
  stroke(0)
  strokeWeight(0.2)
arc(55, 305, 5, 10, PI, 0, CHORD);
  
  
  
  
  
 
  

  positionBird += speedBird;
  speedforward -= speedBird;

  // If Bird hits the bottom of the window, it stops
  if (positionBird > height) {
    positionBird = height;
    speedBird = 0;
  }

  // If bird hits the top of the window, it stops
  if (positionBird < 0) {
    positionBird = 0;
    speedBird = 0;
  }

  noStroke();

  // Bird legs
  stroke(0);
  line(115, positionBird + 5, 80, positionBird + 10);
  line(115, positionBird + 1, 80, positionBird + 6);

  // Bird body
  noStroke();
  fill(255); // White bird
  ellipse(130, positionBird, 60, 20);

  // Bird neck
  fill(255); // White neck
  rect(150, positionBird - 20, 10, 20);

  // Bird head
  fill(255); // White head
  ellipse(160, positionBird - 25, 30, 15);

  // Bird beak
  fill(255, 255, 0);
  triangle(
    166,
    positionBird - 31,
    200,
    positionBird - 20,
    166,
    positionBird - 19
  );

  // Bird wing
  fill(255);
  arc(130, positionBird - 1, 25, 60, QUARTER_PI, HALF_PI); 

  //Bird Eye
  fill(0);
  ellipse(165, positionBird - 27, 9, 7);

  // Display random flies
  for (let i = 0; i < fliesX.length; i++) {
    fill(115, 115, 115); 
    ellipse(fliesX[i] - 5, fliesY[i], 10, 9); 
    ellipse(fliesX[i] + 5, fliesY[i], 10, 9); 

    fill(10, 10, 10);
    circle(fliesX[i], fliesY[i], flySizes[i]);
    fliesX[i] -= flySpeeds[i];

    // Check if the bird has eaten a fly
    if (dist(130, positionBird, fliesX[i], fliesY[i]) < 30) {
      removeFly(i);
      i--;
    } else if (fliesX[i] < 0) {
      removeFly(i);
      i--;
    }
  }
  
  // Check if all flies are gone
  if (fliesX.length === 0) {
  Cowgret();
  }
  // Physics
  speedBird += 0.4;
}

function Cowgret(){
    background(68, 204, 0);
    textSize(15);
    textAlign(CENTER, CENTER);
    text("You've Evolved!", width / 2, 50);

    textSize(15);
    textAlign(CENTER, CENTER);
    text("Move your Mouse to Move the Cowgret.", width / 2, 80);
  
  
  let dx = mouseX - CowX;
  let dy = mouseY - CowY;
  
  
  let speed = 0.1;
  
  
  CowX += dx * speed;
  CowY += dy * speed;
  
  // Display the Cow
  
  //nose
    fill(255, 179, 255);
  stroke(0);
  arc(CowX, CowY - 55, 30, 20, PI, 0); 
  
  fill(255, 255, 255);
  stroke(0);
  ellipse(CowX, CowY, 50, 90);
  
  fill(255,255,255);
  stroke(0);
  ellipse(CowX, CowY-40,40,40);
  
    // Cow splotches (spots)
  fill(0); 
  noStroke();
  
  // Draw splotches using ellipse
  ellipse(CowX + 5, CowY - 1, 10, 20);
  ellipse(CowX - 20, CowY - 1, 8, 40);
  ellipse(CowX -2, CowY +36, 7,15);
  ellipse(CowX +3.5, CowY -10, 9,15);
  
  // Cow ear
  fill(255, 255, 255);
  stroke(0);
  arc(CowX - 15, CowY - 35, 10, 20, 0, PI, CHORD); 

  fill(255, 255, 255);
  stroke(0);
  arc(CowX + 15, CowY - 35, 10, 20, 0, PI, CHORD); 
  
  //Inside ear
  fill(255, 179, 255);
  stroke(0);
  arc(CowX - 15, CowY - 35, 5, 10, 0, PI, CHORD); 

  fill(255, 179, 255);
  stroke(0);
  arc(CowX + 15, CowY - 35, 5, 10, 0, PI, CHORD); // Right ear
  
  
    // Cow eyes
  fill(0); 
  noStroke();
  ellipse(CowX - 10, CowY - 44, 10, 10); 
  ellipse(CowX + 10, CowY - 44, 10, 10); 
  
  // White parts in the eyes
  fill(255); 
  ellipse(CowX - 7, CowY - 45, 4, 4); 
  ellipse(CowX + 13, CowY - 45, 4, 4); 
  
    // Left Nostril
  fill(166,63,115); 
  noStroke();
  arc(CowX-7, CowY - 63.5, 6, 6, 0, PI); 
  
  // Right Nostril
  fill(166, 63, 115)
  noStroke();
  arc(CowX + 7, CowY - 63.5, 6, 6, 0, PI);
  
  
   // Draw half-circle wings on both sides
  fill(255, 255, 255);
  stroke(0)
  arc(CowX - 30, CowY - 1, 45, 30, PI, TWO_PI, CHORD); // Left wing
  arc(CowX + 30, CowY - 1, 45, 30, PI, TWO_PI, CHORD); // Right wing

  }
  
function mousePressed() {
  speedBird = -10;
}

function removeFly(index) {
  fliesX.splice(index, 1);
  fliesY.splice(index, 1);
  flySizes.splice(index, 1);
  flySpeeds.splice(index, 1);
}