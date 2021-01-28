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

let VBar = {
  xPos: 500,
  yPos: 550,
  width: 150,
  heght: 10,
};

let VBar2 = {
  xPos: 100,
  yPos: 300,
  width: 100,
  heght: 10,
};

let VBar3 = {
  xPos: 1200,
  yPos: 700,
  width: 100,
  heght: 10,
};

let HoriBar = {
  xPos: 1000,
  yPos: 290,
  width: 10,
  heght: 150,
};


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

  // circle.width = random(50);
  circle.height = random(50);

  if(circle.xPos > windowWidth-25 || circle.xPos < 25){
    circle.xSPEED = circle.xSPEED * -1.00;
  }

  if(circle.yPos > windowHeight-25 || circle.yPos < 25){
    circle.ySPEED = circle.ySPEED * -1.00;
  }

  rect(VBar.xPos, VBar.yPos, VBar.width, VBar.heght);
  rect(VBar2.xPos, VBar2.yPos, VBar2.width, VBar2.heght);
  rect(VBar3.xPos, VBar3.yPos, VBar3.width, VBar3.heght);
  rect(HoriBar.xPos, HoriBar.yPos, HoriBar.width, HoriBar.heght);

  return 0;
}
  
 
