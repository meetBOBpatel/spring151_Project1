let rectANG = {
  x: 100,
  y: 100,
  w: 50,
  h: 50,
  sx: 5,
  sy: 2
};

let rectANG2 = {
  x: 10,
  y: 10,
  w: 10,
  h: 10,
  sx: 10,
  sy: 2
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  if(rectANG2.x > 400-25 && rectANG2.x < 25 ){
    rectANG.sx = rectANG.sx * -1.00;
  }

  if(rectANG2.y > 400-25 && rectANG2.y > 25){
    rectANG2.sy = rectANG2.sy * -1.00;
  }
  
  rect(rectANG.x, rectANG.y, rectANG.w, rectANG.h)
  rect(rectANG2.x, rectANG2.y, rectANG2.w, rectANG2.h)
  
  rectANG2.x+= rectANG.sx;
  rectANG2.y+= rectANG.sy;
  
}