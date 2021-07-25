var iss, spacecraft
var bg, issimg, scimg1, scimg2, scimg3, scimg4
var hasDocked = false 

function preload(){
  bg = loadImage("images/spacebg.jpg");
  issimg = loadImage("images/iss.png");
  scimg1 = loadImage("images/spacecraft1.png");
  scimg2 = loadImage("images/spacecraft2.png");
  scimg3 = loadImage("images/spacecraft3.png");
  scimg4 = loadImage("images/spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  spacecraft = createSprite(280, 300);
  spacecraft.addImage(scimg1);
  spacecraft.scale = 0.15;

  iss = createSprite(330,200);
  iss.addImage(issimg);
  iss.scale = 0.7;
}

function draw() {
  background(bg); 
  if(!hasDocked){
    spacecraft.x+= random(+1,-1)  
  }
  if(keyDown("UP_ARROW")){
    spacecraft.y-= 2;
    spacecraft.addImage(scimg1);
  }
  if(keyDown("LEFT_ARROW")){
    spacecraft.x-= 2;
    spacecraft.addImage(scimg3);
  }
  if(keyDown("RIGHT_ARROW")){
    spacecraft.x+= 2;
    spacecraft.addImage(scimg4);
  }
  if(keyDown("DOWN_ARROW")){
    spacecraft.y+= 2;
    spacecraft.addImage(scimg2);
  }
  if(spacecraft.y<=(iss.y+60)&& spacecraft.x<=(iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white");
    text("Docking Succesfull!",200,310);

  }

  drawSprites();
}