//write the story


var bg;
var shooter,shooter_shooting,monster,bullet,Apple;
var bgImg,shooter2Img,shooterShootingImg,monsterImg,bulletImg,AppleImg;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monsterGroup, bulletGroup;

function preload(){
    bgImg=loadImage("assests/Images/sbg.jpg");
    shooterShootingImg=loadImage("assests/Images/shooter_3.png");
    shooter2Img=loadImage("assests/Images/shooter_2.png");
    monsterImg=loadImage("assests/Images/monster1.png");
    bulletImg=loadImage("assests/Images/bullet-1.png");
    AppleImg=loadImage("assests/Images/Apple1.png")
}
function setup(){
    createCanvas(windowWidth,windowHeight);
    bg=createSprite(windowWidth/2,windowHeight/2,120,120);
    bg.addImage(bgImg);
    bg.scale=(3.5)

    shooter=createSprite(windowWidth-1100,windowHeight-150,20,20);
    shooter.addImage(shooter2Img);  
    shooter.scale=(0.4);
   // console.log(shooter2);
    
   // monster=createSprite(windowWidth-500,windowHeight-120,20,20);
   // monster.addImage(monsterImg);
   // monster.scale=(0.3);

    //bullet=createSprite(windowWidth-500,windowHeight-120,20,20);
   //bullet.addImage(bulletImg);
   //bullet.scale=(0.2);

   //Apple=createSprite(windowWidth-500,windowHeight-120,20,20);
   //Apple.addImage(AppleImg);
   //Apple.scale=(0.1);

    monsterGroup=new Group();
    bulletGroup=new Group();
    AppleGroup=new Group();
}

function draw(){
  if(gameState===PLAY){
      handlePlayerControls();
      spawnMonsters();
      spawnApple();
  }

  drawSprites();
}

/*****handlePlayerControls ***********/
function handlePlayerControls () {
  if(keyDown("up_arrow")) {
    if(shooter.y>1 )
      shooter.y=shooter.y-9;
    
  } 
   
  if(keyDown("down_arrow")) {
    if(shooter.y<windowHeight-120 )
        shooter.y=shooter.y+3;
  } 
    
  if(keyWentDown("space")) {
      shooter.addImage (shooterShootingImg);
      // create bullets
      bullet=createSprite(shooter.width,shooter.y-30,20,10);
      bullet.addImage(bulletImg);
      bullet.scale=(0.1);
      bullet.velocityX=40;
      bulletGroup.add(bullet);
      bullet.lifeTime=100;
      shooter.depth = bullet.depth +2;
  } 

  if(keyWentUp("space")) {
    shooter.addImage (shooter2Img);
  } 
}

/***** spawnMonsters*****/
function spawnMonsters(){
  if(frameCount%100==0){
    monster=createSprite(windowWidth,random(50,windowHeight-200),20,20);
    monster.scale=0.3;
    monster.velocityX=-5;
    monster.lifetime=200;
    monster.addImage(monsterImg);
    monsterGroup.add(monster)
  }
}
/***** spawnApple*****/
function spawnApple(){
  if(frameCount%150==0){
    Apple=createSprite(windowWidth,random(70,windowHeight-120),20,20);
    Apple.scale=0.1;
    Apple.velocityX=-5;
    Apple.lifetime=200;
    Apple.addImage(AppleImg);
    AppleGroup.add(Apple)
  }
}



