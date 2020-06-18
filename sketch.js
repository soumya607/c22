const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var universe , ourWorld, ground , ball;

function setup() {
  var canvas = createCanvas(400,400);
  universe = Engine.create();
  ourWorld = universe.world;
  var ground_option = {
    isStatic:true
  };
  var ball_option = {
    restitution:0.8
  };
  ground = Bodies.rectangle(200,390,200,20,ground_option);
  World.add(ourWorld,ground);
  ball = Bodies.circle(200,100,20,ball_option);
  World.add(ourWorld,ball);
}

function draw() {
  background(0); 
  Engine.update(universe);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
  
}