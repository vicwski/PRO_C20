var rectFixo, rectMovendo;


function setup() {
  createCanvas(800,400);
  rectFixo = createSprite(200, 200, 50, 100);
  rectFixo.shapeColor = "green";
  rectFixo.debug = true;
  rectMovendo = createSprite(800,400,100,50);
  rectMovendo.shapeColor = "green";
  rectMovendo.debug = true;
}

function draw() {
  background(238,232,170);  
  rectMovendo.y = World.mouseY;
  rectMovendo.x = World.mouseX;

if (rectMovendo.x - rectFixo.x < rectFixo.width/2 + rectMovendo.width/2 && rectFixo.x - rectMovendo.x < rectFixo.width/2 + rectMovendo.width/2 &&  rectMovendo.y - rectFixo.y < rectFixo.height/2 + rectMovendo.height/2 && rectFixo.y - rectMovendo.y < rectFixo.height/2 + rectMovendo.height/2  ){
    rectFixo.shapeColor = "red";
    rectMovendo.shapeColor = "red";
  }
  else {
    rectFixo.shapeColor = "green";
    rectMovendo.shapeColor = "green";
  }


  drawSprites();
}