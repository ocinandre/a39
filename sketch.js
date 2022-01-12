var cohete, laser, background,asteroideA,asteroideB,asteroideC,asteroideD,laserGroup;
var coheteImage, laserImage, asteroideAImage, asteroideBImage, asteroideCImage ,asteroideDImage, backgroundImage;
var gameState="inicio";
var score=0;
var sound;
function preload(){
  sound = loadSound("galaga-88-intro meloboom.mp3"); 
  backgroundImage = loadImage("fondo.png");
  laserImage = loadImage("bala1.png");
  coheteImage = loadImage("cohete.png");
  asteroideAImage = loadImage("imagen1.png");
  asteroideBImage = loadImage("imagen2.png");
  asteroideCImage = loadImage("imagen3.png");
  asteroideDImage = loadImage("imagen4.png");
  
}



function setup() {
  createCanvas(1600,600);
  sound.play()

 

  //crea el fondo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 5
  
  //crea el arco para disparar las flechas
  cohete = createSprite(1580,220,20,50);
  cohete.addImage(coheteImage); 
  cohete.scale = 0.2;
   
 
   score = 0    
   asteroideA=new Group();
   asteroideB=new Group(); 
   asteroideC=new Group();
   asteroideD=new Group();
  laserGroup=new Group();
 
}
 
function draw() {
 background(0);

  
  //fondo en movimiento
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/5;
    }
  
  //cohete en movimiento
  cohete.y = World.mouseY

  
  



   //suelta el lasser cuando se presione la tecla de barra espaciadora
  if (keyDown("space")&& gameState === "inicio") {
    createLaser();
    
   
  }
   
  //crea enemigos de forma continua
  var asteroide = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (asteroide == 1) {
      MasteroideA();
    } else if (asteroide == 2) {
      NasteroideB();
    } else if (asteroide == 3) {
      BasteroideC();
    } else {
      VasteroideD();
    }
  }  
   
  if(laserGroup.isTouching(asteroideA)){
    asteroideA.destroyEach();
    laserGroup.destroyEach();
     score=score+1;

  }
  
   if(laserGroup.isTouching(asteroideB)){
    asteroideB.destroyEach();
    laserGroup.destroyEach();
     score=score+2;
  }
  
  if(laserGroup.isTouching(asteroideC)){
    asteroideC.destroyEach();
    laserGroup.destroyEach();
     score=score+3;
  }
 
   if(laserGroup.isTouching(asteroideD)){
    asteroideD.destroyEach();
    laserGroup.destroyEach();
     score=score+1;
  }
  
 
  
  
  drawSprites();
  fill("white");
  text("Puntuación: "+ score, 1500,50);
  sound.loop = true;
  
 
  inicio();


  
}



//crea las flechas para el arco
 function createLaser() {
  var laser= createSprite(1580, 100, 60, 10);
  laser.addImage(laserImage);
  laser.x = 1580;
  laser.y=cohete.y;
  laser.velocityX = -4;
  laser.lifetime = 3000;
  laser.scale = 0.3;
  laserGroup.add(laser);
  
}

function MasteroideA() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(asteroideAImage);
  red.velocityX = 3;
  red.lifetime = 3000;
  red.scale = 0.5;
  asteroideA.add(red);

}

function NasteroideB() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(asteroideBImage);
  blue.velocityX = 3;
  blue.lifetime = 3000;
  blue.scale = 0.5;
  asteroideB.add(blue);
}

function BasteroideC() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(asteroideCImage);
  green.velocityX = 3;
  green.lifetime = 3000;
  green.scale = 0.5;
  asteroideC.add(green);
}

function VasteroideD() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(asteroideDImage);
  pink.velocityX = 3;
  pink.lifetime = 3000;
  pink.scale = 0.5
  asteroideD.add(pink);
}
function inicio(){
  text("Pulsa spacio para inciar", 1300,200);
  fill("white");
}
