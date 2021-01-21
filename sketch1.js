
let xPos = 50;
let yPos = 50;

let xxPos = 70;
let yxPos = 22;

let xSPEED = 4;
let ySPEED = 7;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

  }
  
  function draw() {

    ellipse(xPos, yPos ,50 ,50 );
    fill(255,255,40);


    xPos+= xSPEED;
    yPos+= ySPEED;


    if(xPos > windowWidth-25 || xPos < 25){
      xSPEED = xSPEED * -1.125;
    }
    if(yPos > windowHeight-25 || yPos < 25){
      ySPEED = -ySPEED;
    }


  }