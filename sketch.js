var rain1,rain2,rain3,rain4,rain5,rain6,raindrop;
var bucket, player;
var background,backgroundImage;
var water;
var score;
var waterLevel;
var rainSong;
var splash;


function preload(){
  
  backgroundImage=loadImage("RainBackground.jpg");
  raindrop=loadImage("drop.png");
  bucket=loadImage("bucket.jpg");
  waterLevel=loadImage("ocean2.jpg");
  rainSong=loadSound("RaindropsOnMyHead.mp3");
  splash=loadSound("splash.mp3");
  
}

function setup() {
  createCanvas(800, 825);
  //background(255, 204, 0);
  
  background = createSprite(280,400,600,600);
  background.addImage(backgroundImage);
  background.scale = 1.5
  
  water=createSprite(400, 950, 800, 250);
  water.addImage(waterLevel);
  
  player=createSprite(400,620,50,2);
  player.x=World.mouseX;
  player.addImage(bucket);
  
  rain1=createSprite(900,900,1,1);
  rain1.visible=false;
  rain2=createSprite(900,900,1,1);
  rain2.visible=false;
  rain3=createSprite(900,900,1,1);
  rain3.visible=false;
  rain4=createSprite(900,900,1,1);
  rain4.visible=false;
  rain5=createSprite(900,900,1,1);
  rain5.visible=false;
  rain6=createSprite(900,900,1,1);
  rain6.visible=false;
 
  bucket=createSprite(400,575,50,5);
  bucket.x=player.x;
  bucket.visible=false;
  l=createSprite(400,825,800,5);
  l.visible=false;
  score=0;  
  rainSong.play();
}

function draw() {
   
  if (background.y > 500){
    background.y = background.height/1.5;
  }
  
// moving ground
  background.velocityY = 4;
    
  bucket.depth=water.depth;
  water.depth=water.depth+1;
  player.x=World.mouseX;
  bucket.x=player.x;
  
  rain();
 
  
  if(rain1.collide(water)){
    rain1.visible=false;
    rain1.x=2000;
    water.y=water.y-50;
    splash.play();
  }
  if(rain2.collide(water)){
    rain2.visible=false;
    rain2.x=2000;
    water.y=water.y-50;
    splash.play();
  }
  if(rain3.collide(water)){
    rain3.visible=false;
    rain3.x=2000;
    water.y=water.y-50;
    splash.play();
  }
  if(rain4.collide(water)){
    rain4.visible=false;
    rain4.x=2000;
    water.y=water.y-50;
    splash.play();
  }
  if(rain5.collide(water)){
    rain5.visible=false;
    rain5.x=2000;
    water.y=water.y-50;
    splash.play();
  }
  if(rain6.collide(water)){
    rain6.visible=false;
    rain6.x=2000;
    water.y=water.y-50;
    splash.play();
  }
  if(rain1.collide(bucket)){
    rain1.visible=false;
    rain1.x=2000;
    score=score+1;
  }
  if(rain2.collide(bucket)){
    rain2.visible=false;
    rain2.x=2000;
    score=score+1;
  }
  if(rain3.collide(bucket)){
    rain3.visible=false;
    rain3.x=2000;
    score=score+1;
  }
  if(rain4.collide(bucket)){
    rain4.visible=false;   
    rain4.x=2000;
    score=score+1;
  }
  if(rain5.collide(bucket)){
    rain5.visible=false;
    rain5.x=2000;
    score=score+1;
  }
  if(rain6.collide(bucket)){
    rain6.visible=false;
    rain6.x=2000;
    score=score+1;
  }
  if(water.y<700){
  water.y=700;
  }  
    
  drawSprites();
   

   
  if(water.y<701){
    rain1.x=2000;
    rain1.visible=true;
  
    rain2.x=2000;
    rain2.visible=true;
  
    rain3.x=2000;
    rain3.visible=true;
  
    rain4.x=2000;
    rain4.visible=true;
  
    rain5.x=2000;
    rain5.visible=true;
  
    rain6.x=2000;
    rain6.visible=true;
  
    player.visible=false;
    textSize(50);
    fill(0);
    text("You Lose",300,350);
    }

  if((score===50)&&water.y>700){
    score=50;
    rain1.x=2000;
    rain1.visible=true;
  
    rain2.x=2000;
    rain2.visible=true;
  
    rain3.x=2000;
    rain3.visible=true;
  
    rain4.x=2000;
    rain4.visible=true;
  
    rain5.x=2000;
    rain5.visible=true;
  
    rain6.x=2000;
    rain6.visible=true;   
    textSize(60);
    fill(0);
    text("You Win!",300,350);
  }
  
     
  textSize(30);
  fill(0);
  text("Score : "+score,570,50); 
  
  
  
  
}
//creates falling raindrops
function rain(){
  
  if((frameCount%23===0)&&rain1.visible===false){
    var rand = (random(50,750));
    rain1=createSprite(rand,-20,10,10);
    rain1.addImage(raindrop);
    rain1.scale=0.05;
    rain1.velocityY=5;
    rain1.lifetime=300;
  }
  
  if((frameCount%70===0)&&rain2.visible===false){
    var rand2 = (random(50,750));
    rain2=createSprite(rand2,-20,10,10);
    rain2.addImage(raindrop);
    rain2.scale=0.05;
    rain2.velocityY=5;
    rain2.lifetime=300;
  }
  
  if((frameCount%57===0)&&rain3.visible===false){
    var rand3 = (random(50,750));
    rain3=createSprite(rand3,-20,10,10);
    rain3.addImage(raindrop);
    rain3.scale=0.05;
    rain3.velocityY=5;
    rain3.lifetime=300;
  }
  
  if((frameCount%89===0)&&rain4.visible===false){
    var rand4 = (random(50,750));
    rain4=createSprite(rand4,-20,10,10);
    rain4.addImage(raindrop);
    rain4.scale=0.05;
    rain4.velocityY=5;
    rain4.lifetime=300;
  }
  
  if((frameCount%110===0)&&rain5.visible===false){
    var rand5 = (random(50,750));
    rain5=createSprite(rand5,-20,10,10);
    rain5.addImage(raindrop);
    rain5.scale=0.05;
    rain5.velocityY=5;
    rain5.lifetime=300;
  }
  
  if((frameCount%96===0)&&rain6.visible===false){
    var rand6 = (random(50,750));
    rain6=createSprite(rand6,-20,10,10);
    rain6.addImage(raindrop);
    rain6.scale=0.05;
    rain6.velocityY=5;
    rain6.lifetime=300;
  }
}

