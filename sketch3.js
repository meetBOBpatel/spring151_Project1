let r = {
    x: 400,
    y: 400,
    w: 50,
    h: 50
};

let circles = {
    x: 0,
    y: 0,
    wid: 100,
    hei: 100,
    speed: 1
};

// let frameCount = 30;
function setup(){
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    angleMode(DEGREES);
}

function draw(){
    background(51);

    push();

    for(let i = 0; i < 8; i ++){
    noFill();
    translate(width / 2, height / 2);
    rotate(90 * i / 8);
    let tx = 200 * noise(0.03*frameCount+ 50);
    translate(tx, 0);

    rect(circles.x, circles.y, circles.wid, circles.hei);


    // circles.wid = circles.wid + 1;
    // circles.hei = circles.hei + 1;
     pop();    
    }

     console.log("Width: " + circles.wid);
     console.log("Height: " + circles.hei);

    
}