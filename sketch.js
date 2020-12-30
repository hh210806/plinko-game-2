const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var groundimg;
var score = 0;
var particle;
var turn = 0;


var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;


function setup() { 
  createCanvas(480,800);
  
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 785, 480, 30);

  
  for (var i = 0; i <= width; i = i + 80){
    divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
  }

 
  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 75));
  }
  for (var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 175));
  }
  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 375));
  }

  
  
}

function draw() {
  text("Score : "+score,20,40);
  text(" 500 ", 5, 500);
  text(" 500 ", 80, 500);
  text(" 500 ", 160, 500);
  text(" 500 ", 240, 500);
  text(" 100 ", 325, 500);
  text(" 100 ", 400, 500);
  text(" 100 ", 480, 500);
  text(" 200 ", 550, 500);
  text(" 200 ", 630, 500);
  text(" 200 ", 725, 500);

  Engine.update(engine);
  ground.display();
  background(232, 255, 255 );
  
  if (frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-20, width/2+20), 10, 10));
  }

  ground.display();
  
  for (var k = 0; k < particles.length; k++){
    particles[k].display();
  }

  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  for (var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }
  if ( gameState =="end") {
    
    textSize(90);
    text("GameOver", 150, 300);
    //return
  }

  

  

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
    if(particle!=null)
    {
       particle.display();
        
        if (particle.body.position.y>760)
        {
              if (particle.body.position.x < 300) 
              {
                  score=score+500;      
                  particle=null;
                  if ( count>= 5) gameState ="end";                          
              }


              else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle=null;
                    if ( count>= 5) gameState ="end";

              }
              else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }      
              
        }
  
      }

   for (var k = 0; k < divisions.length; k++) 
   {
     divisions[k].display();
   }
   drawSprites();
}


 
  
  
