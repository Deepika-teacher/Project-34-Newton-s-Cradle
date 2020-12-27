const  Engine  = Matter.Engine;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const World=Matter.World;
const Constraint=Matter.Constraint;
const Mouse=Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var engine,world;
var bob=[],sling=[];

function setup() {
  var canvas=createCanvas(windowWidth/2,windowHeight/2);
  engine=Engine.create();
  world=engine.world;

  let canvasMouse =Mouse.create(canvas.elt);
  canvasMouse.pixelRatio=pixelDensity();
  let options={
    mouse :canvasMouse
  };
  mconstraint=MouseConstraint.create(engine,options);
  World.add(world,mconstraint)
  for(i=0;i<5;i++){
    bob[i]=new Pendulum((width/2-200)+80*i,height/1.5,"red");
  }
  for(i=0;i<5;i++){
    sling[i]=new Sling(bob[i].body,{x:bob[i].body.position.x,y:100});
  }
  
}

function draw() {
  background(0);

  Engine.update(engine);

  for(i=0;i<5;i++){
    bob[i].display();
  }

  for(i=0;i<5;i++){
    sling[i].display();
  }
 
}

// function mouseDragged(){
//   for(var i=1;i<2;i++){
//     Body.setPosition(bob[1].body,{x:mouseX,y:mouseY});
//   } 
// }
