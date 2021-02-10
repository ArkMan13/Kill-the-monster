const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var Block1;

function preload(){
    backgroundImg = loadImage("GamingBackground.png")
}

function setup(){
    var canvas = createCanvas(1515, 725);
    engine = Engine.create();
    world = engine.world;

    Block1 = new Block(800,100,70,70);
    Block2 = new Block(800,100,70,70);
    Block3 = new Block(800,100,70,70);
    Block4 = new Block(800,100,70,70);
    Block5 = new Block(800,100,70,70);
    Block6 = new Block(800,100,70,70);
    

    Block7 = new Block(700, 100, 70, 70);
    Block8 = new Block(700, 100, 70, 70);
    Block9 = new Block(700, 100, 70, 70);
    Block10 = new Block(700, 100, 70, 70);
    Block11 = new Block(700, 100, 70, 70);
    Block12 = new Block(700, 100, 70, 70);
    
    Block13 = new Block(600, 100, 70, 70);
    Block14 = new Block(600, 100, 70, 70);
    Block15 = new Block(600, 100, 70, 70);
    Block16 = new Block(600, 100, 70, 70);
    Block17 = new Block(600, 100, 70, 70);
    Block18 = new Block(600, 100, 70, 70);
    Block19 = new Block(600, 100, 70, 70);
    Block20 = new Block(600, 100, 70, 70);
    

    

    ground = new Ground(0, 600, width+width/2+90, 25);

    monster = new Monster(1100, 500, 200)

    ball = new Hero(200, 200, 80);

    rope = new Rope(ball.body, {x:300, y:50})
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    Block1.display();
    Block2.display();
    Block3.display();
    Block4.display();
    Block5.display();
    Block6.display();
    Block7.display();
    Block8.display();
    Block9.display();
    Block10.display();
    Block11.display();
    Block2.display();
    Block13.display();
    Block14.display();
    Block15.display();
    Block16.display();
    Block17.display();
    Block18.display();
    Block19.display();
    Block20.display();
    
    ball.display();

    monster.display();

    ground.display();

    fill(37, 247, 58);
    stroke("black")
    strokeWeight(2);
    textSize(50)
    text("KILL THE MONSTER", 700, 700)
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY})
}