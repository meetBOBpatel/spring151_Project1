let circle = {
  xPos: 50,
  yPos: 50,
  height:  50,
  width:  50,
  xSPEED:  4,
  ySPEED: 7
}

let color = {
  r : 255,
  g : 255,
  b : 40
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}
  
function draw() {

  background(0);

  ellipse(circle.xPos, circle.yPos, circle.width, circle.height);
  fill(color.r,color.g,color.b);

  circle.xPos+= circle.xSPEED;
  circle.yPos+= circle.ySPEED;
  
  color.r = random(255);
  color.g = random(255);
  color.b = random(255);

  circle.width = random(50);
  circle.height = random(50);

  if(circle.xPos > windowWidth-25 || circle.xPos < 25){
    circle.xSPEED = circle.xSPEED * -1.01;
    ellipse(circle.xPos*-1, circle.yPos*-1, circle.width, circle.height);

  }

  if(circle.yPos > windowHeight-25 || circle.yPos < 25){
    circle.ySPEED = circle.ySPEED * -1.01;

  }

}

function keyPressed() {
  if(keyCode == UP_ARROW) {
      circle.xSPEED = circle.xSPEED * -1.25;
  } else if (keyCode == DOWN_ARROW) {
      circle.xSPEED = circle.xSPEED * -1.25;
      circle.ySPEED = circle.ySPEED * -1;
  }
  
  return 0;
}
