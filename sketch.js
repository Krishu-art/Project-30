const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1, ground2, ground3;
var box1; 
var polygon, slingshot;
var slingshotForce = 100;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
      ground1 = new Ground(400,height,800,20);
      ground2 = new Ground(600,300,310,10);
	    ground3 = new Ground(400,600,310,10);
	  
	  box1 = new Box(290,590,60,70);
	  box2 = new Box(350,590,60,70);
	  box3 = new Box(410,590,60,70);
	  box4 = new Box(470,590,60,70);
    box16 = new Box(530,590,60,70)
	 
	  box5 = new Box(350,560,60,70);
	  box6 = new Box(410,560,60,70);
    box17 = new Box(470, 560, 60, 70);

    box18 = new Box(430,530,60,70);

	  box7 = new Box(490,290,60,70);
    box8 = new Box(550,290,60,70);
    box9 = new Box(610,290,60,70);
    box10 = new Box(670,290,60,70);
    box11 = new Box(730,290,60,70);

    box12 = new Box(550,260,60,70);
    box13 = new Box(610,260,60,70);
    box14 = new Box(670,260,60,70);
    
    box15 = new Box(600,230,60,70);

    polygon = new Polygon(100,100,60);
    slingshot = new SlingShot(polygon.body,{x:200, y:300});
	  
    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  textSize(30);
  text("Press UP-ARROW for a second chance", 50,50);

  ground1.display();
  ground2.display();
  ground3.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  
  box5.display();
  box6.display();

  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();

  box12.display();
  box13.display();
  box14.display();
  
  box15.display();
  box16.display();
  box17.display();
  box18.display();

  polygon.display();
  slingshot.display();

  drawSprites();
 
}

function mouseDragged()
{
	Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	slingshot.fly();
    // distance=int(dist(stone.x,stone.y,mango1.x,mango1.y));
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
    Matter.Body.setPosition(polygon.body, {x:200, y:200}) 
	  slingshot.attach(polygon.body);
	}
  }
