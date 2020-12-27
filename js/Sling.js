class Sling{
    constructor(body,point){
        var options={
            bodyA : body,
            pointB : point
        }
        this.body=Constraint.create(options);
       
        World.add(world,this.body);
    }

    display(){
        var pointA=this.body.bodyA.position;
        var pointB=this.body.pointB;

        push();
        stroke("white");
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    } 
}