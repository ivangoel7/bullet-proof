var bullet,wall,speed,weight,damage,thickness

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,thickness,height/2)
  wall.shapeColor="grey"
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  damage=0.5*weight*speed*speed/thickness*thickness*thickness
}

function draw() {
  background(0);  
  bullet.velocityX=speed;
  if (damage>1000){
    bullet.shapeColor="red";
    
  }
  if (damage<10){
    bullet.shapeColor="green"
  }
  drawSprites();
}