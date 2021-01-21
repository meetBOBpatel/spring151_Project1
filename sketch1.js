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
    circle.xSPEED = circle.xSPEED * -1;

  }
  if(circle.yPos > windowHeight-25 || circle.yPos < 25){
    circle.ySPEED = circle.ySPEED * -1;

  }

}