var xPos=40;
var yPos=10;
var xVel=1;
var yVel=2;

function setup() {
  createCanvas(1000, 500);
}

function draw(){
    background(0,125,255);
    
    rect(xPos,yPos,30,30,10);
    noStroke();
    
    if(xPos>width || xPos<0){
        
        xVel=-xVel;
    }
    
    if(yPos>height || yPos<0){
        yVel=-yVel;
    }
    xPos+=xVel;
    yPos+=yVel;
}