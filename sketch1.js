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
  background(51);
  // angleMode(DEGREES);
}

function draw() {

background(51);
// backgroundDisco();

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
  
    // colorChange();
    fill(color.r, color.g, color.b);
    mouseClicked(ball);

    rect(barrior.xPos, barrior.yPos, barrior.width, barrior.heght);
    rect(barrior2.xPos, barrior2.yPos, barrior2.width, barrior2.heght);
    rect(barrior3.xPos, barrior3.yPos, barrior3.width, barrior3.heght);
    rect(barrior4.xPos, barrior4.yPos, barrior4.width, barrior4.heght);
    rect(barrior5.xPos, barrior5.yPos, barrior5.width, barrior5.heght);

  pop();

  // colorChange();

  rect(ball.xPos, ball.yPos, ball.width, ball.height);

  return 0;
}

var totalClicks = 0;

function mouseClicked(ball){

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

}


// var backX = 35;
// var backY = 25;

// function backgroundDisco(){

//   push();

//     translate(width/2, height/2);
//     rotate(PI/4);
//     rectMode(CENTER);
    
//     noFill();
//     stroke('rgba(255,0,255,0.75)');
//     strokeWeight(2);

//     rect(0,0, backX,backY);
    
//     backX++;
//     backY++;


//     while(backX >= 150){
//       backX--;
//       backY--;
//     }

//     pop();
// }

function colorChange() {
  color.r = random(255);
  color.g = random(255);
  color.b = random(255);
}
// var prevVal = 0;
// function selectColor(){
//   var colorList = ['#581845', '#900c3f', '#c70039', '#ffs733', '#ffc505'];
//   console.log(colorList[0]);

//   var newVal = random(0,4);

//   while(prevVal == newVal){
//     newVal = random(0,4);
//   }

//   prevVal = newVal;

//   console.log(colorList[prevVal]);
//   return colorList[prevVal];

// }

function gettingHits(ball, barrior){
  if (ball.xPos + ball.width + ball.xSPEED>= barrior.xPos
    && ball.xPos + ball.xSPEED < barrior.xPos + barrior.width
    && ball.yPos + ball.height > barrior.yPos
    && ball.yPos < barrior.yPos + barrior.heght
  ) {
    // colorChange();
    ball.xSPEED = ball.xSPEED * -1.00;
  }

  if (ball.xPos + ball.width >= barrior.xPos
    && ball.xPos < barrior.xPos + barrior.width
    && ball.yPos + ball.height +ball.ySPEED> barrior.yPos
    && ball.yPos + ball.ySPEED < barrior.yPos + barrior.heght
  ) {
    // colorChange();
    ball.ySPEED = ball.ySPEED * -1.00;
  }
}