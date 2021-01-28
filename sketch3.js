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

function setup(){
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    angleMode(DEGREES);
}

function draw(){
    background(51);

    push();

    noFill();
    translate(width / 2, height / 2);
    rotate(45);
    stroke('yellow');
    strokeWeight(5);
    rect(circles.x, circles.y, circles.wid, circles.hei);

    for(let i = 0; i < 50; i++){
        circles.wid = circles.wid + 1;
        circles.hei = circles.hei + 1;
        i+=2;
    }

    for(let i = 100; i > 0; i--){
        circles.wid = circles.wid - 1;
        circles.hei = circles.hei - 1;
        i-=2;
    }
     pop();    
    

    
}