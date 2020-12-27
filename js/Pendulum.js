class Pendulum{
    constructor(x,y,colour){
        var options={
            restitution : 1,
            isStatic : false,
            density : 0.5,
            friction :0
        }
        this.body=Bodies.circle(x,y,40,options);
        this.colour=colour;
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.colour)
        ellipseMode(RADIUS);
        ellipse(0,0,40,40);
        pop();
    }
}