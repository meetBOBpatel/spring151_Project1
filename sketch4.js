
  var d;
  var theta = 0;

  function setup() {
    createCanvas(windowWidth, windowHeight);
    d = height -10;
    

  }
  
  function draw() {
    // frameRate(30);
    background(51);

    var s1 = 10 + (sin(theta + PI/2) *d)/40 + d/20;
    let s2 = 10 + (sin(theta) * d) / 80 + d / 40;
    var s3 = 10 + (sin(theta + PI) * d) / 8 + d / 4;

    fill(0);

      for (let x = 50; x <= width; x += 100) {
        for (let y = 50; y <= height; y += 100) {
            
          stroke(0);
          strokeWeight(s1);
          point(x, y);
        }
      }

      for (let x = 0; x <= width; x += 100) {
        for (let y = 0; y <= height; y += 100) {
          stroke(255);
          strokeWeight(s2);
          point(x, y);
        }
      }

    theta += 0.02;
  }

  //https://p5js.org/examples/math-sine.html