let recANG = {
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
  xPos: 300,
  yPos: 300,
  width: 100,
  heght: 100,
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
  fill(color.r,color.g,color.b);

  // recANG.width = random(50);
  // recANG.height = random(50);

  if(recANG.xPos > windowWidth-25 || recANG.xPos < 25){
    recANG.xSPEED = recANG.xSPEED * -1.00;
  }

  if(recANG.yPos > windowHeight-25 || recANG.yPos < 25){
    recANG.ySPEED = recANG.ySPEED * -1.00;
  }

  if (recANG.xPos  + recANG.width > VBar2.xPos -5
     && recANG.xPos< VBar2.xPos + VBar2.width 
     && recANG.yPos + recANG.height > VBar2.yPos 
    //  && recANG.yPos < VBar2.yPos + VBar2.height
    )
     {
        
      colorChange();
      recANG.xSPEED = recANG.xSPEED * -1.00;

      console.log("Hitting");
  }


  recANG.xPos+= recANG.xSPEED;
  recANG.yPos+= recANG.ySPEED;

  rect(VBar.xPos, VBar.yPos, VBar.width, VBar.heght);
  rect(VBar3.xPos, VBar3.yPos, VBar3.width, VBar3.heght);
  rect(VBar2.xPos, VBar2.yPos, VBar2.width, VBar2.heght);

  rect(HoriBar.xPos, HoriBar.yPos, HoriBar.width, HoriBar.heght);
  rect(recANG.xPos, recANG.yPos, recANG.width, recANG.height);


  return 0;
}

function colorChange(){
  color.r = random(255);
  color.g = random(255);
  color.b = random(255);
}