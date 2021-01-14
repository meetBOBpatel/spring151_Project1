function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    // background(mouseX,mouseY,mouseX);
    if (mouseIsPressed) {
        fill(0);
      } else {
        fill(255);
      }
      ellipse(mouseX, mouseY, 80, 80);
  }