const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var button_1,button_2
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  button_1=createImg("right.png")
  button_1.position(20,20)
  button_1.size(50,50)
  button_1.mouseClicked(Hforce)
  button_2=createImg("up.png")
  button_2.position(100,20)
  button_2.size(50,50)
  button_2.mouseClicked(Vforce)
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 ball1=new Ball(200,200,10)
  rectMode(CENTER);
  ellipseMode(RADIUS);

}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ball1.show()
  Engine.update(engine);

}
function Hforce(){
  console.log("horizantol")
  Matter.Body.applyForce(ball1.Body,{x:0,y:0},{x:0.05,y:0})
}
function Vforce(){
  Matter.Body.applyForce(ball1.Body,{x:0,y:0},{x:0,y:-0.05})
}
