// Ball that moves around
let ball = {
  xPos: 50,
  yPos: 50,
  height: 30,
  width: 30,
  xSPEED: 4,
  ySPEED: 7
}

let color = {
  r: 255,
  g: 255,
  b: 40
}

let barrior = {
  xPos: 85,
  yPos: 235,
  width: 10,
  heght: 150,
};

let barrior2 = {
  xPos: 400,
  yPos: 550,
  width: 10,
  heght: 150,
};

let barrior3 = {
  xPos: 600,
  yPos: 375,
  width: 150,
  heght: 10,
};

let barrior4 = {
  xPos: 1150,
  yPos: 125,
  width: 10,
  heght: 150,
};

let barrior5= {
  xPos: 1100,
  yPos: 700,
  width: 150,
  heght: 10,
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  d = height -10;
  colorMode(HSB, 255);

}

function draw() {
background('slategray');
// background('#ffffff05');


push();
  BG(ball);
pop();


if (ball.xPos > windowWidth - 25 || ball.xPos < 25) {
  ball.xSPEED = ball.xSPEED * -1.00;
}

if (ball.yPos > windowHeight - 25 || ball.yPos < 25) {
  ball.ySPEED = ball.ySPEED * -1.00;
}

gettingHits(ball, barrior);
gettingHits(ball, barrior2);
gettingHits(ball, barrior3);
gettingHits(ball, barrior4);
gettingHits(ball, barrior5);

ball.xPos += ball.xSPEED;
ball.yPos += ball.ySPEED;

  push();
  
    fill(color.r, color.g, color.b);
    mouseClicked(ball);
    noStroke();

    
    rect(barrior.xPos, barrior.yPos, barrior.width, barrior.heght);
    rect(barrior2.xPos, barrior2.yPos, barrior2.width, barrior2.heght);
    rect(barrior3.xPos, barrior3.yPos, barrior3.width, barrior3.heght);
    rect(barrior4.xPos, barrior4.yPos, barrior4.width, barrior4.heght);
    rect(barrior5.xPos, barrior5.yPos, barrior5.width, barrior5.heght);

  pop();

push();
fill('orange')
var h = 0;
// fill(43, 255, 53)
  rect(ball.xPos, ball.yPos, ball.width, ball.height);
pop();
  return 0;
}

var totalClicks = 0;
function mouseClicked(ball){

push();
  noStroke();
    if(mouseClicked){
      totalClicks++;

        if(mouseButton === LEFT){
          let newBarrior = {
            xPos: random(0, width),
            yPos: random(0, 100),
            width: random(100, 150),
            heght: 10,
          };
          rect(newBarrior.xPos, newBarrior.yPos, newBarrior.width, newBarrior.heght);
          gettingHits(ball, newBarrior);
          colorChange(); 
        }
        else if(mouseButton === RIGHT){
          let newBarrior = {
            xPos: random(0, width),
            yPos: random(height-150, height),
            width: random(100, 150),
            heght: 10,
          };
          rect(newBarrior.xPos, newBarrior.yPos, newBarrior.width, newBarrior.heght);
          gettingHits(ball, newBarrior);
          colorChange(); 
        }
    }
  pop();

}

var d;
var theta = 0;

function BG(ball) {
  var s1 = 10 + (sin(theta + PI/2) *d)/40 + d/20;
  let s2 = 10 + (sin(theta) * d) / 80 + d / 40;
  // var s3 = 10 + (sin(theta + PI) * d) / 8 + d / 4;

    for (let x = 50; x <= width; x += 100) {
      for (let y = 50; y <= height; y += 100) {
          
        let m = map(ball.xPos, 0, width, 100, 225);
        stroke(m, m, m, m, 50);
        strokeWeight(s1, 44);
        point(x, y);
      }
    }

    for (let x = 0; x <= width; x += 100) {
      for (let y = 0; y <= height; y += 100) {
        var m2 = map(ball.yPos, 0, height, 100, 214);
        // stroke(255, 255, 255, 50);
        stroke(m2);
        strokeWeight(s2);
        point(x, y);
      }
    }

  theta += 0.02;
}

function colorChange() {
  color.r = random(150, 220);
  color.g = random(100, 255);
  color.b = random(100, 220);
}

function gettingHits(ball, barrior){
  if (ball.xPos + ball.width + ball.xSPEED>= barrior.xPos
    && ball.xPos + ball.xSPEED < barrior.xPos + barrior.width
    && ball.yPos + ball.height > barrior.yPos
    && ball.yPos < barrior.yPos + barrior.heght
  ) {
    ball.xSPEED = ball.xSPEED * -1.00;
  }

  if (ball.xPos + ball.width >= barrior.xPos
    && ball.xPos < barrior.xPos + barrior.width
    && ball.yPos + ball.height +ball.ySPEED> barrior.yPos
    && ball.yPos + ball.ySPEED < barrior.yPos + barrior.heght
  ) {
    ball.ySPEED = ball.ySPEED * -1.00;
  }
}