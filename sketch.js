//namespacing

const Engine=Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine,world;
var ground;
var ball;
function setup() {
  createCanvas(400,400);

  engine=Engine.create();
  world=engine.world;
  //createSprite(400, 200, 50, 50);
var ground_options={
 isStatic:true

}
ground=Bodies.rectangle(200,390,50,50,ground_options);
World.add(world,ground)
console.log(ground)

var ball_options={
restitution:1,
density:1
}
ball=Bodies.circle(200,100,30,ball_options);
World.add(world,ball);
console.log(ball)
}

function draw() {
  background(0);  
  Engine.update(engine);
rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400,50)
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30);
  //drawSprites();
}