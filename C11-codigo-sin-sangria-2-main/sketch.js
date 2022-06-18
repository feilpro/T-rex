var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud, cloudIMG
var cloudsGroup
var obstaculos, obstaculosIMG, obstaculosIMG2, obstaculosIMG3, obstaculosIMG4, obstaculosIMG5, obstaculosIMG6
var ObsGroup

function preload() {
   trex_running = loadAnimation("trex1.png", "trex2.png", "trex3.png");
   trex_collided = loadImage("trex_collided.png");
   groundImage = loadImage("ground2.png")
   cloudIMG = loadImage("cloud.png")
   obstaculosIMG = loadImage("obstacle1.png")
   obstaculosIMG2= loadImage("obstacle2.png")
   obstaculosIMG3= loadImage("obstacle3.png")
   obstaculosIMG4= loadImage("obstacle4.png")
   obstaculosIMG5= loadImage("obstacle5.png")
   obstaculosIMG6= loadImage("obstacle6.png")
}

function setup() {
   createCanvas(600, 200);
   //create a trex sprite
   trex = createSprite(50,160,20,50);
   trex.addAnimation("running", trex_running);
   trex.scale = 0.5;
   //create a ground sprite
   ground = createSprite(200,180,400,20);
   ground.addImage("ground",groundImage);
   ground.x = ground.width /2;
   ground.velocityX = -4;
    //creacxion de piso invisible
    invisibleGround=createSprite(50,190,10,10);
    invisibleGround.visible=false;
       //grupo de nubes   
       cloudsGroup =new Group();
}

function draw() {
   background("#F1F1F0");
   //jump when the space button is pressed
    if (keyDown("space") && trex.y>=100) {
       trex.velocityY = -10;
     }
     //implementando la gravedad
     trex.velocityY = trex.velocityY + 0.8
         if (ground.x < 0) {
           ground.x = ground.width / 2;
          }
                 trex.collide(invisibleGround);
                           drawSprites();
   LNube();
      Fobtacles();
}


    function LNube() {
   //Nube
   if(frameCount %60===0){
   cloud = createSprite(590,50,10,10)
   cloud.addImage(cloudIMG)
   cloud.scale=0.1;
   cloud.velocityX=-3
   cloud.y=Math.round(random(10,80))

   //tiempo de vida
   //tamaño del canvas/velocity X/Y

   cloud.lifetime=200;
   console.log("lol");
   cloudsGroup.add(cloud);
   cloud.depth=trex.depth;
   trex.depth=trex.depth+1;
   }
    }

      function Fobtacles() { 
      if(frameCount %60===0){
         obstaculos = createSprite(590,170,10,10)
         var rO=Math.round(random(1,6))
         console.log(rO)
            switch(rO) { 
              case 1: obstaculos.addImage(obstaculosIMG); 
              break;
              case 2: obstaculos.addImage(obstaculosIMG2); 
              break;
              case 3: obstaculos.addImage(obstaculosIMG3); 
              break;
              case 4: obstaculos.addImage(obstaculosIMG4); 
              break;
              case 5: obstaculos.addImage(obstaculosIMG5); 
              break;
              case 6: obstaculos.addImage(obstaculosIMG6); 
              break;
            default:break;
                         }
                  obstaculos.scale=0.3;
                   obstaculos.velocityX=-2
       //arregar estructurea swich y variables de cada obstaculo
                             }
                           }
       
