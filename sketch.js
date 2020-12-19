const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground
// left Row 1
var block1, block2, block3, block4
// left Row 1
var block5, block6, block7, block8
// left Row 1
var block9, block10, block11, block12


function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(1500, 790, 3000, 10)
    block1 = new Box(1000, 780, 70, 70)
    block2 = new Box(1000, 780, 70, 70)
    block3 = new Box(1000, 780, 70, 70)
    block4 = new Box(1000, 780, 70, 70)

    block5 = new Box(1080, 780, 70, 70)
    block6 = new Box(1080, 780, 70, 70)
    block7 = new Box(1080, 780, 70, 70)
    block8 = new Box(1080, 780, 70, 70)
   
    
    
    
}

function draw(){
    
    background(0);
    Engine.update(engine);
    ground.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
   
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    

   

   
}

