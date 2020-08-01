class Baseclass{
    constructor(x,y,width,height,angle)
    {
     var options = {
         restitution:0.4,
         friction:1.2,
         density:1
     }
     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width=width;
     this.height=height;
     World.add(world,this.body);
    }
    display(){
        var c=this.body.position;
        var p=this.body.angle;
        push();
        translate(c.x,c.y);
        rotate(p);
        rectMode(CENTER);
        rect(c.x,c.y,this.width,this.height);
        pop();

    }

}
